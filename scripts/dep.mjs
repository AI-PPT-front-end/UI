// 部署脚本
import * as fs from  'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import { Client } from 'ssh2';
import jsonfile from 'jsonfile';
import { EventEmitter } from 'events';
import chalk from 'chalk';

const depJson = 'deploy-cache.json';
const distDir = 'UI';
const dockerDir = '/data/PPTist/dist';
let cached = jsonfile.readFileSync(depJson);
let toUpload = [];
let toMkdir = [];
let dockerCpItem = [];

const serverUser = 'root';
const serverIP = '118.89.49.189';
const serverPassword = 'AIppt2023';

function isPublicFile(fn) {
  const tails = ['jpg', 'jpeg', 'png', 'ttf', 'psd', 'ico'];
  for (const tail of tails) {
    if (fn.endsWith(`.${tail}`)) {
      return true;
    }
  }
  return false;
}

const sftpClient = new EventEmitter()
const conn = new Client();

function uploadFile(srcPath, destPath) {
  sftpClient.emit('send', srcPath, destPath);
}

function mkdirOnServer(dirPath) {
  execSync(`ssh ${serverUser}@${serverIP} mkdir -p ${dirPath}`);
}

new Promise((resolve, reject) => {  // 启动服务器连接
  conn.on('ready', () => {
    conn.sftp((err, sftp) => {
      if (err) {
        console.error(chalk.red(`连接服务器失败，请尝试 ssh root@${serverIP} 连接一下，密码是${serverPassword}`))
        reject(err);
        return;
      }
      sftpClient.on('send', (srcPath, destPath) => {  // 监听 send 事件
        sftp.fastPut(srcPath, destPath, (err) => {
          if (err) {
            console.error(chalk.red(`文件 ${srcPath} 上传 ${destPath} 失败`))
          } else {
            console.log(chalk.green(`文件 ${srcPath} 上传 ${destPath} 成功`))
            toUpload.splice(toUpload.findIndex(value => value === srcPath), 1)
            if (toUpload.length === 0) {
              sftpClient.emit('end')
            }
          }
        })
      })
      sftpClient.once('end', () => {
        console.log(`关闭连接`)
        conn.end()
      })
      resolve(distDir)
    });
  }).connect({
    host: serverIP,
    port: 22,
    username: serverUser,
    password: serverPassword
  });
}).then(function upload(theDistDir) {
  for (const entry of fs.readdirSync(theDistDir, { withFileTypes: true })) {
    const p = path.join(theDistDir, entry.name);
    if (entry.isDirectory()) {
      toMkdir.push(p);
      upload(p)
    } else {
      if (isPublicFile(p)) {
        if (!cached.includes(p)) {
          cached.push(p);
          toUpload.push(p);
          console.log(p, '\x1b[32m未缓存，上传\x1b[0m');
        } else {
          console.log(p, '\x1b[31m已缓存，放弃上传\x1b[0m');
        }
      } else {
        toUpload.push(p);
        console.log(p, '\x1b[33m非可缓存文件，直接上传\x1b[0m');
      }
    }
    if (theDistDir === distDir) {
      dockerCpItem.push(p)
    }
  }
}).then(() => {
  if (toUpload.length > 0) {
    for (const dir of toMkdir) {
      mkdirOnServer(dir);
    }
    for (const file of toUpload) {
      const destPath = path.join('/root', file);
      console.log('上传文件', file, '到服务器', destPath);
      uploadFile(file, destPath);
    }
    dockerCpItem.forEach(entry => {
      const destPath = path.join('/root', entry);
      const dockerDestPath = path.join(dockerDir, entry);
      console.log('服务器复制文件', destPath, '到 node 服务器的', dockerDestPath);
      execSync(`ssh ${serverUser}@${serverIP} docker cp ${destPath} 480db34572b0:${dockerDestPath}`);
    })
  } else {
    console.log('\x1b[32m没有任务\x1b[0m');
  }
  jsonfile.writeFileSync(depJson, cached);
}).catch(e => {
  console.error(chalk.red(`脚本执行失败`, e))
})

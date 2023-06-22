<template>
	<div class="content">
		<img class="logo" src="../assets/logo.png"/>
		<div class="input-group">
			<input placeholder="请输入手机号"/>
			<div class="row">
				<input placeholder="请输入验证码"/>
				<div>
					获取验证码
				</div>
			</div>
		</div>
		<div class="btn" @click="$router.push({name: 'Home'})">
			登录/注册
		</div>
		<div class="extra">使用账号密码登录</div>
		<div class="other">
			<div class="title">&nbsp;使用其他方式登录&nbsp;</div>
			<div class="row">
				<img src="../assets/微信.png" alt="微信">
				<img src="../assets/飞书.png" alt="飞书">
				<img src="../assets/谷歌.png" alt="谷歌">
			</div>
		</div>
		<div class="decoration">
			登录注册即表示同意uSlide的用户协议、隐私政策。
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.content{
		position: absolute;
		width: max-content;
		height: max-content;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		width: 340px;
		text-align: center;
	}
	.content .logo{
		width: 105px;
		padding-left: 5px;
		background-color: #1B3089;
		border-radius: 12px;
	}
	.content .input-group{
		margin-top: 40px;
	}
	.content .input-group input{
		border: 1px solid #1B3089;
		border-radius: 12px;
		outline: none;
		width: 340px;
		height: 48px;
		letter-spacing: 0.8px;
		padding: 0 18px;
		color: rgba(25, 49, 137, 1);
		box-sizing: border-box;
		margin-bottom: 20px;
	}
	.content .input-group input::placeholder{
		color: rgba(25, 49, 137, 0.40);
	}
	.content .input-group .row{
		display: flex;
		justify-content: center;
	}
	.content .input-group .row input{
		width: calc(340px - 100px - 20px);
	}
	.content .input-group .row div{
		width: 100px;
		height: 48px;
		line-height: 48px;
		font-size: 14px;
		letter-spacing: 0.7px;
		font-weight: bold;
		color: #1B3089;
		border: 1px solid #1B3089;
		border-radius: 12px;
		background-color: white;
		margin-left: 20px;
	}
	.content .btn{
		width: 340px;
		background-color: #1B3089;
		color: white;
		border-radius: 12px;
		height: 48px;
		line-height: 48px;
		margin-top: 20px;
	}
	.content .extra{
		font-size: 14px;
		font-weight: bold;
		color: #1B3089;
		margin-top: 30px;
		letter-spacing: 0.7px;
	}
	.content .other{
		margin-top: 60px;
	}
	.content .other .title{
		font-size: 12px;
		color: #696969;
		display: inline-block;
		letter-spacing: 0.6px;
	}
	.content .other .title::before,.content .other .title::after{
		content: '';
		display: inline-block;
		width: 110px;
		height: 0px;
		margin: 0 0 3px;
		border-bottom: 1px dashed #B6B6B6;
	}
	.content .other .row{
		display: flex;
		justify-content: center;
	}
	.content .other .row img{
		width: 40px;
		height: 40px;
		border-radius: 100%;
		padding: 10px;
		box-sizing: border-box;
		background-color: white;
		margin: 29px 15px;
	}
	.content .decoration{
		font-size: 12px;
		color: #696969;
		margin-top: 100px;
		letter-spacing: 0.6px;
	}
</style>
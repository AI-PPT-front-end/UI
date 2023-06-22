<template>
	<div class="Generate">
		<div class="header">
			<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="&#232;&#191;&#148;&#229;&#155;&#158;"><path id="&#232;&#191;&#148;&#229;&#155;&#158;_2" d="M22 28L10 16L22 4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
			<span>新幻灯片</span>
			<img src="../../assets/头像.png" alt="头像">
		</div>
		<div class="content">
			<!-- 这里有一个如果PPT加太多了,上面的PPT没办法被滚轮滚动下来查看的问题 -->
			<div class="side">
				<div class="side__item" v-for="index in count">
					<PPT></PPT>
				</div>
				<div class="side__item" @click="count++">
					<PPT content='<?xml version="1.0" encoding="UTF-8"?><svg width="48" height="48" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.0605 10L24.0239 38" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 24L38 24" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>'></PPT>
				</div>
			</div>
			<div class="main">
				<PPT content="新幻灯片"></PPT>
			</div>
			<div class="fixed-btn">
				<div>
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="&#231;&#129;&#181;&#230;&#132;&#159;"><path id="Vector" d="M9.81818 0.818182C9.81818 0.601186 9.73198 0.393079 9.57854 0.23964C9.4251 0.086201 9.217 0 9 0C8.783 0 8.5749 0.086201 8.42146 0.23964C8.26802 0.393079 8.18182 0.601186 8.18182 0.818182V4.22755C8.18182 4.44454 8.26802 4.65265 8.42146 4.80609C8.5749 4.95953 8.783 5.04573 9 5.04573C9.217 5.04573 9.4251 4.95953 9.57854 4.80609C9.73198 4.65265 9.81818 4.44454 9.81818 4.22755V0.818182ZM9.81818 13.7725C9.81818 13.5555 9.73198 13.3474 9.57854 13.1939C9.4251 13.0405 9.217 12.9543 9 12.9543C8.783 12.9543 8.5749 13.0405 8.42146 13.1939C8.26802 13.3474 8.18182 13.5555 8.18182 13.7725V17.1818C8.18182 17.3988 8.26802 17.6069 8.42146 17.7604C8.5749 17.9138 8.783 18 9 18C9.217 18 9.4251 17.9138 9.57854 17.7604C9.73198 17.6069 9.81818 17.3988 9.81818 17.1818V13.7725ZM12.9551 9C12.9551 8.783 13.0413 8.5749 13.1947 8.42146C13.3482 8.26802 13.5563 8.18182 13.7733 8.18182H17.1818C17.3988 8.18182 17.6069 8.26802 17.7604 8.42146C17.9138 8.5749 18 8.783 18 9C18 9.217 17.9138 9.4251 17.7604 9.57854C17.6069 9.73198 17.3988 9.81818 17.1818 9.81818H13.7733C13.5563 9.81818 13.3482 9.73198 13.1947 9.57854C13.0413 9.4251 12.9551 9.217 12.9551 9ZM0.818182 8.18182C0.601186 8.18182 0.393079 8.26802 0.23964 8.42146C0.086201 8.5749 0 8.783 0 9C0 9.217 0.086201 9.4251 0.23964 9.57854C0.393079 9.73198 0.601186 9.81818 0.818182 9.81818H4.22755C4.44454 9.81818 4.65265 9.73198 4.80609 9.57854C4.95953 9.4251 5.04573 9.217 5.04573 9C5.04573 8.783 4.95953 8.5749 4.80609 8.42146C4.65265 8.26802 4.44454 8.18182 4.22755 8.18182H0.818182ZM15.4767 2.52409C15.6301 2.67752 15.7163 2.88559 15.7163 3.10255C15.7163 3.3195 15.6301 3.52757 15.4767 3.681L13.0901 6.06764C13.014 6.1436 12.9237 6.20384 12.8244 6.24491C12.725 6.28598 12.6186 6.30708 12.5111 6.307C12.2939 6.30685 12.0858 6.22045 11.9324 6.06682C11.8564 5.99075 11.7962 5.90046 11.7551 5.80111C11.714 5.70176 11.6929 5.59529 11.693 5.48779C11.6932 5.27067 11.7795 5.06251 11.9332 4.90909L14.3198 2.52327C14.4733 2.36989 14.6813 2.28372 14.8983 2.28372C15.1152 2.28372 15.3233 2.37071 15.4767 2.52409ZM6.06682 13.0901C6.21586 12.9358 6.29832 12.7291 6.29646 12.5146C6.2946 12.3001 6.20855 12.0948 6.05685 11.9431C5.90515 11.7915 5.69994 11.7054 5.48542 11.7035C5.27089 11.7017 5.06422 11.7841 4.90991 11.9332L2.52327 14.3182C2.4472 14.3943 2.38686 14.4846 2.34569 14.584C2.30452 14.6833 2.28333 14.7899 2.28333 14.8975C2.28333 15.005 2.30452 15.1116 2.34569 15.211C2.38686 15.3103 2.4472 15.4007 2.52327 15.4767C2.59934 15.5528 2.68965 15.6131 2.78905 15.6543C2.88844 15.6955 2.99496 15.7167 3.10255 15.7167C3.21013 15.7167 3.31665 15.6955 3.41605 15.6543C3.51544 15.6131 3.60575 15.5528 3.68182 15.4767L6.06764 13.0901H6.06682ZM11.9332 11.9332C12.0866 11.7798 12.2947 11.6936 12.5116 11.6936C12.7286 11.6936 12.9367 11.7798 13.0901 11.9332L15.4767 14.319C15.5527 14.395 15.6131 14.4852 15.6542 14.5844C15.6954 14.6837 15.7166 14.7901 15.7166 14.8976C15.7167 15.005 15.6955 15.1115 15.6544 15.2108C15.6133 15.3101 15.5531 15.4003 15.4771 15.4763C15.4012 15.5523 15.311 15.6126 15.2117 15.6538C15.1124 15.695 15.006 15.7162 14.8986 15.7162C14.7911 15.7162 14.6847 15.6951 14.5854 15.654C14.4861 15.6129 14.3958 15.5527 14.3198 15.4767L11.9332 13.0901C11.7798 12.9367 11.6936 12.7286 11.6936 12.5116C11.6936 12.2947 11.7798 12.0866 11.9332 11.9332ZM3.681 2.52409C3.60504 2.44807 3.51484 2.38776 3.41557 2.3466C3.3163 2.30544 3.20989 2.28424 3.10243 2.2842C2.88539 2.28412 2.67721 2.37027 2.52368 2.52368C2.37016 2.6771 2.28387 2.88522 2.28379 3.10226C2.28371 3.3193 2.36986 3.52748 2.52327 3.681L4.90991 6.06764C5.06354 6.22105 5.27183 6.30715 5.48894 6.307C5.70606 6.30685 5.91422 6.22045 6.06764 6.06682C6.22105 5.91319 6.30715 5.7049 6.307 5.48779C6.30685 5.27067 6.22045 5.06251 6.06682 4.90909L3.681 2.52409Z" fill="black"/></g></svg>
					<span>灵感</span>
				</div>
				<div>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="&#230;&#168;&#161;&#230;&#157;&#191;"><path id="Vector" d="M10 19C14.9707 19 19 14.9707 19 10C19 5.0293 14.9707 1 10 1C5.0293 1 1 5.0293 1 10C1 14.9707 5.0293 19 10 19Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/><path id="Vector_2" d="M1 10H19M9.343 18.721C7.43065 16.2162 6.39638 13.1514 6.4 10C6.4 6.724 7.516 3.637 9.406 1.198M10.657 1.198C12.502 3.619 13.6 6.643 13.6 9.919C13.6 13.195 12.484 16.282 10.594 18.721" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/><path id="Vector_3" d="M16.426 16.3C14.788 14.635 12.52 13.6 9.99997 13.6C7.47997 13.6 5.20297 14.635 3.57397 16.3M16.426 3.69995C14.797 5.36495 12.52 6.39995 9.99997 6.39995C7.47997 6.39995 5.21197 5.36495 3.57397 3.69995" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/></g></svg>
					<span>模板</span>
				</div>
				<div>
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="&#228;&#184;&#187;&#233;&#162;&#152;"><mask id="mask0_13_317" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18"><g id="a"><path id="Vector" d="M0 0H18V18H0V0Z" fill="white"/></g></mask><g mask="url(#mask0_13_317)"><g id="Group"><path id="Vector_2" d="M2.8484 6.66665L1.3634 8.15165C1.13853 8.37667 1.01221 8.68178 1.01221 8.9999C1.01221 9.31802 1.13853 9.62313 1.3634 9.84815L2.8484 11.3332C3.07342 11.558 3.37853 11.6843 3.69665 11.6843C4.01477 11.6843 4.31988 11.558 4.5449 11.3332L6.0299 9.84815C6.25477 9.62313 6.3811 9.31802 6.3811 8.9999C6.3811 8.68178 6.25477 8.37667 6.0299 8.15165L4.5449 6.66665C4.31988 6.44178 4.01477 6.31546 3.69665 6.31546C3.37853 6.31546 3.07342 6.44178 2.8484 6.66665ZM8.15165 1.3634L6.66665 2.8484C6.44178 3.07342 6.31546 3.37853 6.31546 3.69665C6.31546 4.01477 6.44178 4.31988 6.66665 4.5449L8.15165 6.0299C8.37667 6.25477 8.68178 6.3811 8.9999 6.3811C9.31802 6.3811 9.62313 6.25477 9.84815 6.0299L11.3332 4.5449C11.558 4.31988 11.6843 4.01477 11.6843 3.69665C11.6843 3.37853 11.558 3.07342 11.3332 2.8484L9.84815 1.3634C9.62313 1.13853 9.31802 1.01221 8.9999 1.01221C8.68178 1.01221 8.37667 1.13853 8.15165 1.3634ZM8.15165 11.9699L6.66665 13.4549C6.44178 13.6799 6.31546 13.985 6.31546 14.3032C6.31546 14.6213 6.44178 14.9264 6.66665 15.1514L8.15165 16.6364C8.37667 16.8613 8.68178 16.9876 8.9999 16.9876C9.31802 16.9876 9.62313 16.8613 9.84815 16.6364L11.3332 15.1514C11.558 14.9264 11.6843 14.6213 11.6843 14.3032C11.6843 13.985 11.558 13.6799 11.3332 13.4549L9.84815 11.9699C9.62313 11.745 9.31802 11.6187 8.9999 11.6187C8.68178 11.6187 8.37667 11.745 8.15165 11.9699ZM13.4549 6.66665L11.9699 8.15165C11.745 8.37667 11.6187 8.68178 11.6187 8.9999C11.6187 9.31802 11.745 9.62313 11.9699 9.84815L13.4549 11.3332C13.6799 11.558 13.985 11.6843 14.3032 11.6843C14.6213 11.6843 14.9264 11.558 15.1514 11.3332L16.6364 9.84815C16.8613 9.62313 16.9876 9.31802 16.9876 8.9999C16.9876 8.68178 16.8613 8.37667 16.6364 8.15165L15.1514 6.66665C14.9264 6.44178 14.6213 6.31546 14.3032 6.31546C13.985 6.31546 13.6799 6.44178 13.4549 6.66665Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/></g></g></g></svg>
					<span>主题</span>
				</div>
			</div>
			<div class="footer" v-if="!resulting">
				<div v-if="!generating" class="message">
					<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="&#230;&#150;&#176;&#229;&#187;&#186;&#229;&#155;&#190;&#230;&#160;&#135;"><path id="Vector" d="M18.7778 1H3.22222C1.99492 1 1 1.99492 1 3.22222V18.7778C1 20.0051 1.99492 21 3.22222 21H18.7778C20.0051 21 21 20.0051 21 18.7778V3.22222C21 1.99492 20.0051 1 18.7778 1Z" stroke="#193189" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_2" d="M10.9998 6.55566V15.4446" stroke="#193189" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_3" d="M6.55542 11H15.4443" stroke="#193189" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
					<span>新建一个幻灯片，关于……</span>
				</div>
				<div v-if="generating" class="message" :style="{flexDirection: 'column'}">
					<div class="generate__item">
						<div>主题：</div>
						<div>拥抱大模型&emsp;赋能新时代</div>
					</div>
					<div class="generate__item" v-for="(item, index) in items">
						<div>{{index + 1}}</div>
						<div>{{item}}</div>
						<div>
							<svg width="93" height="20" viewBox="0 0 93 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="&#229;&#164;&#167;&#231;&#186;&#178;&#229;&#138;&#159;&#232;&#131;&#189;2"><g id="&#230;&#139;&#150;&#229;&#138;&#168;"><g id="&#230;&#139;&#150;&#229;&#138;&#168;_2"><circle id="1" cx="75.5" cy="7" r="1.5" fill="#193189"/><circle id="2" cx="81.5" cy="7" r="1.5" fill="#193189"/><circle id="3" cx="87.5" cy="7" r="1.5" fill="#193189"/><circle id="4" cx="87.5" cy="13" r="1.5" fill="#193189"/><circle id="5" cx="81.5" cy="13" r="1.5" fill="#193189"/><circle id="6" cx="75.5" cy="13" r="1.5" fill="#193189"/></g></g><g id="&#229;&#136;&#160;&#229;&#142;&#187;"><g id="&#229;&#135;&#143;"><path id="Vector" d="M37.5 10H52.5" stroke="#193189" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></g></g><g id="&#230;&#183;&#187;&#229;&#138;&#160;"><g id="&#229;&#138;&#160;"><path id="Vector_2" d="M10 2.5V17.5" stroke="#193189" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_3" d="M2.5 10H17.5" stroke="#193189" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></g></g></g></svg>
						</div>
					</div>
				</div>
				<div class="input-group">
					<input placeholder="请输入幻灯片的主题"/>
					<svg width="49" height="40" style="flex-shrink: 0;cursor: pointer;" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="&#229;&#136;&#183;&#230;&#150;&#176;"><rect id="&#232;&#131;&#140;&#230;&#153;&#175;" width="48.9" height="40" rx="8" fill="#E8EAF3"/><g id="&#229;&#136;&#183;&#230;&#150;&#176;_2"><path id="Vector" d="M9.4502 9.09033V17.2722H17.632" stroke="#193189" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_2" d="M39.4504 30.9084V22.7266H31.2686" stroke="#193189" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_3" d="M36.0275 15.9086C35.3359 13.9542 34.1605 12.2068 32.6109 10.8296C31.0614 9.45235 29.1882 8.49007 27.1662 8.03256C25.1441 7.57505 23.0392 7.63722 21.0477 8.21326C19.0562 8.78931 17.243 9.86045 15.7775 11.3268L9.4502 17.2722M39.4502 22.7268L33.1229 28.6722C31.6574 30.1385 29.8442 31.2097 27.8527 31.7857C25.8612 32.3617 23.7563 32.4239 21.7342 31.9664C19.7122 31.5089 17.839 30.5466 16.2895 29.1694C14.7399 27.7921 13.5645 26.0448 12.8729 24.0904" stroke="#193189" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g></g></svg>
					<div class="btn" @click="handleFurther">下一步</div>
				</div>
			</div>
			<div class="footer" v-else>
				<div class="resulting">
					<div class="title">
							<div>幻灯片生成中...</div>
							<div>
								<span>再试一次</span>
								<span>保存</span>
							</div>
					</div>
					<div class="progress-bar__wrapper">
						<div class="progress-bar__thumb"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PPT from '../PPT.vue'
	export default {
		components:{
			PPT
		},
		data(){
			return {
				count: 1,
				generating: false,
				resulting: false,
				items: [
					"什么是大模型？",
					"为什么大模型这么重要?",
					"大模型是怎么工作的？",
					"大模型当前有哪些应用？",
					"大模型当前面临哪些挑战？",
					"大模型的未来展望",
					"总结"
				]
			}
		},
		methods: {
			handleFurther(){
				if(!this.generating) this.generating = true
				else{
					this.resulting = true
				}
			}
		}
	}
</script>

<style scoped>
	@keyframes progress {
		0%{width: 0;}
		100%{width: 100%;}
	}
	.Generate{
		width: 100%;
		height: 100vh;
	}
	.header{
		height: 57px;
		width: 100%;
		display: flex;
		box-sizing: border-box;
		align-items: center;
		justify-content: space-between;
		position: relative;
		padding: 0 40px;
		background-color: white;
		z-index: 999;
	}
	.content{
		width: 100%;
		height: calc(100% - 57px);
		position: relative;
		background: linear-gradient(to right bottom, rgba(51, 95, 255, 0.20) 0%, rgba(25, 49, 137, 0.05) 100%),linear-gradient(to left bottom, #FEBF00 0%, rgba(254, 191, 0, 0.20) 0.01%, rgba(254, 191, 0, 0.05) 99.99%, rgba(255, 192, 0, 0.05) 100%);
	}
	.side{
		position: fixed;
		left: 0;
		top: 57px;
		height: calc(100vh - 57px);
		width: 200px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow-y: scroll;
	}
	.side::-webkit-scrollbar{
		width: 5px;
		background-color: transparent;
	}
	.side::-webkit-scrollbar-thumb{
		background-color: rgb(200, 200, 200);
		width: 5px;
		border-radius: 20px;
	}
	.side .side__item{
		width: 100px;
		min-height: 60px;
		margin: 20px 0;
	}
	.side .side__item:not(:last-child)::after{
		content: '';
		display: block;
		width: 100px;
		height: 0px;
		border-bottom: 1px dashed #B6B6B6;
		margin: 20px 0;
	}
	.main{
		width: 60%;
		height: 60vh;
		position: fixed;
		left: 0;
		right: 0;
		top: calc(57px + 10vh);
		margin: 0 auto;
	}
	.fixed-btn{
		position: fixed;
		right: 55px;
		top: 0;
		bottom: 0;
		margin: auto 0;
		height: max-content;
		width: max-content;
	}
	.fixed-btn div{
		width: 85px;
		height: 32px;
		border-radius: 16px;
		background: #E8EAF3;
		display: flex;
		gap: 16px;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		margin: 30px 0;
	}
	.footer{
		position: fixed;
		width: 50%;
		height: max-content;
		bottom: 57px;
		left: 0;
		right: 0;
		margin: 0 auto;
	}
	.footer .message{
		max-height: calc(100vh - 230px);
		min-height: 55px;
		overflow-y: scroll;
		background-color: #F6F9FF;
		display: flex;
		gap: 20px;
		align-items: center;
		border-radius: 16px 16px 0 0;
		padding: 20px;
		box-sizing: border-box;
		transition: .3;
	}
	.footer .message::-webkit-scrollbar{
		width: 5px;
		background-color: transparent;
	}
	.footer .message::-webkit-scrollbar-thumb{
		background-color: rgb(200, 200, 200);
		width: 5px;
		border-radius: 20px;
	}
	.footer .input-group{
		height: 60px;
		flex-shrink: 0;
		border-radius: 0px 0px 16px 16px;
		background: #F5F5F5;
		display: flex;
		gap: 10px;
		align-items: center;
		padding: 0 20px;
	}
	.footer .input-group input{
		border: none;
		outline: none;
		background: #F5F5F5;
		font-size: 18px;
		font-family: SF Pro Text;
		font-weight: 600;
		width: 100%;
	}
	.footer div:nth-child(2) input::placeholder{
		color: #B6B6B6;
	}
	.footer div:nth-child(2) .btn{
		width: 98px;
		height: 40px;
		border-radius: 8px;
		background: #193189;
		flex-shrink: 0;
		color: #FFF;
		font-size: 18px;
		font-family: SF Pro Text;
		font-weight: 600;
		text-align: center;
		line-height: 40px;
		cursor: pointer;
	}
	.footer .generate__item{
		width: 100%;
		display: flex;
		gap: 21px;
		height: 50px;
		padding: 0 20px;
		font-size: 18px;
		font-family: SF Pro Text;
		box-sizing: border-box;
		align-items: center;
		position: relative;
		border-radius: 12px;
		background: #E8EAF3;
		flex-shrink: 0;
	}
	.footer .generate__item:nth-child(1){
		justify-content: center;
		color: #193189;
		font-family: Inter;
		font-weight: 700;
		height: 90px;
		flex-shrink: 0;
	}
	.footer .generate__item:nth-child(1) div:first-child{
		font-size: 18px;
		position: absolute;
		left: 20px;
		top: 13px;
	}
	.footer .generate__item:nth-child(1) div:nth-child(2){
		font-size: 30px;
	}
	.footer .generate__item:not(:first-child) div:last-child{
		position: absolute;
		right: 20px;
	}
	.footer .generate__item:not(:first-child) div:first-child{
		color: #193189;
		font-weight: 600;
	}
	.footer .resulting{
		background: #FFF;
		height: 100px;
		flex-shrink: 0;
		padding: 17px 20px;
		box-sizing: border-box;
		border-radius: 16px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.footer .resulting .title{
		display: flex;
		position: relative;
	}
	.footer .resulting .title div:first-child{
		color: #000;
		font-size: 30px;
		font-family: SF Pro Text;
		font-weight: 600;
	}
	.footer .resulting .title div:last-child{
		display: flex;
		gap: 20px;
		position: absolute;
		right: 0;
	}
	.footer .resulting .title div:last-child span{
		display: block;
		width: 79px;
		height: 36px;
		border-radius: 12px;
		text-align: center;
		line-height: 36px;
		background: #193189;
		color: white;
		font-size: 15px;
		font-family: Inter;
		font-weight: 600;
	}
	.footer .resulting .title div:last-child span:last-child{
		background: #E8EAF3;
		color: #193189;
	}
	.footer .resulting .progress-bar__wrapper{
		border-radius: 12px;
		background: #E8EAF3;
		height: 10px;
		flex-shrink: 0;
	}
	.footer .resulting .progress-bar__thumb{
		border-radius: 12px;
		background: #193189;
		width: 0;
		height: 10px;
		animation: progress 2s forwards;
	}
</style>
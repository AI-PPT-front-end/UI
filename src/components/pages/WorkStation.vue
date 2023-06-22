<template>
	<div class="WorkStation">
		<Sidebar></Sidebar>
		<div class="content">
			<div class="header">
				<div class="btn">
					<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="&#230;&#150;&#176;&#229;&#187;&#186;"><path id="Vector" d="M18.7778 1H3.22222C1.99492 1 1 1.99492 1 3.22222V18.7778C1 20.0051 1.99492 21 3.22222 21H18.7778C20.0051 21 21 20.0051 21 18.7778V3.22222C21 1.99492 20.0051 1 18.7778 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_2" d="M10.9998 6.55566V15.4446" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_3" d="M6.55542 11H15.4443" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
					<div>
						<div>新建</div>
						<div>在线生成幻灯片</div>
					</div>
				</div>
				<div class="btn">
					<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="&#229;&#175;&#188;&#229;&#133;&#165;"><path id="Vector" d="M21 14.3333V18.7777C21 19.3671 20.7659 19.9323 20.3491 20.349C19.9324 20.7658 19.3671 20.9999 18.7778 20.9999H3.22222C2.63285 20.9999 2.06762 20.7658 1.65087 20.349C1.23413 19.9323 1 19.3671 1 18.7777V14.3333" stroke="url(#paint0_linear_13_158)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_2" d="M5.44434 8.77783L10.9999 14.3334L16.5554 8.77783" stroke="url(#paint1_linear_13_158)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_3" d="M10.9998 14.3333V1" stroke="url(#paint2_linear_13_158)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><linearGradient id="paint0_linear_13_158" x1="11" y1="14.3333" x2="11" y2="20.9999" gradientUnits="userSpaceOnUse"><stop stop-color="#000C36"/><stop offset="1" stop-color="#1E3CAB"/></linearGradient><linearGradient id="paint1_linear_13_158" x1="10.9999" y1="8.77783" x2="10.9999" y2="14.3334" gradientUnits="userSpaceOnUse"><stop stop-color="#000C36"/><stop offset="1" stop-color="#1E3CAB"/></linearGradient><linearGradient id="paint2_linear_13_158" x1="11.4998" y1="1" x2="11.4998" y2="14.3333" gradientUnits="userSpaceOnUse"><stop stop-color="#000C36"/><stop offset="1" stop-color="#1E3CAB"/></linearGradient></defs></svg>
					<div>
						<div>导入</div>
						<div>导入文件生成幻灯片</div>
					</div>
				</div>
				<div class="alert">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="&#233;&#128;&#154;&#231;&#159;&#165;"><circle id="&#229;&#156;&#134;" cx="16" cy="16" r="16" fill="white"/><g id="&#233;&#128;&#154;&#231;&#159;&#165;_2"><path id="Vector" d="M22 12C22 10.4087 21.3679 8.88258 20.2426 7.75736C19.1174 6.63214 17.5913 6 16 6C14.4087 6 12.8826 6.63214 11.7574 7.75736C10.6321 8.88258 10 10.4087 10 12C10 19 7 21 7 21H25C25 21 22 19 22 12Z" stroke="#193189" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_2" d="M17.73 25C17.5542 25.3031 17.3019 25.5547 16.9982 25.7295C16.6946 25.9044 16.3504 25.9965 16 25.9965C15.6496 25.9965 15.3054 25.9044 15.0018 25.7295C14.6982 25.5547 14.4458 25.3031 14.27 25" stroke="#193189" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></g></svg>
				</div>
			</div>
			<div class="tab">
				<div>
					<span>筛选：&nbsp;全部文件</span>
					<svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="&#228;&#184;&#139;&#230;&#139;&#137;&#229;&#136;&#151;&#232;&#161;&#168;" d="M1 1L6.5 6.5L12 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
				<div>
					<span>排序：&nbsp;最近浏览</span>
					<svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="&#228;&#184;&#139;&#230;&#139;&#137;&#229;&#136;&#151;&#232;&#161;&#168;" d="M1 1L6.5 6.5L12 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="&#233;&#162;&#132;&#232;&#167;&#136;&#229;&#155;&#190;"><rect id="&#233;&#162;&#132;&#232;&#167;&#136;&#229;&#155;&#190;_2" width="18" height="18" rx="2" fill="#E0E0E0"/><g id="&#233;&#162;&#132;&#232;&#167;&#136;&#229;&#155;&#190;_3"><path id="Vector" d="M7.88889 4H4V7.88889H7.88889V4Z" stroke="#193189" stroke-width="0.611646" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_2" d="M14 4H10.1111V7.88889H14V4Z" stroke="#193189" stroke-width="0.611646" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_3" d="M14 10.1111H10.1111V14H14V10.1111Z" stroke="#193189" stroke-width="0.611646" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_4" d="M7.88889 10.1111H4V14H7.88889V10.1111Z" stroke="#193189" stroke-width="0.611646" stroke-linecap="round" stroke-linejoin="round"/></g></g></svg>
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="&#229;&#185;&#179;&#233;&#147;&#186;"><rect id="&#229;&#185;&#179;&#233;&#147;&#186;_2" x="0.5" y="0.5" width="17" height="17" rx="1.5" fill="white" stroke="#E0E0E0"/><g id="&#229;&#185;&#179;&#233;&#147;&#186;_3"><path id="Vector" d="M3 9H15" stroke="#193189" stroke-width="0.892056" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_2" d="M3 5H15" stroke="#193189" stroke-width="0.892056" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_3" d="M3 13H15" stroke="#193189" stroke-width="0.892056" stroke-linecap="round" stroke-linejoin="round"/></g></g></svg>
				</div>
			</div>
			<div class="grid">
				<FileBlock></FileBlock>
				<FileBlock></FileBlock>
				<FileBlock></FileBlock>
			</div>
		</div>
	</div>
</template>

<script>
	import Sidebar from '../Sidebar.vue'
	import FileBlock from '../FileBlock.vue'
	export default {
		name: "WorkStation",
		components: {
			Sidebar,
			FileBlock
		}
	}
</script>

<style scoped>
	.WorkStation{
		display: flex;
	}
	.content{
		position: relative;
		width: calc(100% - 300px);
		height: 100vh;
		padding-left: 70px;
		background: linear-gradient(to right bottom, rgba(51, 95, 255, 0.20) 0%, rgba(25, 49, 137, 0.05) 100%),linear-gradient(to left bottom, #FEBF00 0%, rgba(254, 191, 0, 0.20) 0.01%, rgba(254, 191, 0, 0.05) 99.99%, rgba(255, 192, 0, 0.05) 100%);
		/* 下面这个是设计稿的css样式，但是？这东西实际效果明显和设计稿的显示图不符，上面这个修改过的才比较符合设计稿的渐变 */
		/* background: linear-gradient(225deg, #FEBF00 0%, rgba(254, 191, 0, 0.20) 0.01%, rgba(254, 191, 0, 0.05) 99.99%, rgba(255, 192, 0, 0.05) 100%), linear-gradient(135deg, rgba(51, 95, 255, 0.20) 0%, rgba(25, 49, 137, 0.05) 100%); */
	}
	.header{
		height: 100px;
		width: 100%;
		position: relative;
		display: flex;
		padding: 20px 19px 20px 0px;
		box-sizing: border-box;
		justify-content: flex-start;
	}
	.header .btn{
		width: 190px;
		height: 60px;
		border-radius: 20px;
		border: 2px solid #000;
		padding: 14px 25px;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		color: white;
		background: linear-gradient(180deg, #000C36 0%, #1B38A1 100%);
	}
	.header .btn:nth-child(2){
		background: transparent;
		border: 2px solid #1B38A1;
		color: #193189;
		margin-left: 60px;
	}
	.header .btn div{
		margin-left: 5px;
	}
	.header .btn div div:first-child{
		line-height: 100%;
	}
	.header .btn div div:last-child{
		font-size: 12px;
		/* 这里是为了符合神奇的设计稿设计的10px字体,所以用scale缩小了字体 */
		scale: 0.83;
		width: 110%;
		margin-left: -3px;
		font-weight: normal;
		line-height: 100%;
		margin-top: 5px;
	}
	.header .btn:nth-child(2) div div:last-child{
		margin-left: -5px;
	}
	.header .alert{
		position: absolute;
		top: 34px;
		right: 70px;
	}
	.tab{
		margin-top: 20px;
		position: relative;
	}
	.tab div{
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.tab div:last-child{
		position: absolute;
		right: 70px;
		top: 0;
	}
	.grid{
		display: grid;
		grid: 290px 290px / auto auto auto;
		grid-row-gap: 10px;
		padding-top: 40px;
	}
</style>
<template>
	<div class="row">
		<div class="content">
			<div class="title">
				表达自己&nbsp;所想即所得
			</div>
			<div class="decoration">
				uSlide 是在线的AI辅助制作幻灯片平台，借助AI技术节省用户制做 PPT 过程中冗杂、<br>耗时、无意义的操作，让用户打开网页就能做PPT，用户提供构思和素材，AI辅助生成内容。
			</div>
			<div class="btn-group">
				<div>在线生成</div>
				<div>导入文件</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	@keyframes appear{
		0%{opacity: 0;}
		100%{opacity: 1;}
	}
	.row{
		width: 100%;
		height: 100vh;
		padding-top: 100px;
		box-sizing: border-box;
		position: absolute;
		color: white;
		background: url('../assets/home.jpg') no-repeat fixed center;
		background-size: cover;
		animation: appear .3s;
	}
	.row .content{
		position: absolute;
		left: 150px;
		top: 30%;
	}
	.row .content .title{
		font-size: 65px;
	}
	.row .content .decoration{
		margin-top: 20px;
		line-height: 30px;
		color: #fafafa;
	}
	.row .content .btn-group{
		margin-top: 30px;
		display: flex;
	}
	.row .content .btn-group div{
		padding: 15px 50px;
		border-radius: 10px;
		background-color: transparent;
		border: 1px solid white;
		color: white;
		cursor: pointer;
	}
	.row .content .btn-group div:nth-child(1){
		margin-right: 20px;
		color: black;;
		background-color: white;
	}
</style>
<template>
	<div class="block" @click="$router.push({name: 'Generate'})">
		<div class="wrapper"></div>
		<div class="title">测试用的标题</div>
		<div class="decoration">
			<span>张三</span>
			<svg width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle id="Ellipse 1" cx="1.5" cy="2.25" r="1.5" fill="#4F4F4F"/></svg>
			<span>5分钟前最后编辑</span>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.block{
		display: inline-block;
		width: 300px;
		height: max-content;
		cursor: pointer;
	}
	.block:hover.block .wrapper{
		border: 2px solid;
		border-color: #1A369D;
	}
	.wrapper{
		width: 300px;
		height: 168.75px;
		flex-shrink: 0;
		border-radius: 12px;
		border: 1px solid #B6B6B6;
		box-sizing: border-box;
		background: #FFF;
		margin-bottom: 15px;
	}
	.title{
		color: #000;
		font-size: 16px;
		font-weight: 700;
		margin-bottom: 6px;
	}
	.decoration{
		color: #4F4F4F;
		font-size: 14px;
		display: flex;
		align-items: center;
		gap: 9px;
	}
</style>
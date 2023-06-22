<template>
	<div class="PPT" :style="{width,height}">
		<div class="title" v-if="content" v-html="content"></div>
	</div>
</template>

<script>
	export default {
		props:{
			width:{
				type: String,
				default: '100%'
			},
			height:{
				type: String,
				default: "100%"
			},
			content:{
				type: String
			}
		}
	}
</script>

<style scoped>
	.PPT{
		background-color: #E8EAF3;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
	}
	.title{
		color: #000;
		font-size: 45px;
		font-family: SF Pro Text;
		font-weight: 600;
	}
</style>
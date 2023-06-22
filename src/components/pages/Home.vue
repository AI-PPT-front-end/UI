<template>
  <div class="Home">
		<div class="header" :style="{'--color': showingIndex == 0 ? 'white' : '#000000', '--turnColor': showingIndex == 0 ? '#00000050' : 'white'}">
			<img src="../../assets/logo.png" v-if="showingIndex == 0"></img>
			<img src="../../assets/logo-purple.png" v-else></img>
			<div class="interact">
				<span>产品</span>
				<span>模板</span>
				<span>价格</span>
				<span>关于</span>
			</div>
			<div class="btn">
				<div>登录/注册</div>
			</div>
		</div>
	  <div>
			<Home0 :style="styles[0]" v-if="showing[0]"></Home0>
			<Home1 :style="styles[1]" v-if="showing[1]"></Home1>
		</div>
		<div class="right-arr" @click="handleClick()">
			<svg width="90" height="90" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12L31 24L19 36" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
		</div>
  </div>
</template>

<script>
import Home0 from '../Home0.vue'
import Home1 from '../Home1.vue'
export default {
  name: 'Home',
	components:{
		Home0,
		Home1
	},
	data(){
		return {
			showingIndex: 0,
			showing: [true, false],
			styles:[
				{left: '0'},
				{left: '0'}
			]
		}
	},
	methods:{
		handleClick(){
			const target = (this.showingIndex + 1) % this.styles.length
			this.$set(this.showing, target, true)
			this.$set(this.showing, this.showingIndex, false)
			this.showingIndex = target
		}
	}
}
</script>

<style scoped>
	@keyframes arr{
		0%{
			margin-right: 10px;
			/* opacity: .5; */
		}
		50%{
			margin-right: 0px;
			/* opacity: 1; */
		}
		100%{
			margin-right: 10px;
			/* opacity: .5; */
		}
	}
	.header{
		width: 100%;
		height: 100px;
		background-image: linear-gradient(to bottom, var(--turnColor) 60%, transparent);
		position: fixed;
		z-index: 99;
		text-align: center;
	}
	.header img{
		height: 50%;
		top: 25%;
		left: 50px;
		position: absolute;
		cursor: pointer;
	}
	.header .interact{
		color: var(--color);
		height: 100px;
		line-height: 100px;
	}
	.header .interact span{
		--width: 0%;
		--height: 0%;
		--opacity: 0;
		padding: 10px 30px;
		position: relative;
		cursor: pointer;
		transition: .3s;
	}
	/* 方案一，但是我感觉有点简陋 */
	/* .header .interact span::after{
		content: '';
		display: inline-block;
		position: absolute;
		height: 1px;
		width: var(--width);
		background-color: white;
		left: 0;
		right: 0;
		margin: 0 auto;
		bottom: 1px;
		transition: .3s;
	} */
	.header .interact span::after{
		content: '';
		display: inline-block;
		position: absolute;
		height: var(--height);
		width: var(--width);
		opacity: var(--opacity);
		right: 5px;
		bottom: 0;
		border-right: 2px solid var(--color);
		border-bottom: 2px solid var(--color);
		transition: .3s;
	}
	.header .interact span::before{
		content: '';
		display: inline-block;
		position: absolute;
		height: var(--height);
		width: var(--width);
		opacity: var(--opacity);
		left: 5px;
		top: 0;
		border-left: 2px solid var(--color);
		border-top: 2px solid var(--color);
		transition: .3s;
	}
	.header .interact span:hover{
		--height: 15px;
		--width: 35px;
		--opacity: 1;
		font-weight: bold;
	}
	.header .btn{
		position: absolute;
		top: 0;
		right: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100px;
		width: max-content;
	}
	.header .btn div{
		border: 1px solid var(--color);
		padding: 10px 15px;
		border-radius: 4px;
		color: var(--color);
		cursor: pointer;
	}
	.right-arr{
		position: fixed;
		z-index: 99;
		right: 15px;
		top: 0;
		bottom: 0;
		margin: auto 0;
		width: max-content;
		height: max-content;
		animation: arr 3s linear infinite;
		cursor: pointer;
		border-radius: 50%;
	}
</style>

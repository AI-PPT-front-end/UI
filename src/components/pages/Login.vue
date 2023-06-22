<template>
	<div class="Login">
		<div class="card">
			<LoginCard></LoginCard>
		</div>
	</div>
</template>

<script>
import LoginCard from '../LoginCard.vue'
export default {
	name: 'Login',
	components:{
		LoginCard
	}
}
</script>

<style scoped>
	@keyframes appear {
		0%{opacity: 0;}
		100%{opacity: 1;}
	}
	.Login{
		width: 100%;
		height: 100vh;
		background: url('../../assets/home.jpg') no-repeat fixed center;
		background-size: cover;
	}
	.card{
		background-color: #F2F2F2;
		position: fixed;
		top: 0;
		left: 0;
		width: 38%;
		height: 100vh;
		text-align: center;
		animation: appear .3s;
	}
</style>
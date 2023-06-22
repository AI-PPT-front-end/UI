import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/pages/Home.vue";
import Login from "@/components/pages/Login.vue";
import WorkStation from "@/components/pages/WorkStation.vue";
import Generate from "@/components/pages/Generate.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
		{
			path: '/index',
			redirect: '/home'
		},
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/workStation',
			name: 'WorkStation',
			component: WorkStation
		},
		{
			path: '/generate',
			name: 'Generate',
			component: Generate
		}
	]
})


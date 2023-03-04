import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			component: resolve => require(['../pages/Home.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Home'
		}, //首页
		{
			path: '/Home',
			component: resolve => require(['../pages/Home.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Home1'
		}, //打赏
		{
			path: '/Support',
			component: resolve => require(['../pages/Support.vue'], resolve),
			meta: {

			},
			name: 'Support'
		},
		{
			path: '/Edit',
			component: resolve => require(['../pages/Edit.vue'], resolve),
			meta: {

			},
			name: 'Edit'
		},
		{
			path: '/My',
			component: resolve => require(['../pages/My.vue'], resolve),
			meta: {

			},
			name: 'My'
		},
		{
			path: '/DetailArticle',
			component: resolve => require(['../pages/DetailArticle.vue'], resolve),
			meta: {

			},
			name: 'DetailArticle'
		},

	]
})

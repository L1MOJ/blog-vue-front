import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	scrollBehavior(to, from, savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
		if (savePosition) {
			return savePosition;
		} else {
            var top;
            if (window.innerWidth >= 700) {
                 top = 676
            } else {
                 top = 267
            }
			return {
				x: 0,
				y: top
			}
		}
	},
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
			name: 'Home'
		}, //打赏
		{
			path: '/Support',
			component: resolve => require(['../pages/Support.vue'], resolve),
			meta: {

			},
			name: 'Support'
		},
		{
			path: '/AboutMe',
			component: resolve => require(['../pages/AboutMe.vue'], resolve),
			meta: {

			},
			name: 'AboutMe'
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

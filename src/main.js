import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import CountDetail from './parts/count/Detail'
import AnalysisDetail from './parts/analysis/Detail'
import ForecastDetail from './parts/forecast/Detail'
import PublishDetail from './parts/publish/Detail'
import indexPage from './page/Index.vue'
import detailPage from './page/Detail.vue'
Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
	mode: 'history',
	routes: [
	{
		path: '/',
		component: indexPage
	},
	{
		path: '/index',
		component: indexPage
	},
	{
		path: '/detail',
		redirect: '/detail/count',
		component: detailPage,
		children: [
			{
				path: 'count',
				component: CountDetail
			},
			{
				path: 'analysis',
				component: AnalysisDetail
			},
			{
				path: 'forecast',
				component: ForecastDetail
			},
			{
				path: 'publish',
				component: PublishDetail
			}
		]
	}
	]
})

// let app = new Vue({
// 	el: '#app',
// 	router: router,
// 	render: h => h(App)
// })
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点在讨论嵌套路由。

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
// const router = new VueRouter({
//   routes: [
// 	  { path: '/foo', component: Foo },
// 	  { path: '/bar', component: Bar }
// 	]// （缩写）相当于 routes: routes
// })

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
	el: '#app',
	router,
	render: h => h(App)
})

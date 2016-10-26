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

const app = new Vue({
	el: '#app',
	router,
	render: h => h(App)
})

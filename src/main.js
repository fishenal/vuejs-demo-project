import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import CountDetail from './parts/count/Detail'
import AnalysisDetail from './parts/analysis/Detail'
import ForecastDetail from './parts/forecast/Detail'
import PublishDetail from './parts/publish/Detail'
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.directive('style', {
	update (val) {
		let cssStr = []
		for (let key in val) {
			cssStr.push(key + ':' + val[key])
		}
		cssStr = cssStr.join(';')
		this.el.style.cssText = cssStr
	}
})
let router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

router.map({
	'/': {
	  	component: require('./page/Index.vue')
	},
	'/index': {
	  	component: require('./page/Index.vue')
	},
	'/detail': {
		component: require('./page/Detail.vue'),
		subRoutes: {
			'/count': {
				component: CountDetail
			},
			'/analysis': {
				component: AnalysisDetail
			},
			'/forecast': {
				component: ForecastDetail
			},
			'/publish': {
				component: PublishDetail
			}
		}
	}
})
router.redirect({
	'/detail': '/detail/count'
})

router.start(App, '#app')

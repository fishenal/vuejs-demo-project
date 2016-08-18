import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)

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
		component: require('./page/Detail.vue')
	}
})

router.start(App, 'app')

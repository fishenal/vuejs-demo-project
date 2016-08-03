import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

router.map({
	'/hello': {
	  component: require('./page/Hello.vue')
	},
	// '/user/:userId': {
	//   component: require('./components/user/index.vue')
	// }
})

router.start(App, 'app')

export function configRouter (router) {
  router.map({
    '/about': {
      component: require('./components/about.vue')
    },

    '/user/:userId': {
      component: require('./components/user/index.vue')
    }
  })
}
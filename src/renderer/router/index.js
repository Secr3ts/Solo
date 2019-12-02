import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: require('@/components/HomePage').default
    },
    {
      path: '/search-page',
      name: 'search-page',
      component: require('@/components/SearchPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

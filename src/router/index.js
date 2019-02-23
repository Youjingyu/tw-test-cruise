import Vue from 'vue'
import Router from 'vue-router'
import Agent from '../views/Agent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'agent',
      meta: {
        title: 'AGENT',
        icon: 'icon-sitemap'
      },
      component: Agent
    },
    {
      path: '/myCruise',
      name: 'myCruise',
      meta: {
        title: 'MY CRUISE',
        icon: 'icon-boat'
      },
      component: () => import(/* webpackChunkName: "myCruise" */ '../views/MyCruise.vue')
    },
    {
      path: '/help',
      name: 'help',
      meta: {
        title: 'HELP',
        icon: 'icon-life-bouy'
      },
      component: () => import(/* webpackChunkName: "help" */ '../views/Help.vue')
    }
  ]
})

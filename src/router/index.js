/**
 * @author youjingyu
 * @fileOverview init route
 * @date 2019-02-23
 */

import Vue from 'vue'
import Router from 'vue-router'
import Agent from '../views/Agent.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {
        title: 'DASHBOARD',
        icon: 'icon-dashboard'
      },
      component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
    },
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

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NodeInfo from '@/components/NodeInfo'
import Statistics from '@/components/Statistics'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/nodeinfo',
      name: 'NodeInfo',
      component: NodeInfo
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Home from '@/components/Home'
import NodeInfo from '@/components/NodeInfo'
import WordList from '@/components/WordList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/wordlist',
      name: 'WordList',
      component: WordList
    },
    {
      path: '/nodeinfo',
      name: 'NodeInfo',
      component: NodeInfo
    }
  ]
})

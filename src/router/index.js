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
      path: '/nodeinfo',
      name: 'WordList',
      component: WordList
    },
    {
      // path: '/words/word/:id',
      path: '/nodeinfo/:id',
      name: 'NodeInfo',
      component: NodeInfo
    }
  ]
})

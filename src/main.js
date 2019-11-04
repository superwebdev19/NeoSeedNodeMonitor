// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import { store } from './store'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import '@/plugins/echarts'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

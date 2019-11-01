import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    nodeID: 0
  },

  mutations: {
    setNodeID (state, payload) {
      state.nodeID = payload
    }
  },

  actions: {
    setNodeIDAction ({commit}, payload) {
      commit('setNodeID', payload)
    }
  },

  getters: {
    getNodeID (state) {
      return state.nodeID
    }
  }
})

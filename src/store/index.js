import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    nodeID: 0,
    statisticsX: [],
    statisticsY: []
  },

  mutations: {
    setNodeID (state, payload) {
      state.nodeID = payload
    },
    setStatisticsX (state, payload) {
      state.statisticsX = payload
    },
    setStatisticsY (state, payload) {
      state.statisticsY = payload
    }
  },

  actions: {
    setNodeIDAction ({commit}, payload) {
      commit('setNodeID', payload)
    },
    setStatisticsX ({commit}, payload) {
      commit('setStatisticsX', payload)
    },
    setStatisticsY ({commit}, payload) {
      commit('setStatisticsY', payload)
    }
  },

  getters: {
    getNodeID (state) {
      return state.nodeID
    },
    getStatisticsX (state) {
      return state.statisticsX
    },
    getStatisticsY (state) {
      return state.statisticsY
    }
  }
})

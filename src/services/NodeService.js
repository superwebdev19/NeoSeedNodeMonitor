// import Api from '@/services/Api'
import axios from 'axios'

export default {
  // getNodeInfo (params) {
  // getNodeInfos () {
  //   // return Api().get('/wordwise/entries?limit=1&headword=' + params.word)
  //   console.log('before get')
  //   return Api().get('https://dog.ceo/api/breeds/list/all')
  // },
  // getWordDetails (params) {
  //   // return Api().get('/entries/' + params)
  //   return Api().get('/entries/compare')
  // },
  getNodes () {
    return axios.get('https://jsonplaceholder.typicode.com/users')
  },

  getNodeInfo (nodeID) {
    return axios.get('https://jsonplaceholder.typicode.com/users')
  }
}

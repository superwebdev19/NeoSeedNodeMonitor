import axios from 'axios'

export default {
  getNodes () {
    return axios.get('https://jsonplaceholder.typicode.com/users')
  },

  getNodeInfo (nodeID) {
    return axios.get('https://jsonplaceholder.typicode.com/users')
  }
}

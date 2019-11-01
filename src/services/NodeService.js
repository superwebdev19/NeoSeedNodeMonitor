import axios from 'axios'

export default {
  getNodes () {
    return axios.get('http://47.103.106.221/api/nodes')
  },

  getNodeInfo (nodeID) {
    return axios.get('http://47.103.106.221/api/nodes/' + nodeID)
  }
}

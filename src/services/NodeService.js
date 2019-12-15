import axios from "axios";

export default {
  getNodeInfo(nodeID) {
    return axios.get("http://47.103.106.221/api/nodes/" + nodeID);
  }
};

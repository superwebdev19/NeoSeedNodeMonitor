<template>
  <div>
    <div class="contanier">
      <b-table responsive striped hover bordered :items="dummy" :fields="fields" class="mt-3 col-12 node-table">
        <template v-slot:cell(ExceptionCount)="data">
          <router-link to="/nodeinfo">
            <span v-on:click="setNodeID(data.value)">{{ data.value }}</span>
          </router-link>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import NodeService from '@/services/NodeService'
export default {
  name: 'Home',
  data () {
    return {
      fields: [
        {
          key: 'id',
          label: 'ID',
          sortable: true
        },
        {
          key: 'NodeName',
          label: 'Name',
          sortable: true
        },
        {
          key: 'ExceptionCount',
          label: 'Count',
          sortable: true
        }
      ],
      // eslint-disable-next-line
      dummy: [{"id":1,"NodeName":"http://seed1.ngd.network:10332","Height":4530188,"ExceptionCount":7},{"id":2,"NodeName":"http://seed2.ngd.network:10332","Height":4530188,"ExceptionCount":5},{"id":3,"NodeName":"http://seed3.ngd.network:10332","Height":4530188,"ExceptionCount":3},{"id":4,"NodeName":"http://seed4.ngd.network:10332","Height":4530188,"ExceptionCount":8},{"id":5,"NodeName":"http://seed5.ngd.network:10332","Height":4530188,"ExceptionCount":2},{"id":6,"NodeName":"http://seed6.ngd.network:10332","Height":4530188,"ExceptionCount":0},{"id":7,"NodeName":"http://seed7.ngd.network:10332","Height":4530188,"ExceptionCount":0},{"id":8,"NodeName":"http://seed8.ngd.network:10332","Height":4530188,"ExceptionCount":0},{"id":9,"NodeName":"http://seed9.ngd.network:10332","Height":4530188,"ExceptionCount":1},{"id":10,"NodeName":"http://seed10.ngd.network:10332","Height":4530188,"ExceptionCount":3},{"id":11,"NodeName":"https://seed11.ngd.network:10331","Height":4530188,"ExceptionCount":0},{"id":12,"NodeName":"https://seed12.ngd.network:10331","Height":4530188,"ExceptionCount":0},{"id":13,"NodeName":"https://seed1.cityofzion.io:443","Height":4530188,"ExceptionCount":3},{"id":14,"NodeName":"https://seed2.cityofzion.io:443","Height":4530188,"ExceptionCount":4},{"id":15,"NodeName":"https://seed3.cityofzion.io:443","Height":4530183,"ExceptionCount":0},{"id":16,"NodeName":"https://seed4.cityofzion.io:443","Height":4530189,"ExceptionCount":1},{"id":17,"NodeName":"https://seed5.cityofzion.io:443","Height":4530189,"ExceptionCount":3}],
      nodes: []
    }
  },
  mounted () {
    // this.getNodes()
  },
  methods: {
    async getNodes () {
      const response = await NodeService.getNodes()
      let responses = response.status === 200 ? response.data : null
      this.nodes = responses
    },
    setNodeID (param) {
      this.$store.dispatch('setNodeIDAction', param)
    }
  },
  computed: {
    nodeID () {
      return this.$store.getters.getNodeID
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.node-table {
  table {
    border-left: 4px solid #00a62c !important;
  }
}
</style>

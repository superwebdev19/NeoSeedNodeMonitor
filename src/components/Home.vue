<template>
  <div>
    {{nodeID}}
    <div class="contanier">
      <b-table responsive striped hover bordered :items="dummy" :fields="fields" class="mt-3 col-12">
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
          // key: 'name',
          label: 'Name',
          sortable: true
        },
        {
          key: 'ExceptionCount',
          // key: 'phone',
          label: 'Count',
          sortable: true
        }
      ],
      dummy: [
        {id: 1, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 12},
        {id: 2, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 36},
        {id: 3, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 20},
        {id: 4, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 8},
        {id: 5, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 14},
        {id: 6, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 22},
        {id: 7, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 6},
        {id: 8, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 15},
        {id: 9, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 21},
        {id: 10, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 9}
      ],
      nodes: []
    }
  },
  mounted () {
    this.getNodes()
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
</style>

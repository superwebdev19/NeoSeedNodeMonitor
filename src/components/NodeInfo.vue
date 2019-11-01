<template>
  <div class="contanier">
    {{nodeID}}
    <b-table responsive striped hover bordered :items="dummy" :fields="fields" class="mt-3 col-12">
      <template v-slot:cell(Height)="data">
        <router-link :to="`/nodeinfo/${data.value}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import NodeService from '@/services/NodeService'
export default {
  name: 'NodeInfo',
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
          label: 'Nodes',
          sortable: true
        },
        {
          key: 'Height',
          // key: 'name',
          label: 'Height',
          sortable: true
        },
        {
          key: 'ExceptionCount',
          // key: 'phone',
          label: 'Generate Time(GMT +8)',
          sortable: true
        },
        {
          key: 'Intervals',
          // key: 'phone',
          label: 'Interval(s)',
          sortable: true
        }
      ],
      dummy: [
        {id: 1, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 12, Intervals: 0},
        {id: 2, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 36, Intervals: 0},
        {id: 3, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 20, Intervals: 0},
        {id: 4, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 8, Intervals: 0},
        {id: 5, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 14, Intervals: 0},
        {id: 6, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 22, Intervals: 0},
        {id: 7, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 6, Intervals: 0},
        {id: 8, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 15, Intervals: 0},
        {id: 9, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 21, Intervals: 0},
        {id: 10, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 9, Intervals: 0}
      ],
      nodeInfo: []
    }
  },
  mounted () {
    this.getNodeInfo()
  },
  methods: {
    async getNodeInfo () {
      const response = await NodeService.getNodeInfo(this.nodeID)
      let responses = response.status === 200 ? response.data : null
      this.nodes = responses
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

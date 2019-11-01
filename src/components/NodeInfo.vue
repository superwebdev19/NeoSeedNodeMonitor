<template>
  <div class="contanier">
    <b-table responsive striped hover bordered :items="dummy" :fields="fields" class="mt-3 col-12">
      <template v-slot:cell(ExceptionHeight)="data">
        <a :href="`http://neoscan.io/block/${data.value}`" target="_blank">
          {{ data.value }}
        </a>
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
          label: 'Nodes',
          sortable: true
        },
        {
          key: 'ExceptionHeight',
          label: 'Height',
          sortable: true
        },
        {
          key: 'ExceptionTime',
          label: 'Generate Time(GMT +8)',
          sortable: true
        },
        {
          key: 'Intervals',
          label: 'Interval(s)',
          sortable: true
        }
      ],
      // eslint-disable-next-line
      dummy: [{"id":11,"NodeName":"http://seed3.ngd.network:10332","ExceptionHeight":4524917,"ExceptionTime":"2019-10-31T11:38:33.379325","Intervals":0},{"id":12,"NodeName":"http://seed3.ngd.network:10332","ExceptionHeight":4524961,"ExceptionTime":"2019-10-31T11:50:36.527318","Intervals":0},{"id":13,"NodeName":"http://seed3.ngd.network:10332","ExceptionHeight":4524972,"ExceptionTime":"2019-10-31T11:53:33.46269","Intervals":0}],
      nodeInfo: []
    }
  },
  mounted () {
    // this.getNodeInfo()
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

<template>
  <div class="contanier">
    <b-table responsive striped hover bordered :items="nodeInfo" :fields="fields" class="mt-3 col-12">
      <template v-slot:cell(ExceptionHeight)="data">
        <a :href="`http://neoscan.io/block/${data.value}`" target="_blank">
          {{ data.value }}
        </a>
      </template>
      <template v-slot:cell(ExceptionTime)="data">
        <router-link to="/statistics">
          <span>{{ data.value }}</span>
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
      this.nodeInfo = responses

      // setStatisticsData
      let exceptionTimes = []
      let intervals = []
      responses.filter((item) => {
        exceptionTimes.push(item.ExceptionTime)
        intervals.push(item.Intervals)
      })

      this.setStatisticsData(exceptionTimes, intervals)
    },
    setStatisticsData (xAxis, yAxis) {
      this.$store.dispatch('setStatisticsX', xAxis)
      this.$store.dispatch('setStatisticsY', yAxis)
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

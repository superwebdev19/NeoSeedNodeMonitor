<template>
  <div class="chart-wrapper container col-12">
    <chart :options="chartOptionsBar"></chart>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Statistics',
  data () {
    return {
      chartOptionsBar: {
        xAxis: {
          axisLabel: {
            formatter: function (value) {
              return moment(value).format('M/D/Y hh:mm')
            }
          },
          data: []
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: 'bar',
            data: []
          }
        ]
      }
    }
  },
  mounted () {
    this.getStatisticsXY()
  },
  methods: {
    getStatisticsXY () {
      this.chartOptionsBar.xAxis.data = this.statisticsX
      this.chartOptionsBar.series[0].data = this.statisticsY
    }
  },
  computed: {
    statisticsX () {
      console.log('X = ', this.$store.getters.getStatisticsX)
      return this.$store.getters.getStatisticsX
    },
    statisticsY () {
      console.log('Y = ', this.$store.getters.getStatisticsY)
      return this.$store.getters.getStatisticsY
    }
  }
}
</script>

<style scoped>
.chart-wrapper {
  width: 100%;
  height: 700px;
}
.echarts {
  width: 100%;
  height: 100%;
}
</style>

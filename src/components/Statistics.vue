<template>
  <div class="chart-wrapper">
    <chart :options="chartOptionsBar"></chart>
  </div>
</template>

<script>
export default {
  name: 'Statistics',
  data () {
    return {
      chartOptionsBar: {
        xAxis: {
          type: 'time',
          boundaryGap: false,
          axisLabel: {
            formatter: function (value) {
              // eslint-disable-next-line
              return moment(value).format('HH:mm')
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
      return moment(this.$store.getters.getStatisticsX).format('HH:mm')
    },
    statisticsY () {
      console.log(this.$store.getters.getStatisticsY)
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

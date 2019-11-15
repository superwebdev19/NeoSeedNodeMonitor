<template>
  <div>
    <div class="contanier mt-3 col-12">
      <input type="text" v-model="filter" placeholder="Filter by Name" icon="search" class="mb-3 col-3 float-right form-control" />
      <b-table responsive striped hover bordered :items="nodes" :fields="fields" :filter="filter" :filter-function="filterTable" class="node-table">
        <template v-slot:cell(ExceptionCount)="data">
          <router-link to="/nodeinfo">
            <span v-on:click="setNodeID(data.item.id)">{{ data.value }}</span>
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
      nodes: [],
      filter: null
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
    },
    filterTable (row, filter) {
      return row.NodeName.toLowerCase().includes(filter.toLowerCase()) ? true :  false
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

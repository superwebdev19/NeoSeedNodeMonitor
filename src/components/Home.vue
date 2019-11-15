<template>
  <div>
    <div class="contanier mt-3 col-12">
      <div class="form-group has-search mb-3 col-3 float-right">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" v-model="filter" placeholder="Filter by Name" icon="search" class="form-control" />
      </div>
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
      return row.NodeName.toLowerCase().includes(filter.toLowerCase()) ? true : false
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
.has-search .form-control {
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #777;
}
</style>

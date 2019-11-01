<template>
  <div>
    <div class="contanier">
      <b-table responsive striped hover bordered :items="nodes" :fields="fields" class="mt-3 col-12 node-table">
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

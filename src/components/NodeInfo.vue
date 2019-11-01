<template>
  <div class="contanier">
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
      // word: this.$route.params.id,
      // wordId: this.$route.params.data.id,
      // partOfSpeech: '',
      // senses: ''
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
      nodeID: this.$route.params.id,
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
    this.getNodeInfo(this.nodeID)
  },
  methods: {
    async getNodeInfo (nodeID) {
      // const response = await WordService.getWordDetails(params)
      const response = await NodeService.getNodeInfo(nodeID)
      let responses = response.status === 200 ? response.data : null
      console.log('nodeInfo = ', responses)
      this.nodes = responses

      // let data = response.data.result
      // this.partOfSpeech = data.part_of_speech
      // this.senses = data.senses
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// .wordlist-container {
//   margin-top: 60px;

//   .wordlist-columns {
//     width: 100%;
//     display: flex;
//     margin: 0 auto;
//     text-align: left;
//     align-items: center;

//     ul {
//       list-style: none;
//       padding: 0;
//       margin: 0;
//     }

//     h2 {
//       flex: 0 0 25%;
//       margin-top: 10px;
//       text-align: center;
//       align-self: flex-start;
//     }

//     .word-info {
//       overflow: auto;
//       flex: 0 0 75%;

//       .words {
//         height: calc(100vh - 200px);
//         overflow: auto;
//       }

//       h4{
//         margin-bottom: 10px;
//       }
//     }

//     .examples {
//       list-style: circle;
//       margin: 0 0 30px 30px;

//       li {
//         line-height: 30px;
//       }
//     }
//   }

//   .nav-links {
//     display: flex;
//     width: 100%;
//     position: fixed;
//     bottom: 62px;
//     left: 0;
//     justify-content: center;

//     a {
//         padding: 20px 50px;
//         text-align: center;
//         background-color: royalblue;
//         -webkit-box-flex: 0;
//         flex: 0 0 47%;
//         margin: 0 20px;
//         box-sizing: border-box;
//         display: block;
//         text-decoration: none;
//         color: white;
//     }
//   }
//   blockquote {
//     background: #f9f9f9;
//     border-left: 10px solid #ccc;
//     margin: 1.5em 10px;
//     padding: 0.5em 10px;
//     quotes: "\201C""\201D""\2018""\2019";
//     width: fit-content;
//   }

//   blockquote:before {
//     color: #ccc;
//     content: open-quote;
//     font-size: 4em;
//     line-height: 0.1em;
//     margin-right: 0.25em;
//     vertical-align: -0.4em;
//   }
//   blockquote p {
//     display: inline;
//   }
// }
</style>

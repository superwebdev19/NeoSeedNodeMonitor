<template>
  <div class="home">
    <div class="contanier">
        <pre>sadfa</pre>
      <!-- <b-table responsive striped hover bordered :items="dummy" :fields="fields" class="mt-3 col-12"> -->
      <b-table :items="dummy" :fields="fields" class="mt-3 col-12">
        <!-- <template slot="id" slot-scope="data">
          <a> {{ data.index + 2 }} </a>
        </template>
        <template slot="NodeName" slot-scope="data">
          {{data.item.NodeName}}
        </template>
        <template slot="ExceptionCount" slot-scope="data">
          {{data.aanodes.ExceptionCount}}
        </template> -->
        <template slot="index" slot-scope="row">
          <!-- <pre>{{row}}</pre> -->
          {{ row.index + 2 }}
        </template>
        <template slot="NodeName" slot-scope="row">
          <b-form-input
            type="text"
            v-model="row.item.NodeNamex"
          />
        </template>
        <template slot="ExceptionCount" slot-scope="row">
          <b-form-input
            type="number"
            v-model="row.item.ExceptionCount"
          />
        </template>
      </b-table>
    </div>
    <!-- <div class="input-container">
      <div class="input-group">
        <input type="text" v-on:keydown.enter="getWord" v-model="word" />
        <button
          @click="getWord"
          type="submit">
            Add Word
        </button>
      </div>
      <div class="word-meaning">
        {{ wordMeaning }}
        <div class="word-links" v-if="wordData">
          <router-link v-bind:to="{ name: 'Word', params: { id: word, word: word, data:wordData } }">Read More</router-link>
          <router-link v-bind:to="{ name: 'WordList'}">Word List</router-link>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import NodeService from '@/services/NodeService'
export default {
  name: 'Home',
  data: {
    // return {
      // word: '',
      // wordData: '',
      // wordMeaning: '',
      // wordPart: '',
      // wordPronounciation: ''
      fields: [
        {
          key: 'idx',
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
        {idx: 1, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 12},
        {idx: 2, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 36},
        {idx: 3, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 20},
        {idx: 4, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 8},
        {idx: 5, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 14},
        {idx: 6, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 22},
        {idx: 7, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 6},
        {idx: 8, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 15},
        {idx: 9, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 21},
        {idx: 10, NodeName: 'http://seed1.ngd.network:10332', Height: 4517276, ExceptionCount: 9}
      ],
      nodes: []
    // }
  },
  mounted () {
    this.getNodeInfo()
  },
  methods: {
    async getNodeInfo () {
      // if (this.word === '') {
      //   return false
      // }
      // const response = await WordService.getWord({
      //   word: this.word
      // })

      const response = await NodeService.getNodeInfo()

      let responses = response.status === 200 ? response.data : null

      // if (responses.length === 0) {
      //   this.wordMeaning = 'Your word could not be found and was not added.'
      //   this.wordData = ''
      //   return false
      // }

      this.nodes = responses
      // this.nodee.id
      // this.wordData = responses[0]
      // this.wordMeaning = responses[0].senses[0].definition
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// .home{
//   display: flex;
//   align-items:center;
//   justify-content: center;
//   height: calc(100vh);

//   .input-container{
//       max-width: 500px;
//       width:100%;

//       .input-group{
//         display:flex;
//         justify-content: space-between;

//         input {
//           box-sizing: border-box;
//           width: calc(100% - 150px);
//           padding: .5rem;
//           border: 2px solid royalblue;
//           font-size: 1rem;
//           border-radius: 0;
//           -webkit-appearance: none;
//         }

//         button{
//           width:150px;
//           height:50px;
//           -webkit-appearance: none;
//           background: royalblue;
//           color: white;
//           text-transform: uppercase;
//           border: none;
//           font-weight:bold;
//           font-size: 12pt;
//         }
//       }
//   }

//   .word-meaning {
//     margin: 20px 0;
//     font-size: 18px;
//     font-weight: bold;

//     .word-links{
//       margin: 30px 0 20px 0;
//       font-size: 14px;
//       font-weight: regular;

//       a {
//         border: 1px solid royalblue;
//         text-decoration: none;
//         padding: 5px 12px 3px 12px;
//         margin: 0 10px;
//         text-transform: uppercase;

//         &:focus {
//           color: royalblue;
//         }
//       }
//     }
//   }
// }
</style>

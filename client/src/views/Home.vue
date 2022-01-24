<template>
  <div>
    <v-data-table :items="birds" :headers="headers"></v-data-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Home',
    data: () => ({
    birds:[],
    headers:[
      {
        text: 'id',
        align: 'start',
        sortable: true,
        value: 'id'
      },
      {value: 'v-slot:img'},
      {text: 'common name', value: 'commonName'},
      {text: 'scientific name', value: 'scientificName'},
      {text: 'observed', value: 'count'},
    ],
  }),
  async created(){
    let response = await axios.get('http://localhost:3000/birds');
    this.birds = response.data;
    console.log(this.birds);
  }
};
</script>
  
<template>
  <div>
    <v-data-table :headers="headers" :items="birds">
      <template v-slot:[getImage()]="{item}">
        <v-img :src="item.pic" style="width: 100px; height: 100px"></v-img>
        <v-btn @click="addCount(item)"></v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data: () => ({
    birds: [],
    headers: [
      {
        text: "id",
        align: "start",
        sortable: true,
        value: "id",
      },
      { text: "image", value: "pic" },
      { text: "common name", value: "commonName" },
      { text: "scientific name", value: "scientificName" },
      { text: "observed", value: "count" },
    ],
  }),
  async created() {
    let response = await axios.get("http://localhost:3000/birds");
    this.birds = response.data;
    console.log(this.birds);
  },
  methods: {
    getImage(){
      return `item.pic`;
    },
    async addCount(item){
      let id = item.id;
      await axios.patch("http://localhost:3000/birds"+id)
    }
  }
};
</script>

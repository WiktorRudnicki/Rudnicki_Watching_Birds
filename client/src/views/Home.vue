<template>
  <div>
    <v-text-field
      label="Vorname"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
    <v-text-field label="Nachname" :rules="rules"></v-text-field>
    <v-data-table :headers="headers" :items="birds">
      <template v-slot:[getImage()]="{ item }">
        <v-img :src="item.pic" style="width: 100px; height: 100px"></v-img>
        <v-icon color="red" @click="addCount(Vorname.data, Nachname.data)">mdi-eye</v-icon>
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
      { text: "add" },
    ],
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
  }),
  async created() {
    let response = await axios.get("http://localhost:3000/birds");
    this.birds = response.data;
    console.log(this.birds);
  },
  methods: {
    getImage() {
      return `item.pic`;
    },
    async addCount(item) {
      let id = item.id;
      await axios.patch("http://localhost:3000/birds" + id);
    },
  },
};
</script>

<template>
  <v-app>
    <v-main>
      <appbar></appbar>
      <v-container> <router-view /></v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import appbar from "./components/AppBar.vue"
export default {
  name: 'App',
  components:{
    appbar,
  },
  data: () => ({
    birds:[],
  }),
  async created(){
    let response = await axios.get('http://localhost:3000/birds');
    this.birds = response.data;
    console.log(this.birds);
  }
};
</script>

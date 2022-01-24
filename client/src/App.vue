<template>
  <v-app>
    <v-main>
      <appbar></appbar>
      <v-container> <router-view /></v-container>
    </v-main>
  </v-app>
</template>

<script>
import appbar from "./components/AppBar.vue"
export default {
  name: 'App',
  components:{
    appbar,
  },
  data: () => ({
    birds:[],
  }),
  methods: {
    async function getBirds(){

    }
  }
};
</script>

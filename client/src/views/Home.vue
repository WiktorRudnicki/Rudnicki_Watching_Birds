<template>
  <div>
    <appbar></appbar>
    <p class="text-h3 text-center mt-4"><v-icon class="text-h3 red--text">mdi-heart</v-icon> Willkommen! <v-icon class="text-h3 red--text">mdi-heart</v-icon></p>
  </div>
</template>

<script>

import appbar from "../components/AppBar.vue"
export default {
  name: 'Home',
  components:{
    appbar,
  }
};
</script>

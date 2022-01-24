<template>
  <div>
    <v-carousel>
      <v-carousel-item v-for="(bird) in birds" :key="bird.id">
          <img :src="bird.pic" class="marginauto" />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    birds: [],
  }),
  async created() {
    let response = await axios.get("http://localhost:3000/birds");
    this.birds = response.data;
    console.log(this.birds);
  },
};
</script>

<style lang="scss" scoped></style>

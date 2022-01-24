<template>
        <v-app-bar color="primary"  class="d-flex flex-column justify-space-between">
            <img src="../assets/bird.png" height="60" width="60"/>
            <h1>BIRD WATCH</h1>
            <v-spacer></v-spacer>
            <v-btn to="/" color="primary">
                HOME
            </v-btn>
            <v-btn to="/gallery" color="primary">
                GALLERY
            </v-btn>
            <v-btn to="/about" color="primary">
                ABOUT
            </v-btn>
        </v-app-bar>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
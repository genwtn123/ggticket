<template>
  <v-app>
    <Mainbar />
    <v-main class="bg">
      <Movie />
      <Footer />
    </v-main>
  </v-app>
</template>

<style scoped>
.bg {
      background-color: #222831;
      max-width: 100% !important;
    }
</style>
<script>
// @ is an alias to /src
import Movie from "../components/Movie.vue";
import Mainbar from "../components/navbar/Mainbar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Movie,
    Mainbar,
    Footer
  },
  data: () => ({}),
};
</script>

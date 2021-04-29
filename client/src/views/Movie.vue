<template>
  <div>
      <v-app>
        <Mainbar/>
        <Movie/>
      </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import Movie from "../components/Movie.vue";
import Mainbar from "../components/navbar/Mainbar.vue";

export default {
  components: {
    Movie,
    Mainbar
  },
  data: () => ({}),
};
</script>

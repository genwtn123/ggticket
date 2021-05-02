<template >
  <v-app>
    <v-main fluid class="bg">
        <Adminbar/>
    <v-container >
        <div class="">
          <Movie/>
        </div>
    </v-container>
    </v-main>
  </v-app>
</template>

<style>

</style>

<script>
// @ is an alias to /src
import Movie from "../components/Movie_admin.vue";
import Adminbar from "../components/navbar/Adminbar.vue";

export default {
  components: {
    Adminbar,
    Movie,
  },
  data: () => ({}),
};
</script>

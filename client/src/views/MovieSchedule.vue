<template>
  <div>
      <v-app>
        <Mainbar/>
        <MovieSchedule/>
      </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieSchedule from "../components/MovieSchedule.vue";
import Mainbar from "../components/navbar/Mainbar.vue";

export default {
  components: {
    MovieSchedule,
    Mainbar
  },
  data: () => ({}),
};
</script>

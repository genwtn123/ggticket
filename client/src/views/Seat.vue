<template>
  <div>
      <v-app>
        <Mainbar/>
          <Seat/>
      </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import Seat from "../components/Seat.vue";
import Mainbar from "../components/navbar/Mainbar.vue";

export default {
  components: {
    Seat,
    Mainbar
  },
  data: () => ({}),
};
</script>

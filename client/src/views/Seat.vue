<template>
  <div>
    <v-container>
      
      <v-app>
        <Mainbar/>
        <div class="">
          <Seat/>
        </div>
      </v-app>
    </v-container>
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

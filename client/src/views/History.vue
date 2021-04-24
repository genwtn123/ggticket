<template >
  <v-app>
    <v-main fluid class="bg">
        <Mainbar/>
    <v-container >
        <div class="">
          <History/>
        </div>
    </v-container>
    </v-main>
  </v-app>
</template>

<style>

.bg {
      background-color: #222831;
      max-width: 100% !important;
    }

</style>

<script>
// @ is an alias to /src
import History from "../components/History.vue";
import Mainbar from "../components/navbar/Mainbar.vue";

export default {
  components: {
    Mainbar,
    History
  },
  data: () => ({}),
};
</script>

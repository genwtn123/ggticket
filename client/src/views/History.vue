
<template>
  <div>
      <v-app>
        <Mainbar/>
        <History/>
      </v-app>
  </div>
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
    History,
    Mainbar
  },
  data: () => ({}),
};
</script>

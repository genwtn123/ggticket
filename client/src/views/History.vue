<template>
  <div>
      <v-app>
        <Mainbar/>
        <History/>
      </v-app>
  </div>
</template>

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

<template>
  <div>
      <v-app>
        <Mainbar/>
        <div class="">
          <Theater/>
        </div>
      </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import Theater from "../components/Theater.vue";
import Mainbar from "../components/navbar/Mainbar.vue";

export default {
  components: {
    Theater,
    Mainbar
  },
  data: () => ({}),
};
</script>

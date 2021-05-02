<template >
  <v-app>
    <v-main fluid class="bg">
        <Adminbar/>
    <v-container >
        <div class="">
          <Theater/>
        </div>
    </v-container>
    </v-main>
  </v-app>
</template>

<style>

</style>

<script>
// @ is an alias to /src
import Theater from "../components/Theater_admin.vue";
import Adminbar from "../components/navbar/Adminbar.vue";

export default {
  components: {
    Adminbar,
    Theater,
  },
  data: () => ({}),
};
</script>

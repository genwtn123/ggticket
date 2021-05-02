<template >
  <v-app>
    <v-main fluid class="bg">
        <Adminbar/>
    <v-container >
        <div class="">
          <Buyfood/>
        </div>
    </v-container>
    </v-main>
  </v-app>
</template>

<style>

</style>

<script>
// @ is an alias to /src
import Buyfood from "../components/Buyfood_admin.vue";
import Adminbar from "../components/navbar/Adminbar.vue";

export default {
  components: {
    Adminbar,
    Buyfood,
  },
  data: () => ({}),
};
</script>

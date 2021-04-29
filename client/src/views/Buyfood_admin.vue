<template >
  <v-app>
    <v-main fluid class="bg">
        <Mainbar/>
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
import Mainbar from "../components/navbar/Mainbar.vue";

export default {
  components: {
    Mainbar,
    Buyfood,
  },
  data: () => ({}),
};
</script>

<template >
  <v-app>
    <v-main fluid class="bg">
        <Mainbar/>
    <v-container >
        <div class="">
          <Promotion/>
        </div>
    </v-container>
    </v-main>
  </v-app>
</template>

<style>

</style>

<script>
// @ is an alias to /src
import Promotion from "../components/Promotion_admin.vue";
import Mainbar from "../components/navbar/Mainbar.vue";

export default {
  components: {
    Mainbar,
    Promotion,
  },
  data: () => ({}),
};
</script>

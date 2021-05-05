<template >
  <v-app>
    <v-main fluid class="bg">
        <Adminbar/>
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
import Adminbar from "../components/navbar/Adminbar.vue";

export default {
  components: {
    Adminbar,
    Promotion,
  },
  data: () => ({}),
};
</script>

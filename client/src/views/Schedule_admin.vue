<template >
  <v-app>
    <v-main fluid class="bg">
        <Adminbar/>
    <v-container >
        <div class="">
          <Schedule/>
        </div>
    </v-container>
    </v-main>
  </v-app>
</template>

<style>

</style>

<script>
// @ is an alias to /src
import Schedule from "../components/Schedule_admin.vue";
import Adminbar from "../components/navbar/Adminbar.vue";

export default {
  components: {
    Adminbar,
    Schedule,
  },
  data: () => ({}),
};
</script>

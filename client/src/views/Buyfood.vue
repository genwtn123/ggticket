<template>
  <div>
    <v-app>
      <v-main class="bg">
        <Mainbar />
        <Buyfood />
      </v-main>
    </v-app>
  </div>
</template>

<style scoped>
.bg {
  background-color: #000000;
  max-width: 100% !important;
}
</style>
<script>
// @ is an alias to /src
import Buyfood from "../components/Buyfood.vue";
import Mainbar from "../components/navbar/Mainbar.vue";

export default {
  components: {
    Buyfood,
    Mainbar,
  },
  data: () => ({}),
};
</script>

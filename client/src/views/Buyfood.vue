<template>
  <div class="Buyfood">
    <v-container>
      <Mainbar/>
      <v-app>
        <Buyfood/>
      </v-app>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Buyfood from "@/components/Buyfood.vue";
import Mainbar from "../components/navbar/Mainbar.vue";

export default {
  name: "Home",
  components: {
    Buyfood,
    Mainbar
  },
};
</script>

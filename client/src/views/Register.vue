<template>
  <div class="register">
    <v-container>
      <Mainbar/>
      <v-app>
        <Register />
      </v-app>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from "@/components/Register.vue";
import Mainbar from "../components/navbar/Mainbar.vue";

export default {
  name: "Home",
  components: {
    Register,
    Mainbar
  },
};
</script>

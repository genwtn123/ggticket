<template>
  <div class="register">
    <v-container>
      <Loginbar/>
      <v-app>
        <Register />
      </v-app>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from "@/components/Register.vue";
import Loginbar from "../components/navbar/Loginbar.vue";

export default {
  name: "Home",
  components: {
    Register,
    Loginbar
  },
};
</script>

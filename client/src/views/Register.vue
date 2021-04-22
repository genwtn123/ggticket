<template >
  <v-app>
    <v-main fluid class="login_bg">
    <v-container >
        <div class="">
          <Register />
        </div>
    </v-container>
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Register from "@/components/Register.vue";
// import Loginbar from "../components/navbar/Loginbar.vue";

export default {
  name: "Home",
  components: {
    Register,
  },
};
</script>

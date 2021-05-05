<template >
  <v-app>
    <v-main fluid class="login_bg">
    <v-container >
        <div class="">
          <Login />
        </div>
    </v-container>
    </v-main>
  </v-app>
</template>

<style>

.login_bg {
      background: url(../assets/LoginBG.png);
      max-width: 100% !important;
      background-size: cover;
      /* background-position: center; */
    }

</style>

<script>
// @ is an alias to /src
import Login from "../components/Login.vue";
// import Loginbar from "../components/navbar/Loginbar.vue";

export default {
  components: {
    Login
  },
  data: () => ({}),
};
</script>

<template>
  <div>
    <v-container>
      
      <v-app>
        <Loginbar/>
        <div class="">
          <Login />
        </div>
      </v-app>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "../components/Login.vue";
import Loginbar from "../components/navbar/Loginbar.vue";

export default {
  components: {
    Login,
    Loginbar
  },
  data: () => ({}),
};
</script>

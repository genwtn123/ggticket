<template >
  <div >
    <v-fluid >
        <div class="">
          <Login />
        </div>
    </v-fluid>
  </div>
</template>

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

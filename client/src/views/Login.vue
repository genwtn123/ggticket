<template>
  <div>
    <v-container>
      
      <v-app>
        <Mainbar/>
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
import Mainbar from "../components/navbar/Mainbar.vue";

export default {
  components: {
    Login,
    Mainbar
  },
  data: () => ({}),
};
</script>

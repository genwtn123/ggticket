<template>
  <div class="register">
    <v-container>
      <v-app>
        <Mainbar />
        <Login />
      </v-app>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "../components/Login";
import Mainbar from "../components/navbar/Mainbar";

export default {
  name: "Home",
  components: {
    Login,
    Mainbar,
  },
  data: () => ({}),
};
</script>

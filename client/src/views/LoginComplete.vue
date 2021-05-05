<template>
  <div>
    <v-container>
      <v-app>
        <Mainbar/>
        <div>
          <Login />
        </div>
      </v-app>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "../components/Login.vue";

export default {
  components: {
    Login,
  },
  data: () => ({}),
};
</script>

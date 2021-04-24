<template >
  <div id="nav">
    <v-app-bar app color="black">
      <router-link to="/movie" class="pr-5">ภาพยนต์</router-link>
      <router-link to="/theater">โรงภาพยนต์</router-link>
      <v-btn depressed color="black" class="pr-5" @click="logout"> Logout </v-btn>
    </v-app-bar>

  </div>
</template>


<script>
import AccountService from '../../service/AccountService';

export default {
  name: "Mainbar",
  components: {},
  data: () => ({
    username: "",
    password: "",
    error: null,
  }),
  methods: {
      async logout(){
          await AccountService.Logout()
          this.$router.push({name:"Login"})
      }
  }

};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: snow;
}

#nav a.router-link-exact-active {
  color: salmon;
}

#nav button {
  font-weight: bold;
  color: snow;
}
</style>

<template >
  <div id="nav">
    <v-app-bar app dark>
      <router-link to="/" class="pr-5">หน้าหลัก</router-link>
      <router-link to="/movie" class="pr-5">ภาพยนต์</router-link>
      <router-link to="/theater" class="pr-5">โรงภาพยนต์</router-link>
      <router-link to="/buyfood" class="pr-5">food</router-link>
      <router-link to="/buyticket" class="pr-5">ticket</router-link>
      <router-link to="/buyticketinfomation" class="pr-5"
        >ticketinfo</router-link
      >
      <router-link to="/promotion" class="pr-5">promotion</router-link>
      <router-link to="/seat" class="pr-5">seat</router-link>
      <router-link to="/history" class="pr-5">history</router-link>
      <v-btn depressed color="black" class="mr-2" @click="isopen = true">
        Profile
      </v-btn>
      <v-btn depressed color="black" class="" @click="logout"> Logout </v-btn>
      
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-list-item  @click="logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>


<script>
import AccountService from "../../service/AccountService";

export default {
  name: "Mainbar",
  components: {},
  data: () => ({
    username: "",
    password: "",
    error: null,
  }),
  methods: {
    async logout() {
      await AccountService.Logout();
      this.$router.push({ name: "Login" });
    },
  },
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

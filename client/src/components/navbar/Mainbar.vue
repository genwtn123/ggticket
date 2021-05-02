<template >
  <nav
    class="navbar is-transparent"
    style="background-color: black; height: 80px"
  >
    <div class="navbar-brand">
      <a class="navbar-item">
        <router-link to="/" class="pr-5 navbar-item"
          ><img src="https://i.ibb.co/BCtPq5T/Component-1.png"
        /></router-link>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
      <router-link to="/movie" class="pr-5 navbar-item nav_font">ภาพยนต์</router-link>
      <router-link to="/movieschedule" class="pr-5 navbar-item nav_font">ตารางภาพยนต์</router-link>
      <router-link to="/buyfood" class="pr-5 navbar-item nav_font">food</router-link>
      <router-link to="/promotion" class="pr-5 navbar-item nav_font">promotion</router-link>

      <router-link to="/history" class="pr-5 navbar-item nav_font">History</router-link>

      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <v-avatar
              style="text-align: left"
              color="warning lighten"
              size="40"
            >
              <!-- <img src="" alt="" srcset=""> -->
            </v-avatar>

            <v-menu left bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="white">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item>
                  <v-list-item-title>Profile</v-list-item-title>
                </v-list-item>
                <v-list-item @click="logout">
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </div>
    </div>
  </nav>
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
.nav_font {
  color: white;
  font-size: 20px;
}
</style>
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete
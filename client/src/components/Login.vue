<template>
    <v-banner elevation="24" class="login_box">
      <div class="columns">
 
        <div class="column">
          <router-link to="/Register" class="regis_txt pt-3"><img src="../assets/Be_our.png" alt="" class="regis"></router-link>
          <router-link to="/Register" class="regis_txt pt-3">Register</router-link>
        </div>

        <div class="vl"></div>

        <form @submit="login" method="get" class="column" style="padding-right: 6%">
          <div style="font-size: 45px; color:#FFFFFF; padding-top:16%" class="pb-5">LOGIN</div>
  
          <div style="text-align:left; color:#9D9FA3" class="py-6">Username
            <v-text-field
              hide-details="auto"
              v-model="username"
              label="username"
              required
              filled
              rounded
              dense
              solo
              class="pt-3"
            ></v-text-field>
          </div>

          <div style="text-align:left; color:#9D9FA3" class="py-6">Password
            <v-text-field
              v-model="password"
              type="password"
              label="password"
              required
              filled
              rounded
              dense
              solo
              class="pt-3"
            ></v-text-field>
          </div>

          <!-- If using vue-router -->
          <button class="button" type="submit" @click="login" style="background:#FD7014; color:#FFFFFF;">
            LOGIN
          </button> 
        </form>
      </div>
    </v-banner>

</template>

<script>
import AccountService from "../service/AccountService";
export default {
  name: "LOGIN",
  components: {},
  data: () => ({
    username: "",
    password: "",
    error: null,
  }),
  
  methods: {
    async login(e) {
      e.preventDefault();
      try {
        await AccountService.Login(this.createForm());
        this.$router.push({name:"Home"})
      } catch (err) {
        console.log(err);
      }
    },
    createForm: function () {
      let form = new FormData();
      form.append("username", this.username);
      form.append("password", this.password);
      return form;
    },
  },
};
</script>

<style>
.login_box {
  background: #21262e !important;
  margin-top: 7% !important;
  width: 63%;
  margin: auto;

}

.regis {
  width: 284px;
  height: 241px;
  margin-top: 25%;
  padding-right: 2%;
}

.vl {
  border-left: 2px solid #9D9FA3;
  height: 445px;
  margin-top: 3%;
  padding-right: 5%;
}

.regis_txt {
  color: #EEEEEE !important;
  text-decoration: 2px underline;
  text-decoration-color: #FD7014;
  margin-bottom: 30%;
  font-size: 25px;
}

</style>
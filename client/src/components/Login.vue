<template>
  <v-fluid >
    <form @submit="login" method="get">
      <!-- Sizes your content based upon application components -->
      <v-main >
        <!-- Provides the application the proper gutter -->
          <v-banner elevation="24" class="login_box">
        <div class="columns p-5">
          
        <div class="column pr-6" style="padding-top:10%">
          <img src="../assets/Be_our.png" alt="" class="regis">
          <div class="regis_txt">Register</div>
        </div>

        <div class="vl pr-6"></div>

        <div class="column py-6">
          <div style="font-size: 45px; color:#FFFFFF;" class="py-6">LOGIN</div>
          
          <div style="text-align:left; color:#9D9FA3" class="py-6">
          Username

          <v-text-field

            hide-details="auto"
            v-model="username"
            label="username"
            required
            filled
            rounded
            dense
            solo
            class="pt-2"
          ></v-text-field></div>

          <div style="text-align:left; color:#9D9FA3"  class="py-6">
          Password
          <v-text-field
            v-model="password"
            type="password"
            label="password"
            required
            filled
            rounded
            dense
            solo
            class="pt-2"
          ></v-text-field></div>
          <!-- If using vue-router -->
        <button class="button" type="submit" @click="login" style="background:#FD7014; color:#FFFFFF;">
          Submit
        </button> 
        </div>
        
        </div>
        </v-banner>
      </v-main>
     

      <v-footer app> </v-footer>
    </form>
  </v-fluid>
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
  async created() {
    console.log(await AccountService.getSession());
  },
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
  margin-top: 15%;
  background: #222831 !important;
  width: 800px;
}

.regis {
  width: 270px;
  height: 225px;
}

.vl {
  border-left: 2px solid #9D9FA3;
}

.regis_txt {
  color: #EEEEEE;
  text-decoration: underline;
  text-decoration-color: #FD7014;
}

/* #login {
      background: url(../assets/LoginBG.png);
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    } */

</style>
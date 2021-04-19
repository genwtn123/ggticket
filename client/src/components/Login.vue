<template >
  <v-container>
    <form @submit="login" method="get">
      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <div>
          <span style="font-size: 20px"><b>LOGIN</b></span>
          <v-text-field
            label="Username"
            hide-details="auto"
            v-model="username"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            label="Password"
            required
          ></v-text-field>
        </div>
        <!-- If using vue-router -->
        <button class="button is-info" type="submit" @click="login">
          Submit
        </button>
      </v-main>

      <v-footer app> </v-footer>
    </form>
  </v-container>
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

<template>
  <v-banner elevation="24" class="regis_box">
    <form @submit="createAccount" method="POST">
      <div
        style="font-size: 45px; color: #FD7014; padding-top: 5%; padding-bottom:5%;"
      >
        REGISTER
      </div>

      <div class="columns px-6">
        <div class="column px-6">
          <div class="pt-2 label_regis pb-4">
            Username
            <v-text-field
              hide-details="auto"
              v-model="username"
              label="username"
              required
              rounded
              dense
              solo
              class="pt-3"
            ></v-text-field>
          </div>

          <div class="pt-2 label_regis pb-4">
            Firstname
            <v-text-field
              hide-details="auto"
              v-model="user_fname"
              label="firstname"
              required
              rounded
              dense
              solo
              class="pt-3"
            ></v-text-field>
          </div>

          <div class="pt-2 label_regis">
            Tel
            <v-text-field
              v-model="user_tel"
              label="tel"
              required
              rounded
              dense
              solo
              class="pt-3"
            ></v-text-field>
          </div>

          <div class="label_regis">
            Type
            <v-select
              v-model="type"
              :items="item"
              label="type"
              required
              rounded
              dense
              solo
              class="pt-3"
            ></v-select>
          </div>
        </div>

        <div class="rvl"></div>

        <div class="column px-6">
          <div class="pt-2 label_regis">
            Password
            <v-text-field
              v-model="password"
              label="password"
              type="password"
              required
              rounded
              dense
              solo
              class="pt-3"
            ></v-text-field>
          </div>

          <div class="label_regis">
            Lastname
            <v-text-field
              v-model="user_lname"
              label="lastname"
              required
              rounded
              dense
              solo
              class="pt-3"
            ></v-text-field>
          </div>

          <div class="label_regis">
            E-mail
            <v-text-field
              v-model="user_email"
              label="e-mail"
              required
              rounded
              dense
              solo
              class="pt-3"
            ></v-text-field>
          </div>

          <div class="label_regis">
            Code
            <v-text-field
              v-model="admin_code"
              label="code"
              rounded
              dense
              solo
              class="pt-3"
            ></v-text-field>
          </div>
        </div>
      </div>
      <!-- If using vue-router -->
      <button
        class="button is-info mb-6"
        style="background: #fd7014; color: #ffffff;"
        type="submit"
      >
        REGISTER
      </button>
    </form>
  </v-banner>
</template>

<style>
.label_regis {
  text-align: left;
  color: #9d9fa3;
}

.regis_box {
  background: #21262e !important;
  margin-top: 2% !important;
  width: 80%;
  margin: auto;
}

.rvl {
  border-left: 2px solid #21262e;
  padding-right: 2%;
  padding-left: 2%;
}
</style>

<script>
import AccountService from "../service/AccountService";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      user_fname: "",
      user_lname: "",
      user_email: "",
      user_tel: "",
      type: "",
      item: ["Admin", "Customer"],
      admin_code: "",
    };
  },
  props: ["msg"],
  methods: {
    createForm: function () {
      let form = new FormData();
      form.append("username", this.username);
      form.append("password", this.password);
      form.append("user_fname", this.user_fname);
      form.append("user_lname", this.user_lname);
      form.append("user_tel", this.user_tel);
      form.append("user_email", this.user_email);
      form.append("type", this.type);
      return form;
    },
    async createAccount(e) {
      if (this.admin_code == "a13579" || this.type == "Customer") {
        e.preventDefault();
        var result = await AccountService.createAccount(this.createForm());
        console.log("res", result.status);
        if (result.status == 200) {
          console.log("success by vuejs");
          this.clearForm();
        } else {
          alert("err");
        }
      } else {
        alert("try again");
      }
    },
    clearForm: function () {
      alert("REGISTER SUCCESS");
      (this.username = ""),
        (this.password = ""),
        (this.user_fname = ""),
        (this.user_lname = ""),
        (this.user_email = ""),
        (this.user_tel = ""),
        (this.type = "");
    },
  },
};
</script>

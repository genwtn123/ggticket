<template>
  <v-banner elevation="24" class="regis_box">
    <v-form ref="form" @submit="createAccount" method="POST">
      <div
        style="
          font-size: 45px;
          color: #fd7014;
          padding-top: 5%;
          padding-bottom: 4%;
        "
      >
        REGISTER
      </div>

      <div class="columns px-6">
        <div class="column px-6">
          <div class="pt-2 label_regis pb-4">
            Username
            <v-text-field
              v-model="username"
              label="username"
              required
              rounded
              dense
              solo
              :rules="usernamerule"
              class="pt-3"
            ></v-text-field>
          </div>

          <div class="pt-2 label_regis pb-4">
            Firstname
            <v-text-field
              v-model="user_fname"
              label="firstname"
              required
              rounded
              dense
              solo
              :rules="fnamerule"
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
              :rules="telrule"
              class="pt-3"
            ></v-text-field>
          </div>

          <!-- <div class="label_regis">
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
          </div> -->
        </div>

        <div class="rvl"></div>

        <div class="column px-6">
          <div class="pt-2 label_regis pb-4">
            Password
            <v-text-field
              v-model="password"
              label="password"
              type="password"
              required
              rounded
              dense
              solo
              :rules="passwordrule"
              class="pt-3"
            ></v-text-field>
          </div>

          <div class="pt-2 label_regis pb-4">
            Lastname
            <v-text-field
              v-model="user_lname"
              label="lastname"
              required
              rounded
              dense
              solo
              :rules="lnamerule"
              class="pt-3"
            ></v-text-field>
          </div>

          <div class="pt-2 label_regis">
            E-mail
            <v-text-field
              v-model="user_email"
              label="e-mail"
              required
              rounded
              dense
              solo
              :rules="emailrule"
              class="pt-3"
            ></v-text-field>
          </div>
        </div>
      </div>
      <!-- If using vue-router -->
      <button
        class="button is-info mb-6"
        style="background: #fd7014; color: #ffffff"
        type="submit"
      >
        REGISTER
      </button>
    </v-form>
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
      item: ["Staff", "Audience"],
      admin_code: "",
      usernamerule: [
        (v) => !!v || "Username is required",
        (v) => v.length >= 5 || "username length",
        (v) => v.length <= 20 || "username length",
      ],
      fnamerule: [
        (v) => !!v || "Firstname is required",
        (v) => v.length <= 50 || "fname length",
      ],
      telrule: [
        (v) => !!v || "Tel is required",
        (v) => /^0[0-9]{9}$/.test(v) || "pass",
      ],
      passwordrule: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 8 || "Password must be more than 8",
        (v) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(v) ||
          "password",
      ],
      lnamerule: [
        (v) => !!v || "Lastname is required",
        (v) => v.length <= 50 || "lname length",
      ],
      emailrule: [
        (v) => !!v || "Email is required",
        (v) => /^\w+@\w+\.\w+$/.test(v) || "kwaii",
      ],
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
      form.append("type", "Audience");
      return form;
    },
    async createAccount(e) {
      e.preventDefault();
            this.$refs.form.validate();
      try{
      var result = await AccountService.createAccount(this.createForm());
      if (result.status == 200) {
        console.log("success by vuejs");
        this.clearForm();
        this.$router.push({ name: "Login" });
      } else {
        alert(result.data == "Email Duplicate" ? result.data : result.data.details.message);
      }
      }catch(err){
        console.log(err)
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

<template>
  <div class="modal" :class="{ 'is-active': isopen }" :key="key">
    <div class="modal-background"></div>
    <div class="modal-card" style="width: 50%">
      <header
        class="modal-card-head has-background-black"
        style="border-style: hidden"
      >
        <span class="modal-card-title pl-3 py-1" style="text-align: left"
          ><img src="../assets/Logo.png" class="logo_card"
        /></span>
        <button
          class="delete"
          aria-label="close"
          @click="isopen = false"
        ></button>
      </header>

      <section class="modal-card-body profile_modal">
        <p
          class="regis_txt pb-3"
          style="text-decoration: none; font-size: 30px"
        >
          Profile
        </p>
        <div class="columns">
          <div class="column is-4 pl-6">
            <v-btn icon x-large @click="changephoto()">
              <v-avatar size="100"
                ><img :src="imagePath(this.image)"
              /></v-avatar>
            </v-btn>

            <div class="profile_modal_txt pt-7">{{this.username}}</div>
            <div style="color: white; font-size: 20px">{{ this.role }}</div>
            <input
              style="display: none"
              type="file"
              ref="photo"
              @input="keepphoto"
            />
          </div>

          <div class="column is-2" style="text-align: right">
            <p class="profile_modal_txt py-2">Name :</p>
            <p class="profile_modal_txt py-4">E-mail :</p>
            <p class="profile_modal_txt py-4">Tel :</p>
            <p class="profile_modal_txt py-4">Old Password:</p>
            <p class="profile_modal_txt py-4">New Password:</p>
          </div>

          <div class="column pr-6">
            <v-text-field
              v-model="name"
              label="name"
              rounded
              dense
              solo
              disabled
            ></v-text-field>

            <v-text-field
              v-model="email"
              label="e-mail"
              rounded
              dense
              solo
              disabled
            ></v-text-field>

            <v-text-field
              v-model="tel"
              label="Tel"
              rounded
              dense
              solo
              disabled
            ></v-text-field>

            <v-text-field
              v-model="oldpassword"
              label="old password"
              type="password"
              rounded
              dense
              solo
            ></v-text-field>

            <v-text-field
              v-model="newpassword"
              label="new password"
              type="password"
              rounded
              dense
              solo
              :rules="passwordrule"
            ></v-text-field>
            <v-alert type="error" v-if="this.error != null">{{this.error}}</v-alert>

            <span class="column is-3 py-3"
              ><button
                class="button"
                style="
                  background-color: #fd7014;
                  border-style: hidden;
                  font-size: 15px;
                  color: white;
                "
                @click="changepassword"
              >
                SAVE
              </button></span
            >
          </div>
        </div>
      </section>

      <footer
        class="modal-card-foot has-background-black"
        style="border-style: hidden"
      >
        <div style="margin: auto">
          <button
            style="
              background-color: #fd7014;
              border-style: hidden;
              color: white;
            "
            class="button mx-3"
            @click="logout()"
          >
            LOGOUT
          </button>
          <button
            style="
              background-color: #222831;
              border-style: hidden;
              color: white;
            "
            class="button mx-3"
            @click="isopen = flase"
          >
            CLOSE
          </button>
        </div>
      </footer>
      <sweet-modal icon="success" ref="modal">
        Change Password Success!
        <!-- <v-row>
          <v-col>
            <v-btn color="success" class="mt-5"
              >Ok</v-btn
            ></v-col
          >
        </v-row> -->
      </sweet-modal>
    </div>
  </div>
</template>

<style>
.logo_card {
  text-align: left;
  width: 170px;
  height: 30px;
}

.profile_modal {
  background-color: #222831 !important;
}

.profile_image {
  width: 65%;
  border-radius: 100%;
}

.profile_modal_txt {
  color: #a1a4a8;
}
</style>

<script>
import AccountService from "../service/AccountService";
import { SweetModal } from "../../node_modules/sweet-modal-vue";
export default {
  component: {
    SweetModal,
  },
  data() {
    return {
      isopen: false,
      data: "",
      username:"",
      name: "",
      email: "",
      tel: "",
      role: "",
      oldpassword: "",
      newpassword: "",
      image: "",
      key: 0,
      error:null,
      passwordrule: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 8 || "Password must be more than 8",
        (v) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(v) ||
          "password",
      ]
    };
  },
  mounted() {
    this.getuserdata();
  },
  created() {
    this.$root.$refs.modal = this;
  },
  methods: {
    async getuserdata() {
      try {
        let keep = await AccountService.getUsserInfo();
        this.data = keep.data[0];
        this.username = this.data.username
        this.name = `${this.data.user_fname} ${this.data.user_lname}`;
        this.email = this.data.user_email;
        this.tel = this.data.user_tel;
        this.role = this.data.type;
        this.image = this.data.user_image;
      } catch (err) {
        console.log(err);
      }
    },
    changephoto() {
      this.$refs.photo.click();
    },
    async keepphoto(e) {
      let form = new FormData();
      form.append("user_image", e.target.files[0]);
      await AccountService.addimage(form);
      this.getuserdata();
      this.$root.$refs.mainbar.update();
      this.$root.$refs.adminbar.update();
    },
    imagePath(file_path) {
      if (file_path) {
        return "http://localhost:12000/" + file_path;
      } else {
        return "https://bulma.io/images/placeholders/640x360.png";
      }
    },
    changemodal() {
      this.isopen = !this.isopen;
    },
    async changepassword() {
      try {
        let keep = await AccountService.changePassword(this.createform());
        if (keep.data == "Change password success!") {
          this.$refs.modal.open();
          this.oldpassword = "";
          this.newpassword = "";
          this.error = null
        }else{
          this.error=keep.data
        }
        console.log(keep);
      } catch (err) {
        console.log(err);
      }
    },
    createform() {
      let form = new FormData();
      form.append("password", this.oldpassword);
      form.append("newpassword", this.newpassword);
      return form;
    },
    async logout() {
      await AccountService.Logout();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
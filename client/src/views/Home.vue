<template >
  <v-app>
    <v-main fluid class="bg">
      <Mainbar v-show="!admin" />
      <Adminbar v-show="admin" />
      <Carousel />
      <p class="py-3"></p>
      <Recommend />
      <p class="py-5"></p>
      <Update />
      <p style="padding-bottom: 10%"></p>
      <Footer />
      <Profile_modal/>
    </v-main>
  </v-app>
</template>

<style>
.home_head {
  font-size: 30px;
  color: #ffffff;
  text-align: left;
  padding-left: 2%;
}
</style>

<script>
// @ is an alias to /src

import Mainbar from "../components/navbar/Mainbar.vue";
import Carousel from "../components/Carousel.vue";
import Update from "../components/Home_up.vue";
import Recommend from "../components/Home_recom.vue";
import Footer from "../components/Footer.vue";
import Adminbar from "../components/navbar/Adminbar.vue";

import AccountService from "../service/AccountService";
import Profile_modal from '../components/profile_modal.vue';

export default {
  name: "Home",
  components: {
    Mainbar,
    Carousel,
    Update,
    Recommend,
    Footer,
    Adminbar,
    Profile_modal
  },
  mounted() {
    this.getRole();
  },
  data: () => ({
    admin: false
  }),
  methods: {
    async getRole() {
      let keep = await AccountService.getSession();
      console.log(keep.data.type);
      if(keep.data.type == "STAFF"){
        this.admin = true
      }
    },
  },
};
</script>

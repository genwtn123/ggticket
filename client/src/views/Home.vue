<template>
  <div>
    <v-container>
      <Mainbar />
      <v-app>
        <div class="pt-12">
          <span style="font-size: 20px"><b>HOME</b></span>
        </div>
      </v-app>
    </v-container>
  </div>
</template>



<script>
// @ is an alias to /src

import Mainbar from "../components/navbar/Mainbar.vue";

import axios from "../../node_modules/axios";

export default {
  async created() {
    await axios
      .get(`http://localhost:12000/login`)
      .then((response) => {
        console.log(response.data)

      })
      .catch((err) => {
        console.log(err.response);
        this.$router.push({name:"Login"})
      });
  },
  name: "Home",
  components: {
    Mainbar,
  },
  data: () => ({}),
};
</script>

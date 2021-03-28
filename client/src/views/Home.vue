<template>
  <div>
    <v-container>
      <Mainbar/>
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
export default {
  name: "Home",
  components: {
    Mainbar,
  },
  data: () => ({}),
};
</script>

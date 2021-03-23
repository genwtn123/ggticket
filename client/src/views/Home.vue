<template>
  <div class="home">
    <v-container>
      <v-app>
        <Mainbar/>
        <div class="pt-12">
        <b style="color:red">Home</b>
        </div>
      </v-app>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

import Mainbar from '../components/navbar/Mainbar'
export default {
  name: "Home",
  components: {
    Mainbar
  },
  data: () => ({}),
};
</script>


<template>
  <div>
      <v-app>
            <v-main class="bg">
        <Mainbar/>
        <History/>
        <Footer />
            </v-main>
      </v-app>
  </div>
</template>

<style>

.bg {
      background-color: #222831;
      max-width: 100% !important;
    }
    

</style>

<script>

// @ is an alias to /src
import History from "../components/History.vue";
import Mainbar from "../components/navbar/Mainbar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    History,
    Mainbar,
    Footer
  },
  data: () => ({}),
};
</script>

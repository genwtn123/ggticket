<template>
  <div>
    <v-container>
      
      <v-app>
        <Mainbar/>
        <div class="">
          <BuyTicket/>
        </div>
      </v-app>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import BuyTicket from "../components/BuyTicket.vue";
import Mainbar from "../components/navbar/Mainbar.vue";

export default {
  components: {
    BuyTicket,
    Mainbar
  },
  data: () => ({}),
};
</script>

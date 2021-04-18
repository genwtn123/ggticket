<template>
  <div>
    <v-container>
      
      <v-app>
        <Mainbar/>
        <div class="">
          <BuyTicketInfo/>
        </div>
      </v-app>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import BuyTicketInfo from "../components/BuyTicketInfo.vue";
import Mainbar from "../components/navbar/Mainbar.vue";

export default {
  components: {
    BuyTicketInfo,
    Mainbar
  },
  data: () => ({}),
};
</script>

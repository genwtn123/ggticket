<template>
  <div>
    <v-container>
      <v-app>
        <div>
          <BuyTicket/>
        </div>
      </v-app>
    </v-container>
  </div>
</template>



<script>
// @ is an alias to /src

// import Mainbar from "../components/navbar/Mainbar.vue";
import BuyTicket from "../components/BuyTicket";

export default {
  name: "Buyticket",
  
  components: {
    // Mainbar,
    BuyTicket
  },
  data: () => ({}),
};
</script>

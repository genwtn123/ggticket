<template>
  <div>
      <v-app>
        <Mainbar/>
          <BuyTicket/>
      </v-app>
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

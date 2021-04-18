<template>
  <div>
    <v-container>
      
      <v-app>
        <Mainbar/>
        <div class="">
          <Promotion/>
        </div>
      </v-app>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Promotion from "../components/Promotion.vue";
import Mainbar from "../components/navbar/Mainbar.vue";

export default {
  components: {
    Promotion,
    Mainbar
  },
  data: () => ({}),
};
</script>

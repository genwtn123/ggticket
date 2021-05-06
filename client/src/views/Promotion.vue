<template>
  <div>
      <v-app>
        <Mainbar/>
          <Promotion/>
      </v-app>
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

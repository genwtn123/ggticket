<template>
  <div>
    <v-container>
      
      <v-app>
        <Mainbar/>
        <div class="">
          <Buyfood/>
          <Modal/>
        </div>
      </v-app>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Buyfood from "../components/Buyfood.vue";
import Mainbar from "../components/navbar/Mainbar.vue";
import Modal from "../components/Food_modal.vue";

export default {
  components: {
    Buyfood,
    Mainbar,
    Modal
  },
  data: () => ({}),
};
</script>

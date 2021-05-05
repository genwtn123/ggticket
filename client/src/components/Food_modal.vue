<template>
  <div class="modal" :class="{ 'is-active': isopen }">
    <div class="modal-background"></div>
    <div class="modal-card" >
      <header
        class="modal-card-head has-background-black"
        style="border-style: hidden"
      >
        <span class="modal-card-title pl-3 py-1" style="text-align: left"
          ><img src="../assets/Logo.png" class="logo_card"
        /></span>
        <button
          class="delete"
          aria-label="close"
          @click="isopen = flase"
        ></button>
      </header>

      <section class="modal-card-body profile_modal">
        <p
          class="regis_txt pb-3"
          style="text-decoration: none; font-size: 30px"
        >
          Add Food
        </p>
        <div class="columns">
          <div class="column is-2" style="text-align: right">
            <p class="profile_modal_txt py-2">Picture :</p>
            <p class="profile_modal_txt py-4">Name :</p>
            <p class="profile_modal_txt py-4">Price :</p>
            <p class="profile_modal_txt py-4">Stock :</p>
          </div>

          <div class="column pr-6">
            <v-file-input truncate-length="15"
            label="picture"
             rounded
              dense
              solo>
                
            </v-file-input>

            <v-text-field
              v-model="name"
              label="name"
              rounded
              dense
              solo
            ></v-text-field>

            <v-text-field
              v-model="price"
              label="price"
              rounded
              dense
              solo
            ></v-text-field>

            <v-text-field
              v-model="stock"
              label="stock"
              rounded
              dense
              solo
            ></v-text-field>
          </div>
        </div>
      </section>

      <footer
        class="modal-card-foot has-background-black"
        style="border-style: hidden"
      >
        <div style="margin: auto">
          <button
            style="
              background-color: #fd7014;
              border-style: hidden;
              color: white;
            "
            class="button mx-3"
          >
            ADD
          </button>
          <button
            style="
              background-color: #222831;
              border-style: hidden;
              color: white;
            "
            class="button mx-3"
            @click="isopen = flase"
          >
            CANCEL
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  data() {
    return {
      isopen: true,
    };
  },
  methods: {},
};
</script>
<template>
  <div class="modal" :class="{ 'is-active': isopen }">
    <div class="modal-background"></div>
    <div class="modal-card" style="width:50%">
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
        <p class="regis_txt pb-3" style="text-decoration: none; font-size: 30px">
          Profile
        </p>
        <div class="columns">
          <div class="column is-4 pl-6">
            <img
              src="https://thumbnails.cbsig.net/_x/w370/CBS_Production_Entertainment_VMS/SOTR_SAlone_Poster_1400x2100.jpg"
              class="profile_image pb-2"
            />
            <div class="profile_modal_txt pb-1">Username</div>
            <div style="color:white; font-size:20px;">Role</div>
          </div>

          <div class="column is-2" style="text-align:right;">
            <p class="profile_modal_txt py-2">Name :</p>
            <p class="profile_modal_txt py-4">E-mail :</p>
            <p class="profile_modal_txt py-4">Tel :</p>
            <p class="profile_modal_txt py-4">Password :</p>
          </div>

          <div class="column pr-6">
            <v-text-field
              v-model="name"
              label="name"
              rounded
              dense
              solo
            ></v-text-field>

            <v-text-field
              v-model="mail"
              label="e-mail"
              rounded
              dense
              solo
            ></v-text-field>

            <v-text-field
              v-model="tel"
              label="Tel"
              rounded
              dense
              solo
            ></v-text-field>

            <div class="columns">
              <div class="column">
            <v-text-field
              v-model="password"
              label="password"
              rounded
              dense
              solo
            ></v-text-field>
            </div>
            <span class="column is-3 py-3"><button class="button" style="background-color: #fd7014;
              border-style: hidden;
              font-size:15px;
              color: white;">SAVE</button></span>
            </div>

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
            LOGOUT
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
            CLOSE
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
.logo_card {
  text-align: left;
  width: 170px;
  height: 30px;
}

.profile_modal {
  background-color: #222831 !important;
}

.profile_image {
  width: 65%;
  border-radius: 100%;
}

.profile_modal_txt {
  color: #a1a4a8;
}
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
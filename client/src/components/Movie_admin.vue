<template>
  <v-container>
    <div style="line-height: 32pt" class="columns">
      <div class="is-1 column">
        <div class="title_head">Movie</div>
        <div class="title_sub">ภาพยนต์</div>
      </div>
      <div class="column pt-5 pl-6 ml-6" style="text-align: left">
        <img
          style="width: 40px; height: 40px"
          src="../assets/plus.png"
          alt=""
          @click="add_isopen = true"
        />
      </div>
    </div>
    <hr />
    <div class="pt-6">
      <div class="columns pl-6" v-for="index in 2" :key="index">
        <div class="card admin_card mx-6 my-6" style="width:20%; height:430px" v-for="index in 5" :key="index">
          <figure class="image">
            <img style="height: 250px" :src="image" alt="Placeholder image" />
          </figure>
          <div class="card-content">
            <div style="font-size: 15px"><b style="color: #520c0c">Title : </b>Popcorn Salted Caramel Lemon</div>
            <div style="font-size: 15px"><b style="color: #520c0c">Movie length : </b> 140 นาที</div>
            <div style="font-size: 15px"><b style="color: #520c0c">Category : </b> Cartoon</div>
          </div>
          <footer class="card-footer" style="background-color: white">
            <div
              style="width: 50%; color: #fd7014"
              @click="edit_isopen = true"
              class="card-footer-item"
            >
              Edit
            </div>
            <div
              style="width: 50%; color: #fd7014"
              @click="delete_isopen = true"
              class="card-footer-item"
            >
              Delete
            </div>
          </footer>
        </div>
      </div>
    </div>

    <!-- add modal -->
    <div class="modal" :class="{ 'is-active': add_isopen }">
      <div class="modal-background"></div>
      <div class="modal-card modal-card_admin">
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
            @click="add_isopen = flase"
          ></button>
        </header>

        <section class="modal-card-body profile_modal">
          <p
            class="regis_txt pb-3"
            style="text-decoration: none; font-size: 30px"
          >
            Add Movie
          </p>
          <div class="columns">
            <div class="column is-3" style="text-align: right">
              <p class="profile_modal_txt py-2">Picture :</p>
              <p class="profile_modal_txt py-4">Tittle :</p>
              <p class="profile_modal_txt py-4">Movie Length :</p>
              <p class="profile_modal_txt py-4">Category :</p>
            </div>

            <div class="column pr-6 is-8">
              <v-file-input
                truncate-length="15"
                label="picture"
                rounded
                dense
                solo
              >
              </v-file-input>

              <v-text-field
                v-model="tittle"
                label="tittle"
                rounded
                dense
                solo
              ></v-text-field>

              <v-text-field
                v-model="length"
                label="movie length"
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
              @click="add_isopen = flase"
            >
              CANCEL
            </button>
          </div>
        </footer>
      </div>
    </div>
    <!-- add modal -->

    <!-- edit modal -->
    <div class="modal" :class="{ 'is-active': edit_isopen }">
      <div class="modal-background"></div>
      <div class="modal-card modal-card_admin">
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
            @click="edit_isopen = flase"
          ></button>
        </header>

        <section class="modal-card-body profile_modal">
          <p
            class="regis_txt pb-3"
            style="text-decoration: none; font-size: 30px"
          >
            Edit Movie
          </p>
          <div class="columns">
            <div class="column is-3" style="text-align: right">
              <p class="profile_modal_txt py-2">Picture :</p>
              <p class="profile_modal_txt py-4">Tittle :</p>
              <p class="profile_modal_txt py-4">Movie Length :</p>
              <p class="profile_modal_txt py-4">Category :</p>
            </div>

            <div class="column pr-6 is-8">
              <v-file-input
                truncate-length="15"
                label="picture"
                rounded
                dense
                solo
              >
              </v-file-input>

              <v-text-field
                v-model="tittle"
                label="tittle"
                rounded
                dense
                solo
              ></v-text-field>

              <v-text-field
                v-model="length"
                label="movie length"
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
              EDIT
            </button>
            <button
              style="
                background-color: #222831;
                border-style: hidden;
                color: white;
              "
              class="button mx-3"
              @click="edit_isopen = flase"
            >
              CANCEL
            </button>
          </div>
        </footer>
      </div>
    </div>
    <!-- edit modal -->

    <!-- delete modal -->
    <div class="modal" :class="{ 'is-active': delete_isopen }">
      <div class="modal-background"></div>
      <div class="modal-card">
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
            @click="delete_isopen = flase"
          ></button>
        </header>
        <section class="modal-card-body profile_modal">
          <div style="font-size: 20px; text-align: center; color: white">
            Are you sure that you want to delete ?
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
              class="button mx-3 px-6"
            >
              OK
            </button>
            <button
              style="
                background-color: #222831;
                border-style: hidden;
                color: white;
              "
              class="button mx-3"
              @click="delete_isopen = flase"
            >
              CANCEL
            </button>
          </div>
        </footer>
      </div>
    </div>
    <!-- delete modal -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      image:
        "https://m.media-amazon.com/images/M/MV5BOGYxYzZkMWQtNjJkMy00NTlkLWExNWMtOTNhMTg4MDcxNmU3XkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_.jpg",
      add_isopen: false,
      edit_isopen: false,
      delete_isopen: false,
    };
  },
  methods: {},
};
</script>

<style>

</style>
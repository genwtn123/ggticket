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
          @click="addopen"
        />
      </div>
    </div>
    <hr />

    <div class="is-multiline columns">
      <div
        v-for="movie in movie"
        :key="movie.movie_id"
        class="column is-one-quarter mt-5"
      >
        <div class="card admin_card mx-6 my-6">
          <figure class="image">
            <img
              v-bind:src="imagePath(movie.movie_image)"
              style="height: 250px"
              alt="Placeholder image"
            />
          </figure>
          <div class="card-content">
            <div style="font-size: 15px">
              <b style="color: #520c0c">Title : </b>{{ movie.movie_name }}
            </div>
            <div style="font-size: 15px">
              <b style="color: #520c0c">Movie length : </b
              >{{ movie.movie_length }} นาที
            </div>
            <div style="font-size: 15px">
              <b style="color: #520c0c">Category : </b> {{ movie.movie_type }}
            </div>
          </div>
          <footer class="card-footer" style="background-color: white">
            <div
              style="width: 50%; color: #fd7014"
              @click="edit(movie.movie_id)"
              class="card-footer-item"
            >
              Edit
            </div>
            <div
              style="width: 50%; color: #fd7014"
              @click="remove(movie.movie_id)"
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
          <button class="delete" aria-label="close" @click="addc"></button>
        </header>

        <section class="modal-card-body profile_modal">
          <p
            class="regis_txt pb-3"
            style="text-decoration: none; font-size: 30px"
          >
            Add Movie
          </p>
          <div class="columns">
            <div class="column is-5">
              <v-date-picker
                v-model="time"
                header-color="#fd7014"
                color="#fd7014"
              ></v-date-picker>
            </div>
            <div class="column is-3" style="text-align: right">
              <p class="profile_modal_txt py-2">Picture :</p>
              <p class="profile_modal_txt py-4">Title :</p>
              <p class="profile_modal_txt py-4">Movie Length :</p>
              <p class="profile_modal_txt py-4">Category :</p>
              <p class="profile_modal_txt py-4">Movie Language :</p>
            </div>

            <div class="column pr-6 is-4">
              <v-form ref="addform">
                <v-file-input
                  v-model="pic"
                  truncate-length="15"
                  label="picture"
                  rounded
                  dense
                  solo
                  :rules="[() => !!pic || 'This field is required']"
                >
                </v-file-input>

                <v-text-field
                  v-model="title"
                  label="title"
                  rounded
                  dense
                  solo
                  :rules="[() => !!title || 'This field is required']"
                ></v-text-field>

                <v-text-field
                  v-model="length"
                  label="movie length"
                  rounded
                  dense
                  solo
                  :rules="movierule"
                ></v-text-field>

                <v-text-field
                  v-model="type"
                  label="Category"
                  rounded
                  dense
                  solo
                  :rules="[() => !!type || 'This field is required']"
                ></v-text-field>

                <v-text-field
                  v-model="lang"
                  label="(TH,ENG,KR,ETC..)"
                  rounded
                  dense
                  solo
                  :rules="[() => !!lang || 'This field is required']"
                ></v-text-field>
              </v-form>
            </div>
          </div>
        </section>

        <footer
          class="modal-card-foot has-background-black"
          style="border-style: hidden"
        >
          <div style="margin: auto">
            <button
              @click="createmovie"
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
              @click="addc"
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
          <button class="delete" aria-label="close" @click="editc"></button>
        </header>

        <section class="modal-card-body profile_modal">
          <p
            class="regis_txt pb-3"
            style="text-decoration: none; font-size: 30px"
          >
            Add Movie
          </p>
          <div class="columns">
            <div class="column is-5">
              <v-date-picker
                v-model="time"
                header-color="#fd7014"
                color="#fd7014"
              ></v-date-picker>
            </div>
            <div class="column is-3" style="text-align: right">
              <p class="profile_modal_txt py-2">Picture :</p>
              <p class="profile_modal_txt py-4">Title :</p>
              <p class="profile_modal_txt py-4">Movie Length :</p>
              <p class="profile_modal_txt py-4">Category :</p>
              <p class="profile_modal_txt py-4">Movie Language :</p>
            </div>

            <div class="column pr-6 is-4">
              <v-form ref="editform">
                <v-file-input
                  v-model="pic"
                  truncate-length="50"
                  label="picture"
                  rounded
                  dense
                  solo
                  :rules="[() => !!pic || 'This field is required']"
                >
                </v-file-input>

                <v-text-field
                  v-model="title"
                  label="title"
                  rounded
                  dense
                  solo
                  :rules="[() => !!title || 'This field is required']"
                ></v-text-field>

                <v-text-field
                  v-model="length"
                  label="movie length"
                  rounded
                  dense
                  solo
                  :rules="movierule"
                ></v-text-field>

                <v-text-field
                  v-model="type"
                  label="Category"
                  rounded
                  dense
                  solo
                  :rules="[() => !!type || 'This field is required']"
                ></v-text-field>

                <v-text-field
                  v-model="lang"
                  label="(TH,ENG,KR,ETC..)"
                  rounded
                  dense
                  solo
                  :rules="[() => !!lang || 'This field is required']"
                ></v-text-field>
              </v-form>
            </div>
          </div>
        </section>

        <footer
          class="modal-card-foot has-background-black"
          style="border-style: hidden"
        >
          <div style="margin: auto">
            <button
              @click="editmovie"
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
              @click="editc"
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
          <button class="delete" aria-label="close" @click="deletec"></button>
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
              @click="removemovie"
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
              @click="deletec"
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
import MovieService from "../service/MovieService";
import axios from "axios";
export default {
  mounted() {
    this.getMovie();
  },
  data() {
    return {
      image:
        "https://m.media-amazon.com/images/M/MV5BOGYxYzZkMWQtNjJkMy00NTlkLWExNWMtOTNhMTg4MDcxNmU3XkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_.jpg",
      add_isopen: false,
      edit_isopen: false,
      delete_isopen: false,
      movie: [],
      keep_index: 0,
      title: "",
      type: "",
      length: "",
      pic: null,
      time: "",
      lang: "",
      today: "",
      movierule: [
        (v) => !!v || "This field is required",
        (v) => /[0-9]+/.test(v) || "Please input number",
      ],
    };
  },
  methods: {
    editc() {
      this.$refs.editform.resetValidation();
      this.title = "";
      this.type = "";
      this.length = "";
      this.pic = null;
      this.lang = "";
      this.edit_isopen = false;
    },
    deletec() {
      this.title = "";
      this.type = "";
      this.length = "";
      this.pic = null;
      this.lang = "";
      this.delete_isopen = false;
    },
    addc() {
      this.$refs.addform.resetValidation();
      this.title = "";
      this.type = "";
      this.length = "";
      this.pic = null;
      this.lang = "";
      this.add_isopen = false;
    },
    async edit(index) {
      this.time = this.today;
      this.edit_isopen = true;
      this.keep_index = index;
      this.getMovie();
      for (var movie of this.movie) {
        this.test = movie;
        if (movie.movie_id == index) {
          this.title = movie.movie_name;
          this.type = movie.movie_type;
          this.length = movie.movie_length;
          this.lang = movie.movie_language;
          this.time = movie.movie_releasetime.substring(0, 10);
          let config = { responseType: "blob" };
          let result = await axios.get(
            "http://localhost:12000/" + movie.movie_image,
            config
          );
          this.pic = new File([result.data], "Click to change picture");
        }
      }
    },
    remove(index) {
      this.delete_isopen = true;
      this.keep_index = index;
    },
    async removemovie() {
      await MovieService.delMovie(this.keep_index);
      this.delete_isopen = false;
      this.getMovie();
    },
    createAddForm: function () {
      // new Movie(null, req.body.movie_name, req.body.movie_type, 0,
      // req.body.movie_length, req.file.path, req.body.movie_status,
      // req.body.staff_id, req.body.movie_releasetime, req.body.movie_language)
      let form = new FormData();
      form.append("movie_name", this.title);
      form.append("movie_type", this.type);
      form.append("movie_length", this.length);
      form.append("movie_image", this.pic);
      form.append("movie_status", 1);
      form.append("movie_releasetime", this.time);
      form.append("movie_language", this.lang);
      return form;
    },
    createEditForm: function () {
      let form = new FormData();
      form.append("movie_name", this.title);
      form.append("movie_type", this.type);
      form.append("movie_length", this.length);
      form.append("movie_image", this.pic);
      form.append("movie_status", 1);
      form.append("movie_releasetime", this.time);
      form.append("movie_language", this.lang);
      return form;
    },
    async createmovie() {
      if (this.$refs.addform.validate()) {
        try {
          var result = await MovieService.createmovie(this.createAddForm());
          console.log("res", result.status);
          console.log("success by vuejs");
          alert("Success");
          this.$refs.addform.resetValidation();
          this.$refs.editform.resetValidation();
          this.getMovie();
          this.title = "";
          this.detail = "";
          this.pic = null;
          this.time = "";
          this.lang = "";
          this.add_isopen = false;
        } catch (err) {
          console.log(err);
        }
      }
    },
    async editmovie() {
      if (this.$refs.editform.validate()) {
        try {
          var result = await MovieService.editmovie(
            this.createEditForm(),
            this.keep_index
          );
          console.log("res", result.status);
          console.log("success by vuejs");
          alert("Success");
          this.$refs.addform.resetValidation();
          this.$refs.editform.resetValidation();
          this.getMovie();
          this.title = "";
          this.detail = "";
          this.pic = null;
          this.time = "";
          this.lang = "";
          this.edit_isopen = false;
        } catch (err) {
          console.log(err);
        }
      }
    },
    async getMovie() {
      try {
        let keep = await MovieService.getMovie();
        console.log(keep);
        this.movie = keep.data;
        var today = new Date();
        this.today =
          today.getFullYear() +
          "-" +
          String(today.getMonth() + 1).padStart(2, "0") +
          "-" +
          String(today.getDate()).padStart(2, "0");
      } catch (err) {
        console.log(err);
      }
    },
    imagePath(file_path) {
      if (file_path) {
        return "http://localhost:12000/" + file_path;
      } else {
        return "https://bulma.io/images/placeholders/640x360.png";
      }
    },
    addopen() {
      this.$refs.addform.resetValidation();
      this.time = this.today;
      this.add_isopen = true;
    },
  },
};
</script>

<style>
</style>

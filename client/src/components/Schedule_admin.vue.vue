<template>
  <v-container>
    <div style="line-height: 32pt" class="columns">
      <div class="column is-4" style="width: 240px">
        <div class="title_head">Movie Table</div>
        <div class="title_sub">ตารางเวลาภาพยนต์</div>
      </div>
      <div class="column pt-5" style="text-align: left">
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
      <div class="buttons are-medium">
        <v-btn id="button_date" color="black" dark v-bind="attrs"> Date </v-btn>
        <v-btn id="button_day" color="black" dark v-bind="attrs" v-for="date in dates" :key="date" @click="choose_date = date">
          {{date.substring(8, 10)}}-{{month[date.substring(5, 7)]}}-{{date.substring(0, 4)}}
        </v-btn>
      </div>

      <div class="is-multiline columns is-variable is-2 mt-5">
        <div id="topic" class="column is-one-quarter"></div>
        <div id="topic" class="column">
          <p>Movie</p>
        </div>
        <div id="topic" class="column">
          <p>Theater</p>
        </div>
        <div id="topic" class="column">
          <p>Time</p>
        </div>
        <div id="topic" class="column">
          <p>Languge</p>
        </div>
      </div>
      <span v-for="showtime in showtimes" :key="showtime.showtime_no">
        <span v-if="showtime.time_start.substring(0, 10) == choose_date">
        <div
          id="border"
          class="is-multiline columns is-variable is-2"
          @click="edit_isopen = true"
          style="height: 180px"
        >
          <div class="column is-one-quarter">
            <img id="img" v-bind:src="movie_image" alt="Placeholder image" />
          </div>
          <div class="column">
            <p class="shecdule_admin_card_detail">{{showtime.movie_name}}</p>
          </div>
          <div class="column">
            <p class="shecdule_admin_card_detail">{{showtime.theater_name}}</p>
          </div>
          <div class="column">
            <p class="shecdule_admin_card_detail">{{showtime.time_start.substring(11, 16)}} - {{showtime.time_finish.substring(11, 16)}}</p>
          </div>
          <div class="column">
            <p class="shecdule_admin_card_detail">{{showtime.movie_language}}</p>
          </div>
        </div>
        <div id="bot_set" class="is-multiline columns pb-6">
          <p id="detail_bot_topic">Category</p>

          <p id="detail_bot_info">{{showtime.movie_type}}</p>

          <p id="detail_bot_topic">Movie length</p>

          <p id="detail_bot_info">{{showtime.movie_length}} นาที</p>
        </div>
     </span> 
     </span>
    </div>
    

    <!-- add modal -->
    <div class="modal" :class="{ 'is-active': add_isopen }">
      <div class="modal-background"></div>
      <div class="modal-card modal-card_admin" style="width: 65%">
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
            class="regis_txt pt-3 pb-4"
            style="text-decoration: none; font-size: 30px"
          >
            Add Movie
          </p>
          <div class="columns">
            <div class="column is-5">
              <v-date-picker
                v-model="picker"
                header-color="#fd7014"
                color="#fd7014"
              ></v-date-picker>
            </div>

            <div
              class="column is-2"
              style="text-align: right; padding-top: 3.6%"
            >
              <p class="profile_modal_txt py-2">Movie :</p>
              <p class="profile_modal_txt py-4">Time Start :</p>
              <p class="profile_modal_txt py-4">Time End :</p>
              <p class="profile_modal_txt py-4">Theater :</p>
              <p class="profile_modal_txt py-4">Language :</p>
            </div>

            <div class="column is-4 pt-6">
              <v-select
                v-model="movie"
                :items="all_movie"
                label="movie"
                required
                rounded
                dense
                solo
                class="pt-3"
              ></v-select>

              <v-banner
                elevation="18"
                class="input_box mb-6"
                style="text-align: left"
              >
                <input type="time" min="" max="" />
              </v-banner>

              <v-banner
                elevation="18"
                class="input_box mb-6"
                style="text-align: left"
              >
                <input type="time" min="" max="" />
              </v-banner>

              <v-select
                v-model="theater"
                :items="all_theater"
                label="theater"
                required
                rounded
                dense
                solo
                class="pt-3"
              ></v-select>

              <v-text-field
                v-model="language"
                label="language"
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
      <div class="modal-card modal-card_admin" style="width: 65%">
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
            <div class="column is-5">
              <v-date-picker
                v-model="picker"
                header-color="#fd7014"
                color="#fd7014"
              ></v-date-picker>
            </div>

            <div
              class="column is-2"
              style="text-align: right; padding-top: 3.6%"
            >
              <p class="profile_modal_txt py-2">Movie :</p>
              <p class="profile_modal_txt py-4">Time Start :</p>
              <p class="profile_modal_txt py-4">Time End :</p>
              <p class="profile_modal_txt py-4">Theater :</p>
              <p class="profile_modal_txt py-4">Language :</p>
            </div>

            <div class="column is-4 pt-6">
              <v-select
                v-model="movie"
                :items="all_movie"
                label="movie"
                required
                rounded
                dense
                solo
                class="pt-3"
              ></v-select>

              <v-banner
                elevation="18"
                class="input_box mb-6"
                style="text-align: left"
              >
                <input type="time" min="" max="" />
              </v-banner>

              <v-banner
                elevation="18"
                class="input_box mb-6"
                style="text-align: left"
              >
                <input type="time" min="" max="" />
              </v-banner>

              <v-select
                v-model="theater"
                :items="all_theater"
                label="theater"
                required
                rounded
                dense
                solo
                class="pt-3"
              ></v-select>

              <v-text-field
                v-model="language"
                label="language"
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
              @click="delete_isopen = true"
            >
              DELETE
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
import ShowtimeAdmin from "../admin/ShowtimeAdmin";
export default {
  mounted(){
    this.getShowtime();
  },
  data() {
    return {
      add_isopen: false,
      edit_isopen: false,
      delete_isopen: false,
      picker: new Date().toISOString().substr(0, 10),
      all_movie: ["Sponbob", "Conan"],
      all_theater: ["1", "2"],
      showtimes: [],
      dates: [],
      month : [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      choose_date: 0
    };
  },
  methods: {
    async getShowtime(){
      try {
        let keep = await ShowtimeAdmin.getShowtime();
        console.log(keep);
        this.showtimes = keep.data
        this.showtimes.forEach(showtime => {
          let d = showtime.time_start.substring(0, 10)
          !this.dates.includes(d) ? this.dates.push(d) : 0
          this.choose_date = this.dates[0]
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>

<style>
.shecdule_admin_card_detail {
  color: white;
  font-size: 25px;
  padding-top: 25%;
}

.input_box {
  background-color: white !important;
  width: 100%;
  height: 35px;
  border-radius: 60px !important;
}
</style>
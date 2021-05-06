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
        <v-btn id="button_date" color="black" class="mb-3" dark> Date </v-btn>
        <v-btn
          id="button_day"
          color="black"
          dark
          v-for="date in dates"
          :key="date"
          @click="choose_date = date"
          class="mb-3"
        >
          {{ date.substring(8, 10) }}-{{
            month[parseInt(date.substring(5, 7))]
          }}-{{ date.substring(0, 4) }}
        </v-btn>
      </div>

      <div class="is-multiline columns is-variable is-2 mt-1">
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
            style="height: 180px"
            @click="delete_isopen = [true, showtime]"
          >
            <div class="column is-one-quarter">
              <img
                id="img"
                v-bind:src="imagePath(showtime.movie_image)"
                alt="Placeholder image"
              />
            </div>
            <div class="column">
              <p class="shecdule_admin_card_detail">
                {{ showtime.movie_name }}
              </p>
            </div>
            <div class="column">
              <p class="shecdule_admin_card_detail">
                {{ showtime.theater_name }}
              </p>
            </div>
            <div class="column">
              <p class="shecdule_admin_card_detail">
                {{ showtime.time_start.substring(11, 16) }} -
                {{ showtime.time_finish.substring(11, 16) }}
              </p>
            </div>
            <div class="column">
              <p class="shecdule_admin_card_detail">
                {{ showtime.movie_language }}
              </p>
            </div>
          </div>
          <div id="bot_set" class="is-multiline columns pb-6">
            <p id="detail_bot_topic">Category</p>

            <p id="detail_bot_info">{{ showtime.movie_type }}</p>

            <p id="detail_bot_topic">Movie length</p>

            <p id="detail_bot_info">{{ showtime.movie_length }} นาที</p>
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
            @click="
              add_isopen = false;
            "
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
                v-model="picker_addDate"
                header-color="#fd7014"
                color="#fd7014"
                :min="today"
              ></v-date-picker>
            </div>

            <div
              class="column is-2"
              style="text-align: right; padding-top: 3.6%"
            >
              <p class="profile_modal_txt py-3">Movie :</p>
              <p class="profile_modal_txt py-5">Time Start :</p>
              <p class="profile_modal_txt py-6">Time End :</p>
              <p class="profile_modal_txt py-4">Theater :</p>
              <!-- <p class="profile_modal_txt py-4">Language :</p> -->
            </div>

            <div class="column is-4 pt-6">
              <v-select
                v-model="add_movie"
                :items="all_movie_name"
                label="movie"
                :rules="[() => !!add_movie || 'This field is required']"
                required
                rounded
                dense
                solo
                class="pt-3 pb-2"
              ></v-select>

              <v-text-field
                label="Time start"
                required
                rounded
                dense
                solo
                type="time"
                suffix="PST"
                v-model="add_timeStart"
                :rules="[() => !!add_timeStart || 'This field is required']"
              ></v-text-field>
              <span style="color:red; font-size:13px" v-if="add_timeEnd < add_timeStart">Time end must be greater than time start</span>
              <div v-else class="pb-3"></div>
              <v-text-field
                label="Time End"
                required
                rounded
                dense
                solo
                type="time"
                suffix="PST"
                :rules="[() => !!add_timeEnd || 'This field is required']"
                v-model="add_timeEnd"
              ></v-text-field>
              

              <v-select
                v-model="add_theater"
                :items="all_theater_name"
                label="theater"
                required
                rounded
                dense
                solo
                class="pt-3"
                :rules="[() => !!add_theater || 'This field is required']"
              ></v-select>

              <!-- <v-text-field
                v-model="add_language"
                label="language"
                rounded
                dense
                solo
              ></v-text-field> -->

              <!-- <label class="checkbox" style="color: #9d9fa3">
                <input type="checkbox" v-model="add_status" />
                Status
              </label> -->
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
              @click="addShowtime"
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
              @click="add_isopen = false;"
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
            @click="edit_isopen = false"
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
                v-model="picker_editDate"
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
              <!-- <p class="profile_modal_txt py-4">Language :</p> -->
            </div>

            <div class="column is-4 pt-6">
              <v-select
                v-model="val"
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
                <input type="time" min="" max="" v-model="edit_timeStart" />
              </v-banner>

              <v-banner
                elevation="18"
                class="input_box mb-6"
                style="text-align: left"
              >
                <input type="time" min="" max="" v-model="edit_timeEnd" />
              </v-banner>

              <v-select
                v-model="edit_theater"
                :items="all_theater"
                label="theater"
                required
                rounded
                dense
                solo
                class="pt-3"
              ></v-select>

              <!-- <v-text-field
                v-model="language"
                label="language"
                rounded
                dense
                solo
              ></v-text-field> -->
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
              @click="delete_isopen = [true]"
            >
              DELETE
            </button>
          </div>
        </footer>
      </div>
    </div>
    <!-- edit modal -->

    <!-- delete modal -->
    <div class="modal" :class="{ 'is-active': delete_isopen[0] }">
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
            @click="delete_isopen = [false, '']"
          ></button>
        </header>
        <section class="modal-card-body profile_modal">
          <div style="font-size: 20px; text-align: center; color: white">
            Are you sure that you want to delete
            <p style="color: red">
              " Showtime_no {{ delete_isopen[1].showtime_no }} " ?
            </p>
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
              @click="delShowtime()"
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
              @click="delete_isopen = [false, '']"
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
import MovieService from "../service/MovieService";
import TheaterService from "../service/TheaterService";
export default {
  mounted() {
    this.getShowtime();
  },
  data() {
    return {
      add_isopen: false,
      edit_isopen: false,
      delete_isopen: [false, ""],
      all_movie: [],
      all_movie_name: [],
      all_theater: [],
      all_theater_name: [],
      showtimes: [],
      dates: [],
      month: [
        null,
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      picker_addDate: new Date().toISOString().substr(0, 10),
      add_movie: "",
      add_theater: "",
      // add_language: "",
      choose_date: 0,
      add_timeStart: 0,
      add_timeEnd: 0,
      add_status: true,
      all: [],
      new: [],
      today: "",
      picker_editDate: new Date().toISOString().substr(0, 10),
      edit_movie: "",
      edit_theater: "",
      // edit_language: "",
      edit_timeStart: 0,
      edit_timeEnd: 0,
      edit_status: false,
      val: [],
      // save: [],
      // name: "",
      errorMessages: '',
      formHasErrors: false,
    };
  },

  // computed: {
  //     form () {
  //       return {
  //         movie: this.add_movie,
  //         time_start: this.add_timeStart,
  //         time_end: this.add_timeEnd,
  //         theater: this.add_theater,
  //       }
  //     }
  //   },

  methods: {
    async getShowtime() {
      try {
        let keep = await ShowtimeAdmin.getShowtime();
        let keep2 = await TheaterService.getAllTheater();
        let keep3 = await MovieService.getMovie();
        this.all = keep.data;
        this.showtimes = keep.data;
        this.showtimes.forEach((showtime) => {
          let d = showtime.time_start.substring(0, 10);
          !this.dates.includes(d) ? this.dates.push(d) : 0;
          this.choose_date = this.dates[0];
        });

        keep3.data.forEach((movie) => {
          this.all_movie.push(movie);
        });
        keep3.data.forEach((movie) => {
          this.all_movie_name.push(movie.movie_name);
        });

        keep2.data.forEach((theater) => {
          this.all_theater_name.push(theater.theater_name);
        });

        keep2.data.forEach((theater) => {
          this.all_theater.push(theater);
        });

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

    createForm: function () {
      let form = new FormData();
      let start = this.picker_addDate + " " + this.add_timeStart + ":00";
      let end = this.picker_addDate + " " + this.add_timeEnd + ":00";
      let mid = "";
      let tid = "";
      this.all_movie.forEach((movie) => {
        if (movie.movie_name == this.add_movie) {
          mid = movie.movie_id;
          this.new.push(movie.movie_language);
          this.new.push(movie.movie_length);
          this.new.push(movie.movie_name);
          this.new.push(movie.movie_type);
          this.new.push(movie.movie_image);
        }
      });
      this.all_theater.forEach((theater) => {
        console.log(theater.theater_name, this.add_theater);
        if (theater.theater_name == this.add_theater) {
          tid = theater.theater_id;
          console.log(tid, "tid");
          this.new.push(theater.theater_name);
        }
      });
      form.append("time_start", start);
      form.append("time_finish", end);
      form.append("showtime_status", this.add_status ? 1 : 0);
      form.append("movie_id", mid);
      form.append("staff_id", 1);
      form.append("theater_id", parseInt(tid));
      this.new.push(start);
      this.new.push(end);
      this.new.push(this.add_status);
      console.log(form);
      return form;
    },
    async addShowtime() {
      if (
        this.add_timeStart == "" ||
        this.add_timeEnd == "" ||
        this.add_theater == "" ||
        this.add_movie == "" ||
        this.picker_addDate == ""
      ) {
        alert("pls put all information");
      } else if (this.add_timeEnd > this.add_timeStart) {
        var result = await ShowtimeAdmin.addShowtime(this.createForm());
        console.log("res", result);
        if (result.data.details == undefined) {
          alert("Success");
          this.getShowtime();
          // let val = this.new;
          // this.showtimes.push({
          //   movie_language: val[0],
          //   movie_length: val[1],
          //   movie_name: val[2],
          //   movie_type: val[3],
          //   movie_image: val[4],
          //   theater_name: val[5],
          //   time_finish: val[7],
          //   time_start: val[6],
          //   showtime_status: val[8],
          // });
          // let check = false
          // if (!this.dates.includes(this.picker_addDate)) {
          //   this.dates.forEach((element, index) => {
          //     if(element > this.picker_addDate && index == 0){
          //       this.dates.splice(0, 0, this.picker_addDate);
          //       check = true;
          //     }
          //     else if (element > this.picker_addDate && this.dates[index - 1] < this.picker_addDate) {
          //       this.dates.splice(index, 0, this.picker_addDate);
          //       check = true;
          //     }
          //   });
          // }

          // if(check == false){
          //   this.dates.push(this.picker_addDate)
          // }
          // console.log(this.dates);
          // console.log(this.showtimes)
          this.add_movie = "";
          this.add_theater = "";
          // this.add_language = "";
          this.add_timeStart = 0;
          this.add_timeEnd = 0;
          this.add_status = true;
          this.add_isopen = false;
          this.picker_addDate = new Date().toISOString().substr(0, 10);
          this.new = [];
          this.getShowtime();
        } else {
          alert(result.data.details.message);
        }
      } else {
        alert(
          "Time End must be greater with Time start \n Your time Strat: " +
            this.add_timeStart +
            "\n Your time end: " +
            this.add_timeEnd
        );
      }
    },
    imagePath(file_path) {
      if (file_path) {
        return "http://localhost:12000/" + file_path;
      } else {
        return "https://bulma.io/images/placeholders/640x360.png";
      }
    },

    //     edit_modal(showtime){
    //       this.edit_isopen = true
    //       this.save = showtime
    //       console.log(showtime)
    //       this.val = {"movie_id": showtime.movie_id, "movie_image": showtime.movie_image, "movie_language": showtime.movie_language,
    //  "movie_length": showtime.movie_length, "movie_name": showtime.movie_name, "movie_releasetime": showtime.movie_releasetime, "movie_status": showtime.movie_status, "movie_type": showtime.movie_type,
    //   "showtime_no": showtime.showtime_no, "showtime_status": showtime.showtime_status, "staff_id": showtime.staff_id, "theater_id": showtime.theater_id, "theater_name": showtime.theater_name,
    //   "theater_size": showtime.theater_size, "theater_status": showtime.theater_status, "time_finish": showtime.time_finish, "time_start": showtime.time_start, "viewer": showtime.viewer}

    //       this.name = showtime.showtime_no
    //     },

    edit() {
      this.showtimes.forEach((showtime, index) => {
        if (this.val.showtime_no == showtime.showtime_no)
          this.showtimes.splice(index, 1, this.val);
      });
      this.edit_isopen = false;
    },

    async delShowtime() {
      await ShowtimeAdmin.delShowtime(this.delete_isopen[1].showtime_no);
      this.delete_isopen = [false, ""];
      this.edit_isopen = false;
      this.dates = [];
      this.getShowtime();
    },

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
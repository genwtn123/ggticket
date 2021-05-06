<template>
  <div class="backgroundblack">
    <div class="backgroundgray">
      <div class="column spacetop ml-9 mr-9">
        <p class="movie_table_e">Movie</p>
        <p class="movie_table_t">กรุณาเลือก วันและเวลา ที่ต้องการ</p>
      </div>
      <div class="container is-max-desktop">
        <div class="is-multiline columns is-variable is-2 mt-5">
          <div id="img_theater">
            <img
              v-bind:src="imagePath(this.selectedmovie.movie_image)"
              alt="Placeholder image"
            />
          </div>
          <div id="border_movietable" class="column is-three-quarters">
            <div id="topic_head">
              <div class="is-multiline columns">
                <p id="topic_movie_c">Title</p>
                <p>{{ this.selectedmovie.movie_name }}</p>
              </div>
              <div class="is-multiline columns">
                <p id="topic_movie_c">Category</p>
                <p>{{ this.selectedmovie.movie_type }}</p>
              </div>
              <div class="is-multiline columns">
                <p id="topic_movie_c">Movie length</p>
                <p>{{ this.selectedmovie.movie_length }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="buttons are-medium">
          <v-btn id="button_date" color="black" dark @click="defaultDate()">
            All
          </v-btn>
          <v-btn
            id="button_day"
            color="black"
            dark
            v-for="date of this.date"
            :key="date"
            @click="keepdate(date)"
          >
            {{ date }}
          </v-btn>
        </div>

        <div class="is-multiline columns is-variable is-2 mt-5">
          <div id="topic" class="column is-one-quarter">
            <p>Movie</p>
          </div>
          <div id="topic" class="column">
            <p>Theater</p>
          </div>
          <div id="topic" class="column">
            <p>Time</p>
          </div>
          <div id="topic" class="column">
            <p>Date</p>
          </div>
          <div id="topic" class="column">
            <p>Languge</p>
          </div>
          <div id="topic" class="column"></div>
        </div>

        <div
          id="border_info"
          class="is-multiline columns is-variable is-2 mb-5"
          v-for="movie of this.movie"
          :key="movie.showtime_no"
          v-show="checkdate(movie.date)"
        >
          <div id="detail_start" class="column is-one-quarter pt-4">
            <p>{{ movie.movie_name }}</p>
          </div>
          <div id="detail_t" class="column">
            <p>{{ movie.theater_name }}</p>
          </div>
          <div id="detail_t" class="column">
            <p>{{ movie.start_time + " - " + movie.end_time }}</p>
          </div>
          <div id="detail_t" class="column">
            <p>{{ movie.date }}</p>
          </div>
          <div id="detail_end" class="column">
            <p>{{ movie.movie_language }}</p>
          </div>
          <div class="column mt-2">
            <v-btn
              x-large
              rounded
              elevation="24"
              color="#000000"
              dark
              @click="selectshow(movie)"
              :disabled="movie.start_time < currentTime() && movie.date <= currentDate()"
            >
              Choose
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheaterService from "../service/TheaterService";
// import axios from 'axios'
export default {
  data() {
    return {
      image:
        "https://m.media-amazon.com/images/M/MV5BOGYxYzZkMWQtNjJkMy00NTlkLWExNWMtOTNhMTg4MDcxNmU3XkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_.jpg",
      movie: [],
      keep: "",
      date: [],
      selectdate: "",
      selectedmovie: this.$store.getters.getmovie,
    };
  },
  mounted() {
    this.getTheater();
  },
  methods: {
    async getTheater() {
      console.log(this.currentTime())
      // if(this.$store.getters.getmovie == ""){
      //   this.$router.push({name:'Movie'})
      // }
      try {
        let keep = await TheaterService.getTheater();
        for (let movie of keep.data) {
          if (movie.movie_id == this.$store.getters.getmovieid) {
            movie.start_time = movie.time_start.match(/\d+:\d+/)[0];
            movie.end_time = movie.time_finish.match(/\d+:\d+/)[0];
            movie.date = movie.time_start.match(/.+(?=T)/)[0];
            this.movie.push(movie);
            let datecheck = true;
            for (let date of this.date) {
              if (movie.date === date) {
                datecheck = false;
              }
            }
            if (datecheck) {
              this.date.push(movie.date);
            }
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    defaultDate() {
      this.selectdate = "";
    },
    keepdate(date) {
      this.selectdate = date;
    },
    checkdate(date) {
      return date === this.selectdate || this.selectdate === "";
    },
    imagePath(file_path) {
      if (file_path) {
        return "http://localhost:12000/" + file_path;
      } else {
        return "https://bulma.io/images/placeholders/640x360.png";
      }
    },
    selectshow(movie) {
      this.$store.commit("keepshow", movie);
      this.$router.push({ name: "Seat" });
    },
    currentTime() {
      let today = new Date();
      let time = (today.getHours() > 9 ? today.getHours() : `0${today.getHours()}`) + ":" + (today.getMinutes() > 9 ? today.getMinutes() : `0${today.getMinutes()}`)
      return time;
    },
    currentDate() {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        ((today.getMonth() + 1) > 9 ? (today.getMonth() + 1) : "0"+(today.getMonth() + 1)) +
        "-" +
        (today.getDate() > 9 ? today.getDate() : "0"+today.getDate());
        return date
    },
  },

  computed: {},
};
</script>

<style >
.movie_table_t {
  font-size: 30px;
  color: #6f717b;
  text-align: left;
}
.movie_table_e {
  font-size: 40px;
  color: #dcdcdc;
  text-align: left;
}

#detail_start {
  margin-top: 1%;
  text-align: center;
  color: #dcdcdc;
  font-size: 20px;
  border-top: #dcdcdc 3px solid;
  border-bottom: #dcdcdc 3px solid;
  border-left: #dcdcdc 3px solid;
}
#detail_end {
  margin-top: 1%;
  text-align: center;
  color: #dcdcdc;
  font-size: 20px;
  border-top: #dcdcdc 3px solid;
  border-bottom: #dcdcdc 3px solid;
  border-right: #dcdcdc px solid;
}
#detail_t {
  margin-top: 1%;
  text-align: center;
  color: #dcdcdc;
  font-size: 20px;
  border-top: #dcdcdc 3px solid;
  border-bottom: #dcdcdc 3px solid;
}
#border_info {
  margin-top: 25px;
}
#border_movietable {
  border: #dcdcdc 2px solid;
  margin-bottom: 5%;
  margin-top: 1%;
}
#topic_head {
  margin-top: 3%;
  margin-left: 15%;
  font-size: 25px;
  color: #dcdcdc;
}
#topic {
  text-align: center;
  color: #dcdcdc;
  font-size: 25px;
  background-color: #ff7810;
  height: 50px;
}
#img_theater {
  width: 160px;
  margin-left: 3%;
  margin-right: 4%;
}
#topic_movie_c {
  width: 50%;
  text-align: left;
}
#botton_choose {
  margin-top: 2%;
  margin-left: 5%;
  font-size: 20px;
  width: 15%;
}
</style>

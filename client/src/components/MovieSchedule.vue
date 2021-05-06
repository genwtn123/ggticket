<template>
  <div class="backgroundblack">
    <div class="backgroundgray">
      <div class="column spacetop ml-9 mr-9">
        <p class="movie_table_e">Movie Schedule</p>
        <p class="movie_table_t">ตารางเวลาภาพยนตร์</p>
      </div>
      

      <div class="container is-max-desktop">
        <div class="buttons are-medium">
          <v-btn id="button_date" color="black" dark  @click="defaultDate()"> All </v-btn>
          <v-btn id="button_day" color="black" dark  v-for="date in dates" :key="date" @click="keepdate(date.substring(0, 10))"> {{date.substring(8, 10)}}-{{date.substring(5, 7)}}-{{date.substring(0, 4)}} </v-btn>
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
        <div v-for="show in showtime"
        :key="show.movie_id" v-show="checkdate(show.time_start.substring(0,10))">
        <div id="border" class="is-multiline columns is-variable is-2">
          <div class="column is-one-quarter">
            <img :src="imagePath(show.movie_image)" id="img" alt="Placeholder image" />
          </div>
          <div id="detail" class="column">
            <p>{{show.movie_name}}</p>
          </div>
          <div id="detail" class="column">
            <p>{{show.theater_name}}</p>
          </div>
          <div id="detail" class="column">
            <p>{{show.time_start.substring(11, 16)}}-{{show.time_finish.substring(11, 16)}}</p>
          </div>
          <div id="detail" class="column">
            <p>{{show.movie_language}}</p>
          </div>
        </div>
        <div id="bot_set" class="is-multiline columns">
          <p id="detail_bot_topic">Category</p>

          <p id="detail_bot_info">{{show.movie_type}}</p>

          <p id="detail_bot_topic">Movie length</p>

          <p id="detail_bot_info">{{show.movie_length}} นาที</p>
        </div>
        </div>
        


        
      </div>
    </div>
  </div>
</template>

<script>
import Showtime from "../service/ShowtimeService";
export default {
  mounted(){
    this.getshowtime();
  }
   ,
  data() {
    return {
      showtime : [],
      dates : [],
      selectdate : "",
      check: ""
    };
  },
  methods: {
    async getshowtime(){
      try{
        let keep = await Showtime.getshowtime();
        console.log(keep);
        this.showtime = keep.data
        this.showtime.forEach(showtime => {
          let d = showtime.time_start.substring(0, 10)
          !this.dates.includes(d) ? this.dates.push(d) : 0
          this.choose_date = this.dates[0]
        });
      }
      catch(err){
        console.log(err)
      }
    },imagePath(file_path) {
      if (file_path) {
        return "http://localhost:12000/" + file_path;
      } else {
        return "https://bulma.io/images/placeholders/640x360.png";
      }
    },defaultDate() {
      this.selectdate = "";
    },
    keepdate(date) {
      this.selectdate = date;
    },
    checkdate(date) {
      this.check = date
      return date === this.selectdate || this.selectdate === "";
    },
  },
};
</script>

<style>
#button_day{
  margin-right: 2%;
  height: 50px;
  width: 15%;
}
#button_date{
  margin-right: 2%;
  height: 50px;
  width: 10%;
}
.movie_table_t {
  font-size: 30px;
  color: #6f717b;
}
.movie_table_e {
  font-size: 40px;
  color: #dcdcdc;
}
.backgroundbut {
  background-color: #212835;
}
#img {
  width: 100px;
  margin-left: 10px;
}
#detail {
  margin-top: 7%;
  text-align: center;
  color: #dcdcdc;
  font-size: 20px;
}
#border {
  border: #dcdcdc 3px solid;
  margin-top: 25px;
}
#topic {
  text-align: center;
  color: #dcdcdc;
  font-size: 25px;
  background-color: #ff7810;
  height: 50px;
}
#detail_bot_topic {
  font-size: 30px;
  color: #dcdcdc;
  margin-right: 3%;
}
#detail_bot_info {
  font-size: 30px;
  color: #6f717b;
  margin-right: 8%;
}
#bot_set {
  text-align: left;
  margin-top: 2%;
}
</style>

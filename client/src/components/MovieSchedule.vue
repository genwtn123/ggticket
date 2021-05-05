<template>
  <div class="backgroundblack">
    <div class="backgroundgray">
      <div class="column spacetop ml-9 mr-9">
        <p class="movie_table_e">Movie Schedule</p>
        <p class="movie_table_t">ตารางเวลาภาพยนตร์</p>
      </div>
      

      <div class="container is-max-desktop">
        <div class="buttons are-medium">
          <v-btn id="button_date" color="black" dark> Date </v-btn>
          <v-btn id="button_day" color="black" dark> 1-April-2021 </v-btn>
          <v-btn id="button_day" color="black" dark> 2-April-2021 </v-btn>
          <v-btn id="button_day" color="black" dark> 3-April-2021 </v-btn>
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

        <div id="border" class="is-multiline columns is-variable is-2" style="height: 180px">
          <div class="column is-one-quarter">
            <img id="img" v-bind:src="image" alt="Placeholder image" />
          </div>
          <div id="detail" class="column">
            <p>Spongebob Movie</p>
          </div>
          <div id="detail" class="column">
            <p>1</p>
          </div>
          <div id="detail" class="column">
            <p>09:00-11:00</p>
          </div>
          <div id="detail" class="column">
            <p>TH</p>
          </div>
        </div>
        <div id="bot_set" class="is-multiline columns">
          <p id="detail_bot_topic">Category</p>

          <p id="detail_bot_info">Cartoon</p>

          <p id="detail_bot_topic">Movie length</p>

          <p id="detail_bot_info">140 นาที</p>
        </div>

        <div id="border" class="is-multiline columns is-variable is-2">
          <div class="column is-one-quarter">
            <img id="img" v-bind:src="image" alt="Placeholder image" />
          </div>
          <div id="detail" class="column">
            <p>Spongebob Movie</p>
          </div>
          <div id="detail" class="column">
            <p>2</p>
          </div>
          <div id="detail" class="column">
            <p>09:00-11:00</p>
          </div>
          <div id="detail" class="column">
            <p>ENG</p>
          </div>
        </div>
        <div id="bot_set" class="is-multiline columns">
          <p id="detail_bot_topic">Category</p>

          <p id="detail_bot_info">Cartoon</p>

          <p id="detail_bot_topic">Movie length</p>

          <p id="detail_bot_info">140 นาที</p>
        </div>

        <div id="border" class="is-multiline columns is-variable is-2">
          <div class="column is-one-quarter">
            <img id="img" v-bind:src="image" alt="Placeholder image" />
          </div>
          <div id="detail" class="column">
            <p>Spongebob Movie</p>
          </div>
          <div id="detail" class="column">
            <p>3</p>
          </div>
          <div id="detail" class="column">
            <p>11:00-13:00</p>
          </div>
          <div id="detail" class="column">
            <p>ENG</p>
          </div>
        </div>
        <div id="bot_set" class="is-multiline columns">
          <p id="detail_bot_topic">Category</p>

          <p id="detail_bot_info">Cartoon</p>

          <p id="detail_bot_topic">Movie length</p>

          <p id="detail_bot_info">140 นาที</p>
        </div>

        <div id="border" class="is-multiline columns is-variable is-2 mb-5">
          <div class="column is-one-quarter">
            <img id="img" v-bind:src="image" alt="Placeholder image" />
          </div>
          <div id="detail" class="column">
            <p>Spongebob Movie</p>
          </div>
          <div id="detail" class="column">
            <p>4</p>
          </div>
          <div id="detail" class="column">
            <p>09:-11:00</p>
          </div>
          <div id="detail" class="column">
            <p>TH</p>
          </div>
        </div>
        <div id="bot_set" class="is-multiline columns">
          <p id="detail_bot_topic">Category</p>

          <p id="detail_bot_info">Cartoon</p>

          <p id="detail_bot_topic">Movie length</p>

          <p id="detail_bot_info">140 นาที</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image:
        "https://m.media-amazon.com/images/M/MV5BOGYxYzZkMWQtNjJkMy00NTlkLWExNWMtOTNhMTg4MDcxNmU3XkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_.jpg",
    };
  },
  methods: {},
};
</script>

<style>
#button_day{
  margin-right: 2%;
  height: 50px;
  width: 12%;
}
#button_date{
  margin-right: 2%;
  height: 50px;
  width: 8%;
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
  height: 150px !important;
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
  font-size: 22px;
  color: #dcdcdc;
  margin-right: 3%;
}
#detail_bot_info {
  font-size: 22px;
  color: #6f717b;
  margin-right: 8%;
}
#bot_set {
  text-align: left;
  margin-top: 2%;
}
</style>

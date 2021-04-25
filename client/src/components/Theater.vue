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
            <img v-bind:src="image" alt="Placeholder image" />
          </div>
          <div id="border_movietable" class="column is-three-quarters">
            <div id="topic_head">
              <div class="is-multiline columns">
                <p id="topic_movie_c">Title</p>
                <p>Spongebob Movie</p>
              </div>
              <div class="is-multiline columns">
                <p id="topic_movie_c">Category</p>
                <p>Cartoon</p>
              </div>
              <div class="is-multiline columns">
                <p id="topic_movie_c">Movie length</p>
                <p>140 นาที</p>
              </div>
            </div>
          </div>
        </div>

        <div class="buttons are-medium">
          <v-btn id="button_date" color="black" dark v-bind="attrs"> Date </v-btn>
          <v-btn id="button_day" color="black" dark v-bind="attrs"> 1-April-2021 </v-btn>
          <v-btn id="button_day" color="black" dark v-bind="attrs"> 2-April-2021 </v-btn>
          <v-btn id="button_day" color="black" dark v-bind="attrs"> 3-April-2021 </v-btn>
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
            <p>Languge</p>
          </div>
          <div id="topic" class="column">
          </div>
        </div>

        <div id="border_info" class="is-multiline columns is-variable is-2 mb-5">
          <div id="detail_start" class="column is-one-quarter">
            <p>Spongebob Movie</p>
          </div>
          <div id="detail_t" class="column">
            <p>1</p>
          </div>
          <div id="detail_t" class="column">
            <p>09:00-11:00</p>
          </div>
          <div id="detail_end" class="column">
            <p>TH</p>
          </div>
          <v-btn id="botton_choose" color="black" dark v-bind="attrs"> Choose </v-btn>
        </div>

        <div id="border_info" class="is-multiline columns is-variable is-2 mb-5">
          <div id="detail_start" class="column is-one-quarter">
            <p>Spongebob Movie</p>
          </div>
          <div id="detail_t" class="column">
            <p>2</p>
          </div>
          <div id="detail_t" class="column">
            <p>09:00-11:00</p>
          </div>
          <div id="detail_end" class="column">
            <p>ENG</p>
          </div>
          <v-btn id="botton_choose" color="black" dark v-bind="attrs"> Choose </v-btn>
        </div>

        <div id="border_info" class="is-multiline columns is-variable is-2 mb-5">
          <div id="detail_start" class="column is-one-quarter">
            <p>Spongebob Movie</p>
          </div>
          <div id="detail_t" class="column">
            <p>2</p>
          </div>
          <div id="detail_t" class="column">
            <p>09:00-11:00</p>
          </div>
          <div id="detail_end" class="column">
            <p>ENG</p>
          </div>
          <v-btn id="botton_choose" color="black" dark v-bind="attrs"> Choose </v-btn>
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
  border-right: #dcdcdc 3px solid;
}
#detail_t {
  margin-top: 1%;
  text-align: center;
  color: #dcdcdc;
  font-size: 20px;
  border-top: #dcdcdc 3px solid;
  border-bottom: #dcdcdc 3px solid;
}
#border_info{
  margin-top: 25px;
}
#border_movietable {
  border: #dcdcdc 2px solid;
  margin-bottom: 5%;
  margin-top: 1%;
}
#topic_head{
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
#topic_movie_c{
  width: 50%;
  text-align: left;
}
#botton_choose{
  margin-top:2%;
  margin-left:5%;
  height: 50px;
  font-size: 20px;
  width: 15%;
}
</style>

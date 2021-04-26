<template>
  <div class="backgroundblack">
    <div class="backgroundgray">
      <div class="container is-max-desktop">
        <div class="is-multiline columns is-variable is-2 mt-5">
          <div class="column spacetop ml-9 mr-9">
            <div class="column is-two-fifth">
              <p class="movie_table_e">Seat</p>
              <p class="movie_table_t">กรุณาเลือก</p>
              <p class="movie_table_t">ที่นั่ง ที่ต้องการ</p>
            </div>
          </div>

          <div
            id="border_seat"
            class="column is-three-fifths"
          >
            <div id="topic_head">
              <div class="is-multiline columns">
                <div class="column is-one-quarter">
                  <img
                    id="img_movie_seat"
                    v-bind:src="image_movie"
                    alt="Placeholder image"
                  />
                </div>
                <div id="topic_seat" class="column is-one-quarter">
                  <p id="seat_info">Title</p>
                  <p id="seat_info">Date</p>
                  <p>Time</p>
                  <p>Theater</p>
                  <p>Languge</p>
                </div>
                <div id="topic_seat" class="column is-one-quarter">
                  <p id="seat_info">Sponge Movie</p>
                  <p id="seat_info">31-september-2021</p>
                  <p>09:00-11:00</p>
                  <p>1</p>
                  <p>TH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="screen"> 
          หน้าจอ
        </div>
        <div class="is-multiline columns" id="space_screen"> 
         <div class="column">
          <p id="alpha">E</p>
          <p id="alpha">D</p>
          <p id="alpha">C</p>
          <p id="alpha">B</p>
          <p id="alpha">A</p>
        </div>
        <div class="column is-three-fifths">
          <!-- col 10 -->
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <!-- col 10 -->
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <!-- col 10 -->
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <!-- col 10 -->
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <!-- col 10 -->
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          <img id="img_seat_book" v-bind:src="image_seat" alt="Placeholder image" />
          </div>
        
        <div class="column is-one-quarter">
          <div id="payment_seat">
            <img id="img_payment_seat" v-bind:src="image_seat" alt="Placeholder image" />
            <p id="title_seat">ที่นั่งแสนนุ่ม</p>
            <p id="detail_payment_seat">200 บาท</p>
            <p id="topic_payment_seat">ที่นั่งที่เลือก</p>
            <p id="detail_payment_seat">A1 B2 C3 A2 B3 D7 E10 C2</p>
            <p id="topic_payment_seat">ราคารวม</p>
            <p id="detail_payment_seat">1600 บาท</p>
            <v-btn id="button_next_seat" color="#ff7810" dark v-bind="attrs"
              >ต่อไป</v-btn>
          </div>
        </div>
        
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image_movie:
        "https://m.media-amazon.com/images/M/MV5BOGYxYzZkMWQtNjJkMy00NTlkLWExNWMtOTNhMTg4MDcxNmU3XkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_.jpg",
      image_seat:
        "https://cdn3.iconfinder.com/data/icons/movie-entertainment-filled-outline-style/64/13_seat-movie-cinema-chair-theater-512.png",
    };
  },
  methods: {},
};
</script>

<style>
#topic_payment_seat{
  color: #6f717b; font-size:22px; text-align: center; margin-bottom:0px;
}
#detail_payment_seat{
  color:#dcdcdc; font-size:25px; text-align: center;
}
#title_seat{
  color:#dcdcdc; font-size:28px; text-align: center; margin-bottom:0px;
}
#img_payment_seat{
  width:40%; margin-top:8%;
}
#payment_seat{
  border: #dcdcdc 2px solid; padding-left:5%; padding-right:5%;
}
#alpha{
  color:#6f717b; font-size:40px; margin-top:2%;
}
#space_screen{
  margin-top:30px;
}
#screen{
  color:#6f717b; border-top: #dcdcdc 3px solid; border-radius: 50px ; font-size:25px; margin:20px; text-align: center;
}
#img_movie_seat{
  height: 200px; margin-top: 15%
}
#border_seat{
  border: #dcdcdc 2px solid;
  margin-bottom: 5%;
  margin-top: 100px;
}
#img_seat_book{
  width:10%; margin-top:2%;
}
#button_next_seat{
  width: 80%;
  background-color: #ff7810;
  border-color: #ff7810;
  color: #dcdcdc;
  font-size: 30px;
  height: 10%;
  margin-bottom: 15%;
}
#seat_info {
  width: 150px;
  height: 50px;
}
#topic_seat {
  margin-left: 5%;
}
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
#border_info {
  margin-top: 25px;
}

#topic_head {
  margin-top: 3%;
  margin-left: 10%;
  font-size: 18px;
  color: #dcdcdc;
  text-align: left;
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
  height: 50px;
  font-size: 20px;
  width: 15%;
}
</style>

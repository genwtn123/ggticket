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

          <div id="border_seat" class="column is-three-fifths">
            <div id="topic_head">
              <div class="is-multiline columns">
                <div class="column is-one-quarter">
                  <img
                    id="img_movie_seat"
                    v-bind:src="imagePath(this.keep.movie_image)"
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
                  <p id="seat_info">{{ this.keep.movie_name }}</p>
                  <p id="seat_info">{{ this.keep.date }}</p>
                  <p>{{ this.keep.start_time + "-" + this.keep.end_time }}</p>
                  <p>{{ this.keep.theater_id }}</p>
                  <p>{{ this.keep.movie_language }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="screen">หน้าจอ</div>
        <div class="is-multiline columns" id="space_screen">
          <div class="column is-one-fifths">
            <p id="alpha">E</p>
            <p id="alpha">D</p>
            <p id="alpha">C</p>
            <p id="alpha">B</p>
            <p id="alpha">A</p>
          </div>
          <div class="column is-three-fifths">
            <!-- col 10 -->
            <button
              id="img_seat_book"
              v-for="seat of this.seat"
              :key="seat.seat_no"
              :disabled="seat.seat_status == 0"
              @click="selectseat(seat)"
            >
              <img
                :src="image_seat"
                v-show="!seat.selected && seat.seat_status"
              />
              <img
                :src="image_check"
                v-show="seat.selected && seat.seat_status"
              />
              <img :src="image_cantselect" v-show="!seat.seat_status" />
            </button>
          </div>

          <div class="column is-one-quarter">
            <div id="payment_seat">
              <img
                id="img_payment_seat"
                v-bind:src="image_seat"
                alt="Placeholder image"
              />
              <p id="title_seat">ที่นั่งแสนนุ่ม</p>
              <p id="topic_payment_seat">ที่นั่งที่เลือก</p>
              <p id="detail_payment_seat" style="word-wrap: break-word">
                <template v-for="(seatname, index) of this.selected">
                  <span
                    class="pr-1"
                    :key="seatname.seat_name"
                    v-if="selected.length - 1 === index"
                    >{{ seatname.seat_name }}</span
                  >
                  <span class="pr-1" :key="seatname.seat_name" v-else
                    >{{ seatname.seat_name }},
                  </span>
                </template>
              </p>
              <p id="topic_payment_seat">ราคารวม</p>
              <p id="detail_payment_seat">{{ price }}</p>
              <v-btn
                id="button_next_seat"
                color="#ff7810"
                dark
                @click="nextpage()"
                >ต่อไป</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheaterService from "../service/TheaterService";
export default {
  data() {
    return {
      image_seat:
        "https://cdn3.iconfinder.com/data/icons/movie-entertainment-filled-outline-style/64/13_seat-movie-cinema-chair-theater-512.png",
      image_check: "https://i.imgur.com/Kmbm2CS.png",
      image_cantselect: "https://i.imgur.com/4jJIEp6.png",
      keep: this.$store.getters.getshow,
      data: {
        showtime_no: this.$store.getters.getshow.showtime_no,
        theater_id: this.$store.getters.getshow.theater_id,
      },
      seat: [],
      selected: [],
    };
  },
  mounted() {
    this.getSeat();
  },
  methods: {
    async getSeat() {
      //  if(this.$store.getters.getmovie == ""){
      //     this.$router.push({name:'Movie'})
      //   }
      try {
        let keep = await TheaterService.getSeat(this.data);
        for (let seat of keep.data) {
          seat.selected = false;
          this.seat.push(seat);
        }
      } catch (err) {
        console.log(err);
      }
    },
    selectseat(seat) {
      seat.selected = !seat.selected;
      console.log(seat.selected);
      if (seat.selected) {
        this.selected.push(seat);
      } else {
        this.selected = this.selected.filter(
          (selectedseat) => selectedseat.seat_no != seat.seat_no
        );
      }
      console.log(this.selected);
    },
    imagePath(file_path) {
      if (file_path) {
        return "http://localhost:12000/" + file_path;
      } else {
        return "https://bulma.io/images/placeholders/640x360.png";
      }
    },
    nextpage() {
      if (this.selected.length != 0) {
        this.$store.commit("keepseat", this.selected);
        this.$store.commit("keepseatprice", this.price);
        this.$router.push({ name: "Buyfood" });
      }else{
        alert("Select seat first")
      }
      // this.$store.commit("keepseat", this.selected);
      // this.$store.commit("keepseatprice", this.price);
      // this.$router.push({name:'Buyfood'})
    },
  },
  computed: {
    price() {
      let p = 0;
      for (let seat of this.selected) {
        p += seat.seat_price;
      }
      return p;
    },
  },
};
</script>

<style>
#topic_payment_seat {
  color: #6f717b;
  font-size: 22px;
  text-align: center;
  margin-bottom: 0px;
}
#detail_payment_seat {
  color: #dcdcdc;
  font-size: 27px;
  text-align: center;
}
#title_seat {
  color: #dcdcdc;
  font-size: 28px;
  text-align: center;
  margin-bottom: 0px;
}
#img_payment_seat {
  width: 40%;
  margin-top: 8%;
}
#payment_seat {
  border: #dcdcdc 2px solid;
  padding-left: 5%;
  padding-right: 5%;
}
#alpha {
  color: #6f717b;
  font-size: 40px;
  margin-top: 2%;
}
#space_screen {
  margin-top: 30px;
}
#screen {
  color: #6f717b;
  border-top: #dcdcdc 3px solid;
  border-radius: 50px;
  font-size: 25px;
  margin: 20px;
  text-align: center;
}
#img_movie_seat {
  height: 200px;
  margin-top: 15%;
}
#border_seat {
  border: #dcdcdc 2px solid;
  margin-bottom: 5%;
  margin-top: 100px;
}
#img_seat_book {
  width: 10%;
  margin-top: 2%;
}
#button_next_seat {
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

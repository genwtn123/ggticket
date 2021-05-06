<template>
  <div class="backgroundblackticket">
    <div class="backgroundgray">
      <div class="column spacetop ml-9 mr-9">
        <p class="title_food_e">Payment</p>
        <p class="title_food_t">การชำระเงิน</p>
      </div>
      <div class="is-multiline columns">
        <div class="column is-three-fifths is-multiline columns">
          <div id="box">
            <img
              :src="imagePath(this.show.movie_image)"
              alt="Placeholder image"
            />
          </div>
          <div id="detail_ticket" class="column">
            <p id="topic_ticket" class="title_ticket">Title</p>
            <p id="topic_ticket" class="date_ticket">Date</p>
            <p id="topic_ticket">Time</p>
            <p id="topic_ticket">Theater</p>
            <p id="topic_ticket">Languge</p>
            <p id="topic_ticket">Seat</p>
          </div>
          <div id="detail_ticket" class="column">
            <p id="info_ticket" class="title_ticket">
              {{ this.show.movie_name }}
            </p>
            <p id="info_ticket" class="date_ticket">{{ this.show.date }}</p>
            <p id="info_ticket">
              {{ this.show.start_time + "-" + this.show.end_time }}
            </p>
            <p id="info_ticket">{{ this.show.theater_id }}</p>
            <p id="info_ticket">{{ this.show.movie_language }}</p>
            <p id="info_ticket">
              <span v-for="seat of this.seat" :key="seat.seat_no">{{
                seat.seat_name + " "
              }}</span>
            </p>
          </div>
        </div>

        <div id="box_payment" class="column">
          <div id="box_text">
            <p id="total_payment">Total</p>
            <div class="row">
              <p id="ticket_payment" class="ticket_payment">
                <template v-for="seat of this.seat">
                  <span :key="seat.seat_no">{{
                    seat.seat_name + " " + ""
                  }}</span>
                </template>
              </p>
              <p id="ticket_payment">{{ this.seatprice }} บาท</p>
            </div>
            <div class="row" v-for="food of this.food" :key="food.food_id">
              <p id="food_payment" class="ticket_payment">
                {{ food.food_name + " x " + food.amount }}
              </p>
              <p id="food_payment">{{ food.food_price * food.amount }} บาท</p>
            </div>
          </div>
        </div>

        <div
          id="ticket_border"
          class="column is-three-fifths is-multiline columns"
        >
          <div id="box">
            <img v-bind:src="image_food" alt="Placeholder image" />
          </div>
          <div id="detail_ticket_bot" class="column">
            <p id="topic_ticket_head" class="column">Add Food & Beverage</p>
            <p id="text_ticket_info" class="date_ticket">
              เลือกซื้ออาหารและเครื่องดื่มเพิ่ม
            </p>
            <v-btn id="button_payment" color="#ff7810" dark @click="buyfood()"
              >Click here</v-btn
            >
          </div>
        </div>

        <div id="box_bot" class="column">
          <p id="total_t">ราคารวม</p>
          <p id="total_m">{{ this.total }} บาท</p>
          <v-btn id="button_payment" color="#ff7810" dark @click="confirm()"
            >ชำระเงิน</v-btn
          >
        </div>
      </div>
      <sweet-modal icon="success" ref="modal">
        Success!
        <v-row>
          <v-col> <v-btn color="success" class="mt-5" @click="close()">Ok</v-btn></v-col>
          
          </v-row>
      </sweet-modal>
      <sweet-modal ref="confirm" title="Confirm" width="30%">
        <v-row>
          <v-col cols="6">
            <v-btn color="primary" @click="success">Confirm</v-btn>
          </v-col>
          <v-col cols="6"
            ><v-btn color="error" @click="$refs.confirm.close()"
              >Cancel</v-btn
            ></v-col
          >
        </v-row>
      </sweet-modal>
    </div>
  </div>
</template>

<script>
import TicketService from "../service/TicketService";
import { SweetModal } from "../../node_modules/sweet-modal-vue";
export default {
  component: {
    SweetModal,
  },
  data() {
    return {
      image_movie:
        "https://m.media-amazon.com/images/M/MV5BOGYxYzZkMWQtNjJkMy00NTlkLWExNWMtOTNhMTg4MDcxNmU3XkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_.jpg",
      image_food:
        "https://cf.shopee.co.th/file/9bfa60613f84e8b5c4a766544ffbdc14",
      seat: this.$store.getters.getseat,
      show: this.$store.getters.getshow,
      food: this.$store.getters.getfood,
      seatprice: this.$store.getters.getseatprice,
      confirmseat: [],
      confirmfood: [],
    };
  },
  mounted() {
    // if(this.$store.getters.getmovie == ""){
    //         this.$router.push({name:'Movie'})
    //       }
  },
  methods: {
    imagePath(file_path) {
      if (file_path) {
        return "http://localhost:12000/" + file_path;
      } else {
        return "https://bulma.io/images/placeholders/640x360.png";
      }
    },
    async buyticket() {
      for (let seatz of this.seat) {
        this.confirmseat.push(seatz.seat_no);
      }
      for (let foodz of this.food) {
        this.confirmfood.push({ food_id: foodz.food_id, amount: foodz.amount });
      }
      try {
        await TicketService.buyticket(this.createForm());
        this.$store.commit("keepmovie", "");
        this.$store.commit("keepshow", "");
        this.$store.commit("keepseat", "");
        this.$store.commit("keepfood", "");
        this.$store.commit("keepseatprice", "");
      } catch (err) {
        console.log(err);
      }
    },
    buyfood() {
      this.$router.push({ name: "Buyfood" });
    },
    createForm() {
      let form = new FormData();
      form.append("showtime_no", this.show.showtime_no);
      if (this.confirmfood.length != 0) {
        for (let foodd of this.confirmfood) {
          form.append("food", JSON.stringify(foodd));
        }
      }
      for (let seatt of this.confirmseat) {
        form.append("seat_no", seatt);
      }
      return form;
    },
    confirm() {
      this.$refs.confirm.open();
    },
    async success() {
      this.$refs.confirm.close();
      await this.$refs.modal.open();
      await this.buyticket();
    },
    close() {
      this.$router.push({name:"Home"})
    },
  },
  computed: {
    total() {
      let p = 0;
      for (let food of this.food) {
        p += food.food_price * food.amount;
      }
      p += this.seatprice;
      return p;
    },
  },
};
</script>

<style>
#detial_ticket_bot {
  text-align: center;
}
#topic_ticket_head {
  font-size: 26px;
  color: #dcdcdc;
}
#text_ticket_info {
  font-size: 25px;
  color: #6f717b;
}
#ticket_border {
  border: #6f717b 2px solid;
  margin-bottom: 0px;
}
.backgroundblackticket {
  background-color: #121212;
  padding-bottom: 1%;
}
#box_bot {
  border-bottom: #6f717b 2px solid;
  border-right: #6f717b 2px solid;
  border-left: #6f717b 2px solid;
  margin-right: 2%;
  margin-left: 2%;
}
#box_text {
  margin-top: 20%;
}
.ticket_payment {
  margin-left: 5%;
  width: 250px;
}
#total_payment {
  font-size: 72px;
  color: #ff7810;
}
#ticket_payment {
  font-size: 25px;
  color: #dcdcdc;
}
#food_payment {
  font-size: 25px;
  color: #dcdcdc;
}
#box_payment {
  border-top: #6f717b 2px solid;
  border-right: #6f717b 2px solid;
  border-left: #6f717b 2px solid;
  margin-right: 2%;
  margin-left: 2%;
}
#button_payment {
  width: 80%;
  background-color: #ff7810;
  border-color: #ff7810;
  color: #dcdcdc;
  font-size: 30px;
  height: 60px;
}
#topic_ticket {
  color: #dcdcdc;
}
#info_ticket {
  color: #6f717b;
}
.date_ticket {
  height: 50px;
}
.title_ticket {
  height: 80px;
}
#detail_ticket {
  font-size: 20px;
  text-align: left;
}
#box {
  display: block;
  width: 50%;
  margin-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
}
</style>

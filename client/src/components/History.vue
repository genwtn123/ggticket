<template>
  <v-container>
    <div style="line-height: 32pt">
      <div class="title_head">History</div>
      <div class="title_sub">ประวัติการเข้าชม</div>
    </div>
    <div class="py-6">
      <v-card
        v-for="his in history"
        :key="his.ticket_id"
        class="card columns history_card"
      >
        <img :src="imagePath(his.movie_image)" class="img_history pt-2 pl-1" />

        <div class="column">
          <div style="padding-left: 2%">
            <p class="history_card_title">{{ his.movie_name }}</p>

            <div class="columns">
              <div class="column history_card_layout">
                <div class="pb-4">
                  <span class="history_card_title_sub">Date</span>
                  <span class="history_card_txt">{{
                    his.time_start_date
                  }}</span>
                </div>

                <div class="pb-4">
                  <span class="history_card_title_sub">Theater</span>
                  <span class="history_card_txt">{{ his.theater_name }}</span>
                </div>

                <div>
                  <span class="history_card_title_sub">Seat</span>
                  <span
                    class="history_card_txt"
                    v-for="seat in his.seat_name"
                    :key="seat.name"
                    >{{ seat.name }}</span
                  >
                </div>
              </div>

              <div class="column history_card_layout">
                <div class="pb-4">
                  <span class="history_card_title_sub">Time</span>
                  <span class="history_card_txt">{{
                    his.time_start + "-" + his.time_finish
                  }}</span>
                </div>

                <div>
                  <span class="history_card_title_sub">Languge</span>
                  <span class="history_card_txt">{{ his.movie_language }}</span>
                </div>
              </div>
            </div>
          </div>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click="his.show = !his.show" color="primary">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="his.show">
              <v-divider></v-divider>
              <v-row>
                <v-col cols="2">
                  <v-card-text class="history_card_title_sub">
                    Food
                  </v-card-text>
                </v-col>
                <v-col cols="3">
                  <v-card-text
                    class="history_card_txt"
                    v-for="food in his.food_result"
                    :key="food.name"
                    >{{
                      food.name +
                      (food.name != "-" ? food.price + " $ x" + food.unit : "")
                    }}</v-card-text
                  >
                </v-col>
                <v-col cols="2">
                  <v-card-text class="history_card_title_sub">
                    Seat
                  </v-card-text>
                </v-col>
                <v-col>
                  <v-card-text
                  cols="2"
                  class="history_card_txt"
                  v-for="seatz in his.seat_name"
                  :key="seatz.name">
                  {{ seatz.name + " " + seatz.price +"$" }}
                  </v-card-text>
                </v-col>

                <v-col cols="2">
                  <v-card-text class="history_card_title_sub"
                    >Total
                  </v-card-text>
                </v-col>
                <v-col cols="1">
                  <v-card-text class="history_card_txt">{{
                    his.food_price + his.seat_price + " $"
                  }}</v-card-text>
                </v-col>
              </v-row>
            </div>
          </v-expand-transition>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import HistoryService from "../service/HistoryService";
export default {
  data() {
    return {
      image:
        "https://thumbnails.cbsig.net/_x/w370/CBS_Production_Entertainment_VMS/SOTR_SAlone_Poster_1400x2100.jpg",
      history: [],
      show: false,
    };
  },
  mounted() {
    this.getHistory();
  },
  methods: {
    async getHistory() {
      try {
        await HistoryService.getHistory()
          .then((response) => {
            console.log(response.data);
            for (let data of response.data) {
              for (let his of this.history) {
                if (his.ticket_id == data.ticket_id) {
                  data.checkseat_name = true;
                  for (let seat of his.seat_name) {
                    if (seat.name == data.seat_name) {
                      console.log(seat);
                      data.checkseat_name = false;
                    } else {
                      his.food_name.push({
                        name: data.food_name,
                        price: data.food_price,
                        unit: data.unit,
                      });
                      his.food_price += data.food_price * data.unit;
                    }
                  }
                  if (data.checkseat_name) {
                    his.seat_name.push({
                      name: data.seat_name,
                      price: data.seat_price,
                    });
                    his.seat_price += data.seat_price;
                  }
                  data.checked = true;
                }
                console.log(data.checked);
              }
              if (data.checked == undefined) {
                console.log("data");
                var obj = {
                  ticket_id: data.ticket_id,
                  movie_name: data.movie_name,
                  time_start_date: data.time_start.match(/.+(?=T)/)[0],
                  time_finish_date: data.time_finish.match(/.+(?=T)/)[0],
                  time_start: data.time_start.match(/\d+:\d+/)[0],
                  time_finish: data.time_finish.match(/\d+:\d+/)[0],
                  theater_name: data.theater_name,
                  movie_language: data.movie_language,
                  seat_name: [{ name: data.seat_name, price: data.seat_price }],
                  movie_image: data.movie_image,
                  show: false,
                  seat_price: data.seat_price,
                  food_name: [],
                  food_price: 0,
                };
                this.history.push(obj);
              }
            }
            for (let hiss of this.history) {
              hiss.food_result = hiss.food_name.filter(
                (item, index) => hiss.food_name.indexOf(item) === index
              );
              if (hiss.food_result.length == 0) {
                hiss.food_result.push({ name: "-" });
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
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
  },
};
</script>

<style>
hr {
  height: 2px;
  border-width: 0;
  color: #9d9fa3;
}

.title_head {
  font-size: 40px;
  color: #ffffff;
  text-align: left;
}

.title_sub {
  font-size: 24px;
  color: #74787d;
  text-align: left;
}

.img_history {
  width: 200px;
  height: 270px;
}

.history_card {
  background: #000000 !important;
  border-radius: 10px !important;
  margin-bottom: 4% !important;
}

.history_card_title {
  color: #fd7014;
  font-size: 36px;
  text-align: left;
}

.history_card_title_sub {
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #ffffff;
}

.history_card_txt {
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #9d9fa3;
  padding-left: 5%;
}

.history_card_layout {
  text-align: left;
  line-height: 25pt;
}
</style>
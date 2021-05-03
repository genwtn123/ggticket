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
        <img
          :src="imagePath(his.ticket.movie_image)"
          class="img_history pt-2 pl-1"
        />

        <div class="column">
          <div style="padding-left: 2%">
            <p class="history_card_title">{{ his.ticket.movie_name }}</p>

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
                  <span class="history_card_txt">{{
                    his.ticket.theater_name
                  }}</span>
                </div>

                <div>
                  <span class="history_card_title_sub">Seat</span>
                  <span
                    class="history_card_txt"
                    v-for="seat in his.seat"
                    :key="seat.seat_name"
                    >{{ seat.seat_name }}</span
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
                  <span class="history_card_txt">{{
                    his.ticket.movie_language
                  }}</span>
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
                    v-for="food in his.food"
                    :key="food.food_name"
                    >{{
                      food.food_name +
                      (food.food_name != "-"
                        ? " " + food.food_price + " $ x" + food.unit
                        : "")
                    }}</v-card-text
                  >
                </v-col>
                <v-col cols="1">
                  <v-card-text class="history_card_title_sub">
                    Seat
                  </v-card-text>
                </v-col>
                <v-col>
                  <v-card-text
                    cols="2"
                    class="history_card_txt"
                    v-for="seatz in his.seat"
                    :key="seatz.seat_name"
                  >
                    {{ seatz.seat_name + " " + seatz.seat_price + "$" }}
                  </v-card-text>
                </v-col>

                <v-col cols="2">
                  <v-card-text class="history_card_title_sub"
                    >Total
                  </v-card-text>
                </v-col>
                <v-col cols="2">
                  <v-card-text class="history_card_txt">{{
                    his.foodprice + his.seatprice + " $"
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
            for (let data of response.data) {
              if (data.food.length == 0) {
                data.food.push({ food_name: "-" });
              }
              data.time_start_date = data.ticket.time_start.match(/.+(?=T)/)[0];
              data.time_finish_date = data.ticket.time_finish.match(/.+(?=T)/)[0];
              data.time_start = data.ticket.time_start.match(/\d+:\d+/)[0];
              data.time_finish = data.ticket.time_finish.match(/\d+:\d+/)[0];
              data.show = false;
              this.history.push(data);
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
  text-align: left;
}

.history_card_layout {
  text-align: left;
  line-height: 25pt;
}
</style>
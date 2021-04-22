<template>
  <v-container>
    <div style="line-height: 32pt">
      <div class="title_head">History</div>
      <div class="title_sub">ประวัติการเข้าชม</div>
      <hr />
    </div>
    <v-main>
      <div class="card columns history_card">
        <img :src="image" class="img_history" />

        <div class="column">
          <div class="card-content">
            <div class="">
              <p class="history_card_title">Spongbob Movie</p>
            </div>

            <div class="columns">
              <div class="column history_card_layout">
                <div>
                  <span class="history_card_title_sub">Date</span>
                  <span class="history_card_txt">1-Apr-2021</span>
                </div>

                <div>
                  <span class="history_card_title_sub">Theater</span>
                  <span class="history_card_txt">1</span>
                </div>

                <div>
                  <span class="history_card_title_sub">Seat</span>
                  <span class="history_card_txt">B10</span>
                </div>
              </div>

              <div class="column history_card_layout">
                <div>
                  <span class="history_card_title_sub">Time</span>
                  <span class="history_card_txt">09:00-11:00</span>
                </div>

                <div>
                  <span class="history_card_title_sub">Languge</span>
                  <span class="history_card_txt">TH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-main>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      image:
        "https://thumbnails.cbsig.net/_x/w370/CBS_Production_Entertainment_VMS/SOTR_SAlone_Poster_1400x2100.jpg",
    };
  },
  methods: {},
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
  width: 150px;
  height: 200px;
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
}

.history_card_layout {
  text-align: left;
  line-height: 25pt;
}

</style>
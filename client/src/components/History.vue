<template>
  <div class="backgroundblack">
    <div class="backgroundgray">
      <div class="column spacetop ml-9 mr-9">
        <p class="history_e">History</p>
        <p class="history_t">ประวัติการชม</p>
      </div>

      <div id="block_bg" class="is-multiline columns is-variable is-2 mb-5">
        <img id="img_history" v-bind:src="image" alt="Placeholder image" />
        <div id="detail_history">
          <div id="topic_history">
            <p>Spongebob Movie</p>
          </div>
          <div class="is-multiline columns">
            <div id="info_history">
              <p>Date</p>
              <p>Theater</p>
              <p>Seat</p>
            </div>
            <div id="info_history">
              <p style="margin-right: 100px">1-April</p>
              <p>1</p>
              <p>B10</p>
            </div>
            <div id="info_history">
              <p>Time</p>
              <p>09:00-11:00</p>
            </div>
            <div id="info_history">
              <p>Languge</p>
              <p>TH</p>
            </div>
          </div>
        </div>
      </div>

      <div id="block_bg" class="is-multiline columns is-variable is-2 mb-5">
        <img id="img_history" v-bind:src="image" alt="Placeholder image" />
        <div id="detail_history">
          <div id="topic_history">
            <p>Spongebob Movie</p>
          </div>
          <div class="is-multiline columns">
            <div id="info_history">
              <p>Date</p>
              <p>Theater</p>
              <p>Seat</p>
            </div>
            <div id="info_history">
              <p style="margin-right: 100px">1-April</p>
              <p>1</p>
              <p>B10</p>
            </div>
            <div id="info_history">
              <p>Time</p>
              <p>09:00-11:00</p>
            </div>
            <div id="info_history">
              <p>Languge</p>
              <p>TH</p>
            </div>
          </div>
        </div>
      </div>

      <div id="block_bg" class="is-multiline columns is-variable is-2 mb-5">
        <img id="img_history" v-bind:src="image" alt="Placeholder image" />
        <div id="detail_history">
          <div id="topic_history">
            <p>Spongebob Movie</p>
          </div>
          <div class="is-multiline columns">
            <div id="info_history">
              <p>Date</p>
              <p>Theater</p>
              <p>Seat</p>
            </div>
            <div id="info_history">
              <p style="margin-right: 100px">1-April</p>
              <p>1</p>
              <p>B10</p>
            </div>
            <div id="info_history">
              <p>Time</p>
              <p>09:00-11:00</p>
            </div>
            <div id="info_history">
              <p>Languge</p>
              <p>TH</p>
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
      image:
        "https://m.media-amazon.com/images/M/MV5BOGYxYzZkMWQtNjJkMy00NTlkLWExNWMtOTNhMTg4MDcxNmU3XkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_.jpg",
    };
  },
  methods: {},
};
</script>

<style>
.history_e {
  font-size: 40px;
  color: #dcdcdc;
  text-align: left;
}
.history_t {
  font-size: 30px;
  color: #6f717b;
  border-bottom: #dcdcdc 5px solid;
  text-align: left;
}
#topic_history {
  font-size: 35px;
  color: #ff7810;
  margin-top: 8%;
}
#info_history {
  font-size: 25px;
  color: #dcdcdc;
  margin-top: 5%;
}
.movie_table_t {
  font-size: 30px;
  color: #6f717b;
}
.movie_table_e {
  font-size: 40px;
  color: #dcdcdc;
}

#img_history {
  width: 200px;
}
#detail_history {
  text-align: left;
  color: #dcdcdc;
  font-size: 25px;
  margin-left: 5%;
}
#block_bg {
  width: 80%;
  background-color: #121212;
  margin-top: 2%;
  margin-left: 10%;
}
</style>

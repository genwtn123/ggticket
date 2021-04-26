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
            <img v-bind:src="image_movie" alt="Placeholder image" />
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
            <p id="info_ticket" class="title_ticket">Spongebob Movie</p>
            <p id="info_ticket" class="date_ticket">1-April-2021</p>
            <p id="info_ticket">09:00-11:00</p>
            <p id="info_ticket">1</p>
            <p id="info_ticket">TH</p>
            <p id="info_ticket">B10</p>
          </div>
        </div>

        <div id="box_payment" class="column">
          <div id="box_text">
            <p id="total_payment">Total</p>
            <div class="row">
              <p
                id="ticket_payment"
                class="ticket_payment"
              >
                Ticket x 1
              </p>
              <p id="ticket_payment">200 บาท</p>
            </div>
            <div class="row">
              <p
                id="food_payment"
                class="ticket_payment"
              >
                Food & Beverage
              </p>
              <p id="food_payment">300 บาท</p>
            </div>
          </div>
        </div>

        <div id="ticket_border" class="column is-three-fifths is-multiline columns">
          <div id="box">
            <img v-bind:src="image_food" alt="Placeholder image" />
          </div>
          <div id="detail_ticket_bot" class="column">
            <p id="topic_ticket_head" class="column">Add Food & Beverage</p>
            <p id="text_ticket_info" class="date_ticket">เลือกซื้ออาหารและเครื่องดื่ม</p>
            <v-btn id="button_payment" color="#ff7810" dark v-bind="attrs">Click here</v-btn>
          </div>
        </div>

        <div id="box_bot" class="column">
          <p id="total_t">ราคารวม</p>
          <p id="total_m">300 บาท</p>
          <v-btn id="button_payment" color="#ff7810" dark v-bind="attrs">ชำระเงิน</v-btn>
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
      image_food:
        "https://cf.shopee.co.th/file/9bfa60613f84e8b5c4a766544ffbdc14",
    };
  },
  methods: {},
};
</script>

<style>
#detial_ticket_bot{
  text-align: center;
}
#topic_ticket_head{
  font-size: 26px;
  color: #dcdcdc;
}
#text_ticket_info{
  font-size: 25px;
  color: #6f717b;
}
#ticket_border{
  border: #6f717b 2px solid;
  margin-bottom: 0px;
 
}
.backgroundblackticket{
  background-color: #121212;
  padding-bottom:1%;
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
  margin-left: 5%; width: 250px
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

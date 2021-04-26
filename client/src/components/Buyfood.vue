<template>
  <div class="backgroundblack">
    <div class="backgroundgray" :key="key">
      <div class="column spacetop ml-9 mr-9 mb-5">
        <p class="title_food_e">Food & Beverage</p>
        <p class="title_food_t">เลือกอาหาร และเครื่องดื่มเพิ่มเติม</p>
      </div>
      <div class="is-multiline columns is-variable is-2 ml-9 mr-9">

        <div class="column is-one-quarter mt-5">
          <div id="card_food" class="card">
            <div id="img_food" class="card-image">
              <figure class="image is-1by1">
                <img v-bind:src="image_popcorn" alt="Placeholder image" />
              </figure>
            </div>
            <div id="card_body" class="card-content">
              <div id="food" class="media">
                <div class="media-content">
                  <p id="detail_pro_food" class="whitefont">
                    Popcorn Salted Caramel Lemon
                  </p>
                  <p class="whitefont">200 บาท</p>
                </div>
              </div>
            </div>
            <footer id="foot_h" class="card-footer">
              <v-btn
                @click="decrease(0, 200)"
                id="footer_food_cal"
                color="#ff7810"
                dark
                v-bind="attrs"
              >
                -
              </v-btn>
              <p id="footer_food" class="card-footer-item">{{ amount[0] }}</p>
              <v-btn
                @click="increase(0, 200)"
                id="footer_food_cal"
                color="#ff7810"
                dark
                v-bind="attrs"
              >
                +
              </v-btn>
            </footer>
          </div>
        </div>

        <div class="column is-one-quarter mt-5">
          <div id="card_food" class="card">
            <div id="img_food" class="card-image">
              <figure class="image is-1by1">
                <img v-bind:src="image_coke" alt="Placeholder image" />
              </figure>
            </div>
            <div id="card_body" class="card-content">
              <div id="food" class="media">
                <div class="media-content">
                  <p id="detail_pro_food" class="whitefont">Coke Original</p>
                  <p class="whitefont">20บาท</p>
                </div>
              </div>
            </div>
            <footer id="foot_h" class="card-footer">
              <v-btn
                @click="decrease(1, 20)"
                id="footer_food_cal"
                color="#ff7810"
                dark
                v-bind="attrs"
              >
                -
              </v-btn>
              <p id="footer_food" class="card-footer-item">{{ amount[1] }}</p>
              <v-btn
                @click="increase(1, 20)"
                id="footer_food_cal"
                color="#ff7810"
                dark
                v-bind="attrs"
              >
                +
              </v-btn>
            </footer>
          </div>
        </div>

        <div class="column is-one-quarter mt-5">
          <div id="card_food" class="card">
            <div id="img_food" class="card-image">
              <figure class="image is-1by1">
                <img v-bind:src="image_popcorn" alt="Placeholder image" />
              </figure>
            </div>
            <div id="card_body" class="card-content">
              <div id="food" class="media">
                <div class="media-content">
                  <p id="detail_pro_food" class="whitefont">
                    Popcorn Salted Caramel Lemon
                  </p>
                  <p class="whitefont">200 บาท</p>
                </div>
              </div>
            </div>
            <footer id="foot_h" class="card-footer">
              <v-btn
                @click="decrease(2, 200)"
                id="footer_food_cal"
                color="#ff7810"
                dark
                v-bind="attrs"
              >
                -
              </v-btn>
              <p id="footer_food" class="card-footer-item">{{ amount[2] }}</p>
              <v-btn
                @click="increase(2, 200)"
                id="footer_food_cal"
                color="#ff7810"
                dark
                v-bind="attrs"
              >
                +
              </v-btn>
            </footer>
          </div>
        </div>

        <div class="column is-one-one">
          <div id="final_food_cal">
            <p id="total_e">Total</p>
            <p id="total_t">ราคารวม</p>
            <p id="total_m">{{ totalprice }} บาท</p>
            <v-btn id="button_next" color="#ff7810" dark v-bind="attrs"
              >ต่อไป</v-btn
            >
          </div>
        </div>

        <div class="column is-one-quarter mt-5">
          <div id="card_food" class="card">
            <div id="img_food" class="card-image">
              <figure class="image is-1by1">
                <img v-bind:src="image_coke" alt="Placeholder image" />
              </figure>
            </div>
            <div id="card_body" class="card-content">
              <div id="food" class="media">
                <div class="media-content">
                  <p id="detail_pro_food" class="whitefont">Coke Original</p>
                  <p class="whitefont">20 บาท</p>
                </div>
              </div>
            </div>
            <footer id="foot_h" class="card-footer">
              <v-btn
                @click="decrease(3, 20)"
                id="footer_food_cal"
                color="#ff7810"
                dark
                v-bind="attrs"
              >
                -
              </v-btn>
              <p id="footer_food" class="card-footer-item">{{ amount[3] }}</p>
              <v-btn
                @click="increase(3, 20)"
                id="footer_food_cal"
                color="#ff7810"
                dark
                v-bind="attrs"
              >
                +
              </v-btn>
            </footer>
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
      key: 0,
      amount: [0, 0, 0, 0, 0],
      totalprice: 0,
      image_popcorn:
        "https://www.syioknya.com/custom/picture/18240/syioknya1_5d95c544a07f7.png",
      image_coke:
        "https://i.pinimg.com/474x/65/37/ec/6537ecc2e7900a6076c8b28557d4e5c0.jpg",
    };
  },
  methods: {
    increase(index, price) {
      this.amount[index] += 1;
      this.totalprice += price;
      this.key += 1;
    },
    decrease(index, price) {
      if (this.amount[index] == 0) {
        return;
      }
      if (this.totalprice - price < 0) {
        return;
      }
      this.amount[index] -= 1;
      this.totalprice -= price;
      this.key += 1;
    },
  },
};
</script>

<style>
#final_food_cal {
  text-align: center;
  border: #dcdcdc 1px solid;
  width: 110%;
  height: 600px;
}
#img_food {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.spacetop {
  margin-top: 60px;
}
.title_food_t {
  font-size: 30px;
  color: #6f717b;
  text-align: left;
}
.title_food_e {
  font-size: 40px;
  color: #dcdcdc;
  text-align: left;
}

.backgroundgray {
  background-color: #212835;
}
.whitefont {
  color: #dcdcdc;
  font-size: 20px;
}
#card_food {
  background-color: #ff7810;
  border-radius: 20px;
  width: 70%;
  text-align: center;
}
#footer_food {
  color: #dcdcdc;
  font-size: 30px;
  border-color: #ff7810;
  margin-top: 6%;
}
#footer_food_cal {
  color: #dcdcdc;
  margin-bottom: 5%;
  font-size: 30px;
  height: 100%;
}
#card_body {
  height: 200px;
}
#detail_pro_food {
  height: 120px;
}
#foot_h {
  height: 50px;
}
#total_e {
  margin-top: 30%;
  font-size: 68px;
  color: #ff7810;
}
#total_t {
  font-size: 52px;
  color: #6f717b;
}
#total_m {
  font-size: 60px;
  color: #dcdcdc;
}
#button_next {
  width: 80%;
  background-color: #ff7810;
  border-color: #ff7810;
  color: #dcdcdc;
  font-size: 30px;
  height: 10%;
}
</style>

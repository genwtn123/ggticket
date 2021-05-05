<template>
  <v-container>
    <v-card flat color="#000000">
      <v-card-text>
        <v-row>
          <v-card-title
            ><div class="column spacetop ml-9 mr-9 mb-5">
              <v-row class="title_food_e">Food & Beverage</v-row>
              <v-row class="title_food_t"
                >เลือกอาหาร และเครื่องดื่มเพิ่มเติม</v-row
              >
            </div></v-card-title
          >
          <v-col cols="9">
            <v-card color="#212835" flat shaped outlined>
              <v-card-text>
                <v-row>
                  <template v-for="food of this.food">
                    <v-col
                      cols="4"
                      :key="food.food_id"
                      v-if="food.food_status != 0"
                    >
                      <v-card id="card_food" class="card">
                        <div id="img_food" class="card-image">
                          <figure class="image is-1by1">
                            <img
                              v-bind:src="imagePath(food.food_image)"
                              alt="Placeholder image"
                            />
                          </figure>
                        </div>
                        <div id="card_body" class="card-content">
                          <div id="food" class="media">
                            <div class="media-content">
                              <p id="detail_pro_food" class="whitefont">
                                {{ food.food_name }}
                              </p>
                              <p class="whitefont">{{ food.food_price }} บาท</p>
                            </div>
                          </div>
                        </div>
                        <footer id="foot_h" class="card-footer">
                          <v-btn
                            id="footer_food_cal"
                            color="#ff7810"
                            dark
                            @click="revfood(food)"
                          >
                            -
                          </v-btn>
                          <p id="footer_food" class="card-footer-item">
                            {{ food.amount }}
                          </p>
                          <v-btn
                            id="footer_food_cal"
                            color="#ff7810"
                            dark
                            @click="addFood(food)"
                          >
                            +
                          </v-btn>
                        </footer>
                      </v-card>
                    </v-col>
                  </template>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3" style="position: -webkit-sticky; position: sticky"
            ><div id="final_food_cal">
              <p id="total_e">Total</p>
              <p id="total_t">ราคารวม</p>
              <p id="total_m">{{ this.totalprice }} บาท</p>
              <v-btn id="button_next" color="#ff7810" dark @click="nextpage()"
                >ต่อไป</v-btn
              >
            </div></v-col
          >
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import FoodService from "../service/FoodService";

export default {
  data() {
    return {
      image_popcorn:
        "https://www.syioknya.com/custom/picture/18240/syioknya1_5d95c544a07f7.png",
      image_coke:
        "https://i.pinimg.com/474x/65/37/ec/6537ecc2e7900a6076c8b28557d4e5c0.jpg",
      food: [],
      keep: [],
      totalprice:0
    };
  },
  mounted() {
    this.getFood();
  },
  methods: {
    async getFood() {
      // if(this.$store.getters.getmovie == ""){
      //   this.$router.push({name:'Movie'})
      // }
      try {
        let keep = await FoodService.getFood();
        console.log(this.$store.getters.getfood);
        for (let food of keep.data) {
          if (this.$store.getters.getfood != "") {
            for (let foood of this.$store.getters.getfood) {
              if (food.food_id === foood.food_id) {
                food.amount = foood.amount;
              }
            }
            if (food.amount == undefined) {
              food.amount = 0;
            }
          } else {
            food.amount = 0;
          }
        }
        this.food = keep.data;
        for (let food of this.food) {
          this.totalprice += food.food_price * food.amount;
        }
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
    addFood(food) {
      food.amount += 1;
      this.totalprice += food.food_price;
    },
    revfood(food) {
      if (food.amount > 0) {
        food.amount -= 1;
        this.totalprice -= food.food_price;
      }
    },
    nextpage() {
      for (let food of this.food) {
        if (food.amount > 0) {
          this.keep.push(food);
        }
      }
      this.$store.commit("keepfood", this.keep);
      this.$router.push({ name: "Buyticket" });
    },
  },
  computed: {},
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
  height: 120px;
}
#detail_pro_food {
  height: 50px;
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

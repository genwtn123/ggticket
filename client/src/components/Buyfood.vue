<template>
  <div class="containertop" :key="key">
    <div class="column">
      <p class="medfontblue">การชำระเงิน</p>
    </div>

    <div class="row">
      <div class="is-multiline columns is-variable is-8">
        <div id="card_product" class="column is-one-fifth m-5">
          <div class="card">
            <div class="card-image">
              <img v-bind:src="image_popcorn" alt="Placeholder image" />
            </div>
            <div class="media">
              <div class="media-content">
                <p class="smallfontblue">Popcorn Salted Caramel Lemon</p>
                <p class="medfont">200 Baht</p>
                <div>
                  <button @click="decrease(0, 200)" class="buttonMP">-</button>
                  <t class="fontcount">{{ amount[0] }}</t>
                  <button @click="increase(0, 200)" class="buttonMP">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="card_product" class="column is-one-fifth m-5">
          <div class="card">
            <div class="card-image">
              <img v-bind:src="image_coke" alt="Placeholder image" />
            </div>
            <div class="media">
              <div class="media-content">
                <p class="smallfontblue">Popcorn Salted Caramel Lemon</p>
                <p class="medfont">100 Baht</p>
                <div>
                  <button @click="decrease(1, 100)" class="buttonMP">-</button>
                  <t class="fontcount">{{ amount[1] }}</t>
                  <button @click="increase(1, 100)" class="buttonMP">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="card_product" class="column is-one-fifth m-5">
          <div class="card">
            <div class="card-image">
              <img v-bind:src="image_popcorn" alt="Placeholder image" />
            </div>
            <div class="media">
              <div class="media-content">
                <p class="smallfontblue">Popcorn Salted Caramel Lemon</p>
                <p class="medfont">200 Baht</p>
                <div>
                  <button @click="decrease(2, 200)" class="buttonMP">-</button>
                  <t class="fontcount">{{ amount[2] }}</t>
                  <button @click="increase(2, 200)" class="buttonMP">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="card_product" class="column is-one-fifth m-5">
          <div class="card">
            <div class="card-image">
              <img v-bind:src="image_coke" alt="Placeholder image" />
            </div>
            <div class="media">
              <div class="media-content">
                <p class="smallfontblue">Popcorn Salted Caramel Lemon</p>
                <p class="medfont">100 Baht</p>
                <div>
                  <button @click="decrease(3, 100)" class="buttonMP">-</button>
                  <t class="fontcount">{{ amount[3] }}</t>
                  <button @click="increase(3, 100)" class="buttonMP">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="card_product" class="column is-one-fifth m-5">
          <div class="card">
            <div class="card-image">
              <img v-bind:src="image_popcorn" alt="Placeholder image" />
            </div>
            <div class="media">
              <div class="media-content">
                <p class="smallfontblue">Popcorn Salted Caramel Lemon</p>
                <p class="medfont">200 Baht</p>
                <div>
                  <button @click="decrease(4, 200)" class="buttonMP">-</button>
                  <t class="fontcount">{{ amount[4] }}</t>
                  <button @click="increase(4, 200)" class="buttonMP">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="card_product" class="column is-one-two">
        <div class="card">
          <t class="fontverybig"> Payment Amount </t>
          <t class="fontverybigblue">
            {{ totalprice }}
          </t>
          <t class="fontverybig"> Baht </t>
        </div>
      </div>
      <div id="card_product" class="column is-one-two">
        <div class="card">
          <button class="buttoncon">Continue</button>
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
      image_coke: "https://i.ebayimg.com/images/g/M~kAAOSwWOJdneqZ/s-l400.jpg",
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
.containertop {
  margin-top: 40px;
}
.smallfontblue {
  font-size: 20px;
  color: #000080;
}
.medfont {
  font-size: 25px;
}
.buttonMP {
  border-radius: 2px solid;
  font-size: 25px;
  width: 50px;
}
.fontcount {
  font-size: 30px;
  margin: 25px;
}
.fontverybig {
  font-size: 40px;
  color: #000000;
}
.fontverybigblue {
  font-size: 40px;
  color: #000080;
}
.buttoncon {
  font-size: 28px;
  width: 50%;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 120px;
  color: white;
  background-color: #6495ed;
}
</style>

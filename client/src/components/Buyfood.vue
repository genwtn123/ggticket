<template>
  <div class="container" :key="key" style="margin-top:40px;">
    <div class="row">
      <div class="column m-5" style="height: 50px; text-align: center">
        <p style="font-size: 25px; color: #000080">
          ชุดป๊อปคอร์นและเครื่องดื่ม
        </p>
      </div>

      <div class="is-multiline columns is-variable is-8">
        <div id="card_product" class="column is-one-fifth m-5">
          <div class="card">
            <div class="card-image" style="width: 250px">
              <img v-bind:src="image_popcorn" alt="Placeholder image" />
            </div>
            <div class="media">
              <div class="media-content" style="text-align: center">
                <p style="font-size: 20px; color: #000080">
                  Popcorn Salted Caramel Lemon
                </p>
                <p style="font-size: 25px">200 Baht</p>
                <div style="margin-top: 20px">
                  <button
                    @click="decrease(0, 200)"
                    style="border-radius: 2px; font-size: 25px; width: 50px"
                  >
                    -
                  </button>
                  <t style="font-size: 30px; margin: 25px">{{ amount[0] }}</t>
                  <button
                    @click="increase(0, 200)"
                    style="border-radius: 2px; font-size: 25px; width: 50px"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="card_product" class="column is-one-fifth m-5">
          <div class="card">
            <div class="card-image" style="width: 250px">
              <img v-bind:src="image_coke" alt="Placeholder image" />
            </div>
            <div class="media">
              <div class="media-content" style="text-align: center">
                <p style="font-size: 20px; color: #000080">
                  Popcorn Salted Caramel Lemon
                </p>
                <p style="font-size: 25px">100 Baht</p>
                <div style="margin-top: 20px">
                  <button
                    @click="decrease(1, 100)"
                    style="border-radius: 2px; font-size: 25px; width: 50px"
                  >
                    -
                  </button>
                  <t style="font-size: 30px; margin: 25px">{{ amount[1] }}</t>
                  <button
                    @click="increase(1, 100)"
                    style="border-radius: 2px; font-size: 25px; width: 50px"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="card_product" class="column is-one-fifth m-5">
          <div class="card">
            <div class="card-image" style="width: 250px">
              <img v-bind:src="image_popcorn" alt="Placeholder image" />
            </div>
            <div class="media">
              <div class="media-content" style="text-align: center">
                <p style="font-size: 20px; color: #000080">
                  Popcorn Salted Caramel Lemon
                </p>
                <p style="font-size: 25px">200 Baht</p>
                <div style="margin-top: 20px">
                  <button
                    @click="decrease(2, 200)"
                    style="border-radius: 2px; font-size: 25px; width: 50px"
                  >
                    -
                  </button>
                  <t style="font-size: 30px; margin: 25px">{{ amount[2] }}</t>
                  <button
                    @click="increase(2, 200)"
                    style="border-radius: 2px; font-size: 25px; width: 50px"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="card_product" class="column is-one-fifth m-5">
          <div class="card">
            <div class="card-image" style="width: 250px">
              <img v-bind:src="image_coke" alt="Placeholder image" />
            </div>
            <div class="media">
              <div class="media-content" style="text-align: center">
                <p style="font-size: 20px; color: #000080">
                  Popcorn Salted Caramel Lemon
                </p>
                <p style="font-size: 25px">100 Baht</p>
                <div style="margin-top: 20px">
                  <button
                    @click="decrease(3, 100)"
                    style="border-radius: 2px; font-size: 25px; width: 50px"
                  >
                    -
                  </button>
                  <t style="font-size: 30px; margin: 25px">{{ amount[3] }}</t>
                  <button
                    @click="increase(3, 100)"
                    style="border-radius: 2px; font-size: 25px; width: 50px"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="card_product" class="column is-one-fifth m-5">
          <div class="card">
            <div class="card-image" style="width: 250px">
              <img v-bind:src="image_popcorn" alt="Placeholder image" />
            </div>
            <div class="media">
              <div class="media-content" style="text-align: center">
                <p style="font-size: 20px; color: #000080">
                  Popcorn Salted Caramel Lemon
                </p>
                <p style="font-size: 25px">200 Baht</p>
                <div style="margin-top: 20px">
                  <button
                    @click="decrease(4, 200)"
                    style="border-radius: 2px; font-size: 25px; width: 50px"
                  >
                    -
                  </button>
                  <t style="font-size: 30px; margin: 25px">{{ amount[4] }}</t>
                  <button
                    @click="increase(4, 200)"
                    style="border-radius: 2px; font-size: 25px; width: 50px"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="card_product" class="column is-one-two">
        <div class="card">
            <t style="font-size: 40px; color: #000000">
              Payment Amount
            </t>
            <t style="font-size: 40px; color: #000080">
             {{ totalprice }}
            </t>
            <t style="font-size: 40px; color: #000000">
              Baht
            </t>
        </div>
      </div>
      <div id="card_product" class="column is-one-two">
        <div class="card">
          <button
            style="
              font-size: 28px;
              width: 50%;
              height: 40px;
              margin-top: 20px;
              margin-bottom: 120px;
              color: white;
              background-color: #6495ed;
            "
          >
            Continue
          </button>
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
</style>

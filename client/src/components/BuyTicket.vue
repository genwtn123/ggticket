<template>
  <div class="containertop">
    <div class="column">
      <p class="medfontblue">การชำระเงิน</p>
    </div>

    <div class="column">
      <img v-bind:src="image_movie" class="bigimg" />
      <p class="verybigfontbluespace">THE SPONGEBOB MOVIE SPONGE ON THE RUN</p>
      <div class="medfontspace">
        <t>1-April-2021 | 9.00</t>
        <t class="theater">Theater 1 | ไทย</t><br />
      </div>
      <div class="spacetop">
        <t class="medfont">Seat </t>
        <t class="bigfontblueleft">B10</t>
      </div>
      <div class="spacetop">
        <t class="medfont margin-top:20px;">Total price</t>
        <t class="bigfontblueleft">200</t>
        <t class="bigfontleft">Baht</t>
      </div>
    </div>
    <div class="bar"></div>

    <div class="spaceimg">
      <img v-bind:src="image_promotion" />
    </div>

    <div class="is-multiline columns is-variable is-8 mt-3">
      <div id="card_product" class="column is-one-two">
        <div class="card">
          <div class="media">
            <div class="media-content">
              <p class="bigfont">Payment Amount</p>
              <p class="bigfont">200 Baht</p>
            </div>
          </div>
        </div>
      </div>
      <div id="card_product" class="column is-one-two">
        <div class="card">
          <button class="buttonpay">PAYMENT(200)</button>
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
        "https://thumbnails.cbsig.net/_x/w370/CBS_Production_Entertainment_VMS/SOTR_SAlone_Poster_1400x2100.jpg",
      image_promotion:
        "https://lh3.googleusercontent.com/YKAeRCXjkMkl3lsRC-7uW8d3nK6tfXrEqqG3OvueE490zxK-3PhUmp1wA74Ey7kOOj9zHJIx135WsVVnrAxtziyrrI22xxss=w945",
    };
  },
  methods: {},
};
</script>

<style>
.containertop {
  margin-top: 40px;
}
.medfontblue {
  font-size: 25px;
  color: #000080;
}
.bigimg {
  width: 300px;
  height: 350px;
}
.verybigfontbluespace {
  font-size: 35px;
  color: #000080;
  margin-top: 30px;
}
.medfontspace {
  margin-top: 20px;
  font-size: 25px;
}
.spacetop {
  margin-top: 20px;
}
.theater {
  margin-left: 20%;
}
.medfont {
  font-size: 25px;
}
.bigfontblueleft {
  margin-left: 20px;
  font-size: 30px;
  color: #000080;
}
.bigfontleft {
  margin-left: 20px;
  font-size: 30px;
}
.bar {
  height: 50px;
  background-color: #6495ed;
}
.spaceimg {
  margin-top: 40px;
  margin-left: 10%;
}
.bigfont {
  font-size: 30px;
}
.buttonpay {
  width: 350px;
  height: 50px;
  font-size: 30px;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 120px;
  background-color: #6495ed;
  color: white;
}
</style>

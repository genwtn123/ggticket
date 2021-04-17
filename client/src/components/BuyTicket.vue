<template>
  <div class="container">
    <div class="row">
      <div class="column mt-5" style="height: 50px; text-align: center">
        <p style="font-size: 25px; color: #000080">การชำระเงิน</p>
      </div>

      <div class="column mt-5" style="margin-left: 200px">
        <img v-bind:src="image_movie" style="width: 300px; height: 370px" />
        <t
          style="
            margin-left: 50px;
            font-size: 25px;
            position: absolute;
            top: 120px;
            color: #000080;
          "
          >THE SPONGEBOB MOVIE SPONGE ON THE RUN</t
        >
        <t
          style="
            margin-left: 50px;
            font-size: 20px;
            position: absolute;
            top: 200px;
          "
          >1-April-2021 | 9.00</t
        >
        <t
          style="
            margin-left: 50px;
            font-size: 20px;
            position: absolute;
            top: 240px;
          "
          >Theater 1 | ไทย</t
        >
        <t
          style="
            margin-left: 50px;
            font-size: 20px;
            position: absolute;
            left: 900px;
            top: 200px;
          "
          >Seat</t
        >
        <t
          style="
            margin-left: 50px;
            font-size: 25px;
            position: absolute;
            top: 240px;
            left: 900px;
            color: #000080;
          "
          >B10</t
        >
        <t
          style="
            margin-left: 50px;
            font-size: 20px;
            position: absolute;
            top: 340px;
          "
          >Total price</t
        >
        <t
          style="
            margin-left: 50px;
            font-size: 25px;
            position: absolute;
            top: 380px;
            color: #000080;
          "
          >200 Baht</t
        >
      </div>
      <div style="height: 50px; background-color: #6495ed"></div>

      <div style="margin-top: 40px; margin-left: 200px">
        <img v-bind:src="image_promotion" style="" />
      </div>
      
      <div class="is-multiline columns is-variable is-8 mt-3">
        <div id="card_product" class="column is-one-two">
          <div class="card">
            <div class="media">
              <div class="media-content" style="margin-left:100px; text-align: center">
                <p style="font-size: 25px">
                  Payment Amount
                </p>
                <p style="font-size: 20px">200 Baht</p>
              </div>
            </div>
          </div>
        </div>
        <div id="card_product" class="column is-one-two">
          <div class="card">
            <button style="width:350px; height:50px; font-size:25px; border-radius: 4px; background-color:#6495ed; color: white;">PAYMENT(200)</button>
          </div>
        </div>
    </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";

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
</style>

<template>
  <div class="container" style="margin-top: 40px">
    <div class="column" style="height: 50px; text-align: center">
      <p style="font-size: 25px; color: #000080">การชำระเงิน</p>
    </div>

    <div class="column mt-5">
      <img v-bind:src="image_movie" style="width: 300px; height: 350px" />
      <p style="font-size: 35px; color: #000080; margin-top: 30px">THE SPONGEBOB MOVIE SPONGE ON THE RUN</p>
        <div style="margin-left:420px; text-align: left; margin-top: 20px; left; font-size: 25px;">
        <t>1-April-2021 | 9.00</t>
        <t style="margin-left:20%">Theater 1 | ไทย</t><br>
        </div>
        <div style="margin-left:420px; text-align: left; margin-top: 20px;">
        <t style="font-size: 25px;">Seat </t>
        <t style="margin-left:20px; font-size: 30px; color: #000080">B10</t>
        </div>
        <div style="margin-left:420px; text-align: left; margin-top: 20px;">
        <t style="font-size: 25px; margin-top:20px;">Total price</t>
        <t style="margin-left:20px; font-size: 30px; color: #000080">200</t>
        <t style="margin-left:20px; font-size: 30px;">Baht</t>
        </div>
    </div>
    <div style="height: 50px; background-color: #6495ed"></div>

    <div style="margin-top: 40px; margin-left: 200px">
      <img v-bind:src="image_promotion" style="" />
    </div>

    <div class="is-multiline columns is-variable is-8 mt-3">
      <div id="card_product" class="column is-one-two">
        <div class="card">
          <div class="media">
            <div
              class="media-content"
              style="margin-left: 100px; text-align: center"
            >
              <p style="font-size: 30px">Payment Amount</p>
              <p style="font-size: 30px">200 Baht</p>
            </div>
          </div>
        </div>
      </div>
      <div id="card_product" class="column is-one-two">
        <div class="card">
          <button
            style="
              width: 350px;
              height: 50px;
              font-size: 30px;
              border-radius: 4px;
              margin-top: 20px;
              margin-bottom: 120px;
              background-color: #6495ed;
              color: white;
            "
          >
            PAYMENT(200)
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

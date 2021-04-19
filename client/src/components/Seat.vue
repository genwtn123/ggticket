<template>
  <div class="container" style="margin-top: 40px">
    <div class="column" style="height: 50px; text-align: center">
      <p style="font-size: 25px; color: #000080">เลือกที่นั่ง</p>
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
    
    <div class="column mt-5">
        <img v-bind:src="image_chair" style="width: 50px; height: 60px" /><br>
        <t>Executive</t><br>
        <t>350 บาท</t>
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
      image_chair:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgj214E-GjyvwtFtiRpa8AJIg5n1nbHMa0A&usqp=CAU"
    };
  },
  methods: {},
};
</script>

<style>
</style>

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
        </div>
    </div>
    <div style="height: 50px; background-color: #6495ed"></div>
    
    <div class="column mt-5">
        <img v-bind:src="image_chair" style="height: 60px" /><br>
        <t>Executive</t><br>
        <t>200 บาท</t>
    </div>

    <div class="row">
    <div class="column-33" style="font-size:40px; margin-right:5%; color:gray">
    <p>H</p>
    <p>G</p>
    <p>F</p>
    <p>E</p>
    <p>D</p>
    <p>C</p>
    <p>B</p>
    <p>A</p>
    </div>
    <div class="column-33 mt-1">
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    </div>
    <div class="column-33 mt-1">
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    </div>
    <div class="column-33 mt-1">
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    </div>
    <div class="column-33 mt-1">
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    </div>
    <div class="column-33 mt-1">
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    </div>
    <div class="column-33 mt-1">
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    </div>
    <div class="column-33 mt-1">
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    </div>
    <div class="column-33 mt-1">
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    </div>
    <div class="column-33 mt-1">
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    </div>
    <div class="column-33 mt-1">
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    </div>
    <div class="column-33 mt-1">
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    </div>
    <div class="column-33 mt-1">
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    </div>
    <div class="column-33 mt-1">
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    </div>
    <div class="column-33 mt-1">
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    </div>
    <div class="column-33 mt-1">
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    <img v-bind:src="image_chair" style="height: 50px; margin:5px; margin-top:12px;" /><br>
    </div>
    <div class="column mt-1">
    <img v-bind:src="image_movie" style="width: 250px; height: 300px" />
    <p style="font-size: 20px;">ที่นั่งที่เลือก</p>
    <p style="font-size: 25px; color: #000080;">A1 A2 A3 H2 D2 E3 C4 D5 D6 D7 B3 E10</p>
    <p style="font-size: 20px;">ราคารวม</p>
    <p style="font-size: 25px; color: #000080;">2400 Baht</p>
     <button
            style="
              width: 250px;
              height: 50px;
              font-size: 30px;
              border-radius: 4px;
              margin-top: 20px;
              margin-bottom: 120px;
              background-color: #6495ed;
              color: white;
            "
          >
            Continue
          </button>
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
      image_chair:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgj214E-GjyvwtFtiRpa8AJIg5n1nbHMa0A&usqp=CAU"
    };
  },
  methods: {},
};
</script>

<style>
</style>

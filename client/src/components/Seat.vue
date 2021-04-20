<template>
  <div class="containertop">
    <div class="column">
      <p class="medfontblue">เลือกที่นั่ง</p>
    </div>

    <div class="column mt-5">
      <img class="bigimg" v-bind:src="image_movie" />
      <p class="movie">THE SPONGEBOB MOVIE SPONGE ON THE RUN</p>
      <div class="date">
        <t>1-April-2021 | 9.00</t>
        <t class="theater">Theater 1 | ไทย</t><br />
      </div>
    </div>
    <div class="bar"></div>

    <div class="column mt-5">
      <img v-bind:src="image_chair" class="chairtop" /><br />
      <t>Executive</t><br />
      <t>200 บาท</t>
    </div>

    <div class="row">
      <div
        class="column-33 seatalpha"
      >
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
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
      </div>
      <div class="column-33 mt-1">
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
      </div>
      <div class="column-33 mt-1">
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
      </div>
      <div class="column-33 mt-1">
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
      </div>
      <div class="column-33 mt-1">
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
      </div>
      <div class="column-33 mt-1">
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
      </div>
      <div class="column-33 mt-1">
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
      </div>
      <div class="column-33 mt-1">
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
      </div>
      <div class="column-33 mt-1">
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
      </div>
      <div class="column-33 mt-1">
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
      </div>
      <div class="column-33 mt-1">
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
      </div>
      <div class="column-33 mt-1">
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
      </div>
      <div class="column-33 mt-1">
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
      </div>
      <div class="column-33 mt-1">
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
      </div>
      <div class="column-33 mt-1">
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
        <img class="img-pro" v-bind:src="image_chair" /><br />
      </div>
      <div class="column mt-1">
        <img v-bind:src="image_movie" class="imageright" />
        <p class="fontsmall">ที่นั่งที่เลือก</p>
        <p class="medfontblue">
          A1 A2 A3 H2 D2 E3 C4 D5 D6 D7 B3 E10
        </p>
        <p class="fontsmall">ราคารวม</p>
        <p class="medfontblue">2400 Baht</p>
        <button class="buttoncon">Continue</button>
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgj214E-GjyvwtFtiRpa8AJIg5n1nbHMa0A&usqp=CAU",
    };
  },
  methods: {},
};
</script>

<style>
.img-pro {
  height: 50px;
  margin: 5px;
  margin-top: 12px;
}
.buttoncon {
  width: 250px;
  height: 50px;
  font-size: 30px;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 120px;
  background-color: #6495ed;
  color: white;
}
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
.movie {
  font-size: 35px;
  color: #000080;
  margin-top: 30px;
}
.date {
  margin-top: 20px;
  font-size: 25px;
}
.theater{
  margin-left: 20%
}
.bar{
  height: 50px; background-color: #6495ed
}
.chairtop{
  height: 60px
}
.seatalpha{
  font-size: 40px; margin-right: 5%; color: gray
}
.imageright{
  width: 250px; height: 300px
}
.fontsmall{
  font-size: 20px
}
</style>

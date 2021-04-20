<template>
  <div class="containertop">
    <div class="column">
      <p class="medfontblue">ซื้อตั๋วหนัง</p>
    </div>
    <div class="row">
      <div class="column-33">
        <img v-bind:src="image" class="bigimg" />
      </div>
      <div class="column-66 texttop">
        <t>Movie</t>
        <t class="name">THE SPONGEBOB MOVIE SPONGE ON THE RUN</t><br />
        <div class="space">
          <t>Movie category</t>
          <t class="name">CARTOON</t><br />
        </div>
        <div class="space">
          <t>Director</t>
          <t class="name">John Son, Alice, Jame</t>
        </div>
      </div>

      <div class="bar">
        <t class="firstfontdate">Date 1-Apr-2021</t>
        <t class="otherfontdate">Date 2-Apr-2021</t>
        <t class="otherfontdate">Date 3-Apr-2021</t>

        <div class="column borderbot">
          <div class="row">
            <div class="column-33">
              <img v-bind:src="image" class="smallimg" />
            </div>
            <div class="column-66 spacetext">
              <p class="bigfontblue">Theater</p>
              <p class="bigfontbluespace">1</p>
            </div>
            <div class="column-66 spacetext">
              <p class="bigfontblue">Movie</p>
              <p class="bigfontbluespace">spongbob movie</p>
            </div>
            <div class="column-66 spacetext">
              <p class="bigfontblue">Times</p>
              <p class="bigfontbluespace">9.00-11.00</p>
            </div>
            <div class="column-66 spacetext">
              <p class="bigfontblue">Languge</p>
              <p class="bigfontbluespace">ไทย</p>
            </div>
          </div>
        </div>

        <div class="column borderbot">
          <div class="row">
            <div class="column-33">
              <img v-bind:src="image" class="smallimg" />
            </div>
            <div class="column-66 spacetext">
              <p class="bigfontblue">Theater</p>
              <p class="bigfontbluespace">1</p>
            </div>
            <div class="column-66 spacetext">
              <p class="bigfontblue">Movie</p>
              <p class="bigfontbluespace">spongbob movie</p>
            </div>
            <div class="column-66 spacetext">
              <p class="bigfontblue">Times</p>
              <p class="bigfontbluespace">9.00-11.00</p>
            </div>
            <div class="column-66 spacetext">
              <p class="bigfontblue">Languge</p>
              <p class="bigfontbluespace">ไทย</p>
            </div>
          </div>
        </div>

        <div class="column borderbot">
          <div class="row">
            <div class="column-33">
              <img v-bind:src="image" class="smallimg" />
            </div>
            <div class="column-66 spacetext">
              <p class="bigfontblue">Theater</p>
              <p class="bigfontbluespace">1</p>
            </div>
            <div class="column-66 spacetext">
              <p class="bigfontblue">Movie</p>
              <p class="bigfontbluespace">spongbob movie</p>
            </div>
            <div class="column-66 spacetext">
              <p class="bigfontblue">Times</p>
              <p class="bigfontbluespace">9.00-11.00</p>
            </div>
            <div class="column-66 spacetext">
              <p class="bigfontblue">Languge</p>
              <p class="bigfontbluespace">ไทย</p>
            </div>
          </div>
        </div>

        <div class="column borderbot">
          <div class="row">
            <div class="column-33">
              <img v-bind:src="image" class="smallimg" />
            </div>
            <div class="column-66 spacetext">
              <p class="bigfontblue">Theater</p>
              <p class="bigfontbluespace">1</p>
            </div>
            <div class="column-66 spacetext">
              <p class="bigfontblue">Movie</p>
              <p class="bigfontbluespace">spongbob movie</p>
            </div>
            <div class="column-66 spacetext">
              <p class="bigfontblue">Times</p>
              <p class="bigfontbluespace">9.00-11.00</p>
            </div>
            <div class="column-66 spacetext">
              <p class="bigfontblue">Languge</p>
              <p class="bigfontbluespace">ไทย</p>
            </div>
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
      image:
        "https://thumbnails.cbsig.net/_x/w370/CBS_Production_Entertainment_VMS/SOTR_SAlone_Poster_1400x2100.jpg",
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
  margin: 20px;
  width: 300px;
  height: 350px;
}
.texttop {
  text-align: left;
  margin: 20px;
  font-size: 30px;
}
.name {
  margin-left: 50px;
  color: #000080;
}
.space {
  margin-top: 80px;
}
.bar {
  width: 100%;
  height: 50px;
  background-color: #6495ed;
}
.firstfontdate {
  margin-left: 50px;
  font-size: 30px;
}
.otherfontdate {
  margin-left: 50px;
  font-size: 30px;
  margin-left: 20%;
}
.smallimg {
  width: 180px;
  height: 180px;
}
.borderbot {
  height: 200px;
  margin: 20px;
  border-bottom: 3px solid;
}
.spacetext {
  margin-left: 100px;
}
.bigfontblue {
  font-size: 30px;
  color: #000080;
}
.bigfontbluespace {
  color: #000080;
  margin-top: 50px;
  font-size: 30px;
}
</style>

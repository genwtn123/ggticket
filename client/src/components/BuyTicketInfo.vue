<template>
  <v-container style="margin-top: 40px" >
    <div class="mt-5" style="height: 50px; text-align: center">
      <p style="font-size: 25px; color: #000080">ซื้อตั๋วหนัง</p>
    </div>
    <div class="row" style="width: 100%; height: 400px;">
      <div class="column-33">
        <img
          v-bind:src="image"
          style="margin: 20px; width: 300px; height: 350px"
        />
      </div>
      <div
        class="column-66"
        style="text-align: left; margin: 20px; font-size: 30px"
      >
        <t>Movie</t>
        <t style="margin-left: 50px; color: #000080"
          >THE SPONGEBOB MOVIE SPONGE ON THE RUN</t
        ><br />
        <div style="margin-top: 80px">
          <t>Movie category</t>
          <t style="margin-left: 50px; color: #000080">CARTOON</t><br />
        </div>
        <div style="margin-top: 80px">
          <t>Director</t>
          <t style="margin-left: 50px; color: #000080">John Son, Alice, Jame</t>
        </div>
      </div>

      <div style="width: 100%; height: 50px; background-color: #6495ed">
        <t style="margin-left: 50px; font-size: 30px">Date 1-Apr-2021</t>
        <t style="margin-left: 50px; font-size: 30px; margin-left: 20%"
          >Date 2-Apr-2021</t
        >
        <t style="margin-left: 50px; font-size: 30px; margin-left: 20%"
          >Date 3-Apr-2021</t
        >
        
        <div class="column" style="height: 200px; margin:20px; border-bottom: 3px solid">
          <div class="row">
            <div class="column-33">
              <img v-bind:src="image" style="width: 180px; height: 180px" />
            </div>
            <div class="column-66" style="margin-left: 100px">
              <p style="font-size: 30px; color: #000080">Theater</p>
              <p style="margin-top:50px; color: #000080; font-size: 30px">1</p>
            </div>
            <div class="column-66" style="margin-left: 100px">
              <p style="font-size: 30px; color: #000080">Movie</p>
              <p style="margin-top:50px; color: #000080; font-size: 30px">spongbob movie</p>
            </div>
            <div class="column-66" style="margin-left: 100px">
              <p style="font-size: 30px; color: #000080">Times</p>
              <p style="margin-top:50px; color: #000080; font-size: 30px">9.00-11.00</p>
            </div>
            <div class="column-66" style="margin-left: 100px">
              <p style="font-size: 30px; color: #000080">Languge</p>
              <p style="margin-top:50px; color: #000080; font-size: 30px">ไทย</p>
            </div>
          </div>
        </div>

        <div class="column" style="height: 200px; margin:20px; border-bottom: 3px solid">
          <div class="row">
            <div class="column-33">
              <img v-bind:src="image" style="width: 180px; height: 180px" />
            </div>
            <div class="column-66" style="margin-left: 100px">
              <p style="font-size: 30px; color: #000080">Theater</p>
              <p style="color: #000080; margin-top:50px; font-size: 30px">1</p>
            </div>
            <div class="column-66" style="margin-left: 100px">
              <p style="font-size: 30px; color: #000080">Movie</p>
              <p style="color: #000080; margin-top:50px; font-size: 30px">spongbob movie</p>
            </div>
            <div class="column-66" style="margin-left: 100px">
              <p style="font-size: 30px; color: #000080">Times</p>
              <p style="color: #000080; margin-top:50px; font-size: 30px">9.00-11.00</p>
            </div>
            <div class="column-66" style="margin-left: 100px">
              <p style="font-size: 30px; color: #000080">Languge</p>
              <p style="color: #000080; margin-top:50px; font-size: 30px">ไทย</p>
            </div>
          </div>
        </div>

        <div class="column" style="height: 200px; margin:20px; border-bottom: 3px solid">
          <div class="row">
            <div class="column-33">
              <img v-bind:src="image" style="width: 180px; height: 180px" />
            </div>
            <div class="column-66" style="margin-left: 100px">
              <p style="font-size: 30px; color: #000080">Theater</p>
              <p style="color: #000080; margin-top:50px; font-size: 30px">1</p>
            </div>
            <div class="column-66" style="margin-left: 100px">
              <p style="font-size: 30px; color: #000080">Movie</p>
              <p style="color: #000080; margin-top:50px; font-size: 30px">spongbob movie</p>
            </div>
            <div class="column-66" style="margin-left: 100px">
              <p style="font-size: 30px; color: #000080">Times</p>
              <p style="color: #000080; margin-top:50px; font-size: 30px">9.00-11.00</p>
            </div>
            <div class="column-66" style="margin-left: 100px">
              <p style="font-size: 30px; color: #000080">Languge</p>
              <p style="color: #000080; margin-top:50px; font-size: 30px">ไทย</p>
            </div>
          </div>
        </div>

        <div class="column" style="height: 200px; margin:20px; border-bottom: 3px solid;">
          <div class="row">
            <div class="column-33">
              <img v-bind:src="image" style="width: 180px; height: 180px" />
            </div>
            <div class="column-66" style="margin-left: 100px">
              <p style="font-size: 30px; color: #000080">Theater</p>
              <p style="color: #000080; margin-top:50px; font-size: 30px">1</p>
            </div>
            <div class="column-66" style="margin-left: 100px">
              <p style="font-size: 30px; color: #000080">Movie</p>
              <p style="color: #000080; margin-top:50px; font-size: 30px">spongbob movie</p>
            </div>
            <div class="column-66" style="margin-left: 100px">
              <p style="font-size: 30px; color: #000080">Times</p>
              <p style="color: #000080; margin-top:50px; font-size: 30px">9.00-11.00</p>
            </div>
            <div class="column-66" style="margin-left: 100px">
              <p style="font-size: 30px; color: #000080">Languge</p>
              <p style="color: #000080; margin-top:50px; font-size: 30px">ไทย</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      image:
        "https://thumbnails.cbsig.net/_x/w370/CBS_Production_Entertainment_VMS/SOTR_SAlone_Poster_1400x2100.jpg",
    };
  },
  methods: {

  },
};
</script>

<style>
</style>

<template>
  <v-fluid>
    <p class="home_head">RECOMMEND MOVIE FOR YOU</p>
    <div class="scrolling-wrapper">
      <div class="card home_card"></div>
      <div class="card home_card"></div>
      <div class="card home_card"></div>
      <div class="card home_card"></div>
      <div class="card home_card"></div>
      <div class="card home_card"></div>
      <div class="card home_card"></div>
      <div class="card home_card"></div>
      <div class="card home_card"></div>
    </div>
  </v-fluid>
</template>

<style>
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

.home_card {
  display: inline-block;
  width: 20%;
  margin: 2%;
  height: 400px;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

<script>
export default {
  setup() {},
};
</script>


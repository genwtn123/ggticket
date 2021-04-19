<template >
  <div id="nav">
    <v-app-bar app color="primary">
      <router-link to="/" class="pr-5" >Home</router-link>
      <router-link to="/login" class="pr-5" >Login</router-link>
      <router-link to="/register" class="pr-5">Register</router-link>
      <router-link to="/buyticket"  class="pr-5">BuyTicket</router-link>
      <router-link to="/buyticketinfo" class="pr-5">BuyTicketInfo</router-link>
      <router-link to="/buyfood" class="pr-5">Buyfood</router-link>
      <router-link to="/promotion" class="pr-5">Promotion</router-link>
      <router-link to="/seat">Seat</router-link>
    </v-app-bar>
  </div>
</template>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

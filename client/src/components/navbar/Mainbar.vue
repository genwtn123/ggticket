<template >
  <div id="nav">
    <v-app-bar app color="primary">
      <router-link to="/" class="pr-5" >Home</router-link>
      <router-link to="/login" class="pr-5" >Login</router-link>
      <router-link to="/register">Register</router-link>
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
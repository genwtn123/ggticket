<template>
  <div id="app">
    <v-app>
    <Mainbar/>
    <v-container>
    <!-- <Login/> -->
    <!-- <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/login">login</router-link> |
      <router-link to="/hello">hello</router-link>
    </div> -->
    <router-view/>
    </v-container>
    </v-app>
  </div>
</template>
<script>

import Mainbar from '@/components/navbar/Mainbar'
// import Login from '../src/components/Login'

export default {
  name: 'Home',
  components: {
    Mainbar,
    // Login
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

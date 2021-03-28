<template >
  <v-container>
    <v-app>
      
      <form>
        <!-- Sizes your content based upon application components -->
        <v-main>
          
          <!-- Provides the application the proper gutter -->
          <div>
            <span style="font-size: 20px"><b>LOGIN</b></span>
            <v-text-field
              label="Username"
              hide-details="auto"
              v-model="username"
              required
            ></v-text-field>
            <v-text-field v-model="password" label="Password" required></v-text-field>
          </div>
          <!-- If using vue-router -->
          <button class="button is-info" type="submit" @click="login">Submit</button>
        </v-main>

        <v-footer app> </v-footer>
      </form>
    </v-app>
  </v-container>
</template>

<script>

export default {
  name: "LOGIN",
  components:{

  },
  data: () => ({
    username:"",
    password:"",
    error: null
  }),
  methods:{
    async login(){
      // try{
      //   await AuthenticationService.register({
      //     username:this.username,
      //     password:this.password
      //   })
      // }catch(error){
      //   this.error = error.response.data.error
      // }

    }
  }
};
</script>

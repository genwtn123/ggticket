<template >
  <v-container>
    <v-app>
      
      <form @submit="createAccount" method="POST">
        <!-- Sizes your content based upon application components -->
        <v-main>
          
          <!-- Provides the application the proper gutter -->
          <div>
            <span style="font-size: 20px"><b>REGISTER</b></span>
            <v-text-field
              v-model = "username"
              label="Username"
              hide-details="auto"
              required
            ></v-text-field>
            <v-text-field label="Password" type="password" v-model='password' required></v-text-field>
            <v-text-field label="firstname" v-model='user_fname' required></v-text-field>
            <v-text-field label="lastname" v-model='user_lname' required></v-text-field>
            <v-text-field label="Tel" v-model='user_tel' required></v-text-field>
            <v-text-field label="Email" v-model='user_email' required></v-text-field>
            <v-select v-model="type"
            :items="item"
            label="Type"
            solo
            ></v-select>
            <v-text-field label="Code" v-model='admin_code'></v-text-field>
          </div>
          <!-- If using vue-router -->
          <button class="button is-info" type="submit" >Submit</button>
        </v-main>

        <v-footer app> </v-footer>
      </form>
    </v-app>
  </v-container>
</template>

<script>
import AccountService from '../service/AccountService';
export default {
  name: 'Register',
  data() {
    return {
      username:'',
      password:'',
      user_fname:'',
      user_lname:'',
      user_email:'',
      user_tel:'',
      type:"",
      item:['Staff', 'Audience'],
      admin_code:''
    }
  },
  props:['msg'],
  methods:{
    createForm:function(){
      let form = new FormData();
      form.append('username', this.username);
      form.append('password', this.password);
      form.append('user_fname', this.user_fname);
      form.append('user_lname', this.user_lname);
      form.append('user_tel', this.user_tel);
      form.append('user_email', this.user_email);
      form.append('type', this.type)
      return form
    },
    async createAccount(e){
      if(this.admin_code == 'a13579' || this.type == 'Customer'){
      e.preventDefault();
      var result = await AccountService.createAccount(this.createForm());
      console.log("res", result.status)
      if (result.status == 200){
        console.log('success by vuejs');
        this.clearForm();
      }else{
        alert("err")
      }
      }else{
        alert("try again")
      }
    },
    clearForm:function(){
      alert("REGISTER SUCCESS")
      this.username = '',
      this.password = '',
      this.user_fname='',
      this.user_lname='',
      this.user_email='',   
      this.user_tel='',
      this.type=''
    },
  },
}
</script>

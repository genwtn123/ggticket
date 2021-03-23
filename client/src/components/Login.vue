<template >
      <form>
        <Mainbar/>
        <!-- Sizes your content based upon application components -->
        <v-main>
          <!-- Provides the application the proper gutter -->
          <div>
            <span style="font-size: 20px"><b>LOGIN</b></span>
            <v-text-field
              label="Username"
              name="username"
              hide-details="auto"
              required
            ></v-text-field>
            <v-text-field label="Password" required></v-text-field>
          </div>
          <!-- If using vue-router -->
          <button class="button is-info" type="submit">Submit</button>
        </v-main>

        <v-footer app> </v-footer>
      </form>
</template>

<script>
import Mainbar from '../components/navbar/Mainbar'
export default {
  name: "Login",
  components:{
    Mainbar
  },
  data: () => ({}),
};
</script>

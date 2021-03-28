<template >
  <v-container>
    <v-app>
      
      <form>
        <!-- Sizes your content based upon application components -->
        <v-main>
          
          <!-- Provides the application the proper gutter -->
          <div>
            <span style="font-size: 20px"><b>REGISTER</b></span>
            <v-text-field
              label="Username"
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
    </v-app>
  </v-container>
</template>

<script>

export default {
  name: "Register",
  components:{

  },
  data: () => ({}),
};
</script>

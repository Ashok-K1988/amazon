<template>
  <v-container fill-height>
    <v-layout row wrap align-center>
      <v-flex>
        <v-card width="1080px" class="mx-auto" height="422px" style="font-family:Apple Chancery, cursive; font-size:12px;">
          <v-row class="mx-auto rounded-lg">
            <v-col style="background-color:#dde4ff">
              <v-img src="../assets/Process drive.jpg" max-width="160px" class="mx-auto rounded-circle" ></v-img><br> 
              <v-img src="../assets/discussion.png" max-width="340px" class="mx-auto rounded-xl" ></v-img>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
              <v-row>
                <v-card-title class="mx-4" style="color:slateblue">Login</v-card-title>
                <v-card-text class="mx-4">Welcome back,Please login to your account.</v-card-text>  
                  <v-text-field hide-details dense  class="mx-8 mb-2"  clearable outlined label="User Name"  prepend-inner-icon="mdi-account"></v-text-field>
                  <v-text-field hide-details dense  class="mx-8" clearable outlined type="password" label="Password" prepend-inner-icon="mdi-lock" ></v-text-field>   
                <v-row>
                  <v-col>
                    <v-checkbox  class="ma-1 mx-8" label="Remainder Me"></v-checkbox>
                  </v-col>
                  <v-col class="mt-3">
                    <a class="mx-16 ml-auto ml-sm-4 " Right style="color:slateblue;margin-left:90px !important" @click="$router.push('/')">Forgot Password?</a>
                  </v-col>
                </v-row>
              </v-row>
              <v-btn elevation="0" class="mx-6" @click="login" style="background-color:slateblue">login</v-btn>
            </v-col>
          </v-row>  
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods: {
    login(){
      this.$router.push("/dashboard")
    }
  },
}
</script>
<style>
</style>
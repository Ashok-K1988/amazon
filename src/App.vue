<template>
  <v-app>
    <v-app-bar app color="block" dark>
    </v-app-bar>
    <v-main style="background-color:#f0f8ff">
      <router-view/>
    </v-main>
    
    <!-- <v-footer app class="blue">
      <v-btn block >back to home</v-btn>
      
    </v-footer> -->
  </v-app>
</template>
<script>

export default {
  name: 'App',

  data: () => ({
    
  }),
};
</script>
<style>
</style>
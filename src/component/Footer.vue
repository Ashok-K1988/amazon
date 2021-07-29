<template>
  <v-footer class="secondary">
    <v-btn block @click="scrollToTop" color="#656565">Go to top</v-btn>
    <v-card v-for="card in cards" :key="card" class="mx-auto mt-4 secondary" flat style="color:white">
      <v-card-title >title {{ card }}</v-card-title>
      <v-card-subtitle  style="color:white">subtitle</v-card-subtitle>
      <v-card-text  style="color:white">this is text </v-card-text>
      <v-card-text  style="color:white">this is second text</v-card-text>
    </v-card>
    <v-card-text class="mx-auto mt-4" style="color:white;text-align:center">Conditions of Use & SalePrivacy NoticeInterest-Based Ads© 1996-2021, Amazon.com, Inc. or its affiliates</v-card-text>
  </v-footer>  
</template>
<script>
import goTo from 'vuetify/lib/services/goto'
export default {
  data() {
    return {
      cards : [1,2,3,4]
    }
  },
  methods:{
    scrollToTop () {
      goTo(0)
    },
  }
}
</script>
<style>
</style>
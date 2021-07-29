<template>
  <div class="">
    <v-container>
    <v-row class=" mt-3 pa-auto">
      <v-spacer v-if="$vuetify.breakpoint.xl"></v-spacer>
        <v-card class="mt-3" :class="$vuetify.breakpoint.xl ? 'mx-5' : 'mx-2'" max-width="280" v-for="value in values" :key="value">
          <v-img class="white--text align-end" height="120px" :src="value.img"></v-img>
          <v-card-subtitle> Top ten feutures {{ value.number }}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>
            <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text> Share </v-btn>
            <v-btn color="orange" text>Explore</v-btn>
          </v-card-actions>
        </v-card>
        <v-spacer v-if="$vuetify.breakpoint.xl"></v-spacer>
      </v-row>
    </v-container>
    
     <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return{
      values:[{number : '1', img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/GWPercolates/4_PC_QC_186x116_Template_final._SY116_CB666451141_.jpg'},
      {number : '2',img : 'https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/GWPercolates/2_PC_QC_186x116_Template_final._SY116_CB666451141_.jpg'},
      {number :'3', img : 'https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/GWPercolates/3_PC_QC_186x116_Template_final._SY116_CB666451141_.jpg'},
      {number :'4',img : 'https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/GWPercolates/1_PC_QC_186x116_Template_final._SY116_CB666451141_.jpg'}]
    }
  }
}
</script>
<style>
    
</style>
<template>
  <div>
    <v-row class="mt-7 pb-3">
      <v-carousel hide-delimiters >
        <v-carousel-item v-for="(item) in items" :key="item">
          <v-sheet :color="item" height="100%" width="100%" tile>
            <v-row class="fill-height mx-auto pa-3" align="center" justify="center">
              <v-spacer v-if="$vuetify.breakpoint.xl"></v-spacer>
              <v-card v-for="(card,j) in cards" :key="card" height="400px" width="300px" :class="$vuetify.breakpoint.xl ? 'mx-4' : 'mx-1'">
                <v-card-title> This is sale {{ j }}</v-card-title>
                <v-card-text>This is the product</v-card-text>
                <img width="100%" height="70%" :src="card.img" alt="">
                <v-card-text class="blue">This produt is 20% discount</v-card-text>
              </v-card>
              <v-spacer v-if="$vuetify.breakpoint.xl"></v-spacer>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return {
      items:["red","ywllow","green","blue","orange"],
      cards : [{number :'1',img : 'https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2021/wrs/mencombo_low._SY304_CB666768535_.jpg'},
                {number :'2',img : 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/OP/BTS/D14264916_IN_Printers_OP_GW_revamp_nov19_dashbord_Card_1x_4._SY304_CB667376048_.jpg'},
                {number : '3',img :'https://m.media-amazon.com/images/I/51iKj3voYCL._AC_SY200_.jpg'},
                {number : '4', img : 'https://m.media-amazon.com/images/I/41ImLu-sx1L._AC_SY200_.jpg'}]
    }
  }
}
</script>
<style lang="">
    
</style>
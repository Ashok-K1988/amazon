<template>
  <div>
    <v-app-bar app color="#656565" dark class="mt-11" height="50px">
      <v-app-bar-nav-icon  @click="drawer = !drawer"></v-app-bar-nav-icon> Home
      <v-spacer></v-spacer>
      <v-col>list1</v-col>
      <v-col>list2</v-col>
      <v-col>list3</v-col>
      <v-col>list4</v-col>
      <v-col>list5</v-col>
      <v-col>list6</v-col>
      <v-col>list7</v-col>
      <v-col>
        <img class="" src="../assets/pd-logo.png" width="90px">
      </v-col>
      <v-col>list</v-col>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" dark absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Home </v-list-item-title>
          <v-list-item-subtitle>Name </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <template v-for="item in items" >
          <v-list-item :key="item.title" link >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content @click="navigate(item.link)">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
    data : () => ({
      drawer: false,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/' }, 
        { title: '1', icon: 'mdi-image', link: '' },
        { title: '2', icon: 'mdi-help-box', link: '' },
        { title: '3', icon: 'mdi mdi-account-cancel', link:'' },
        { title: '4' ,icon: 'mdi mdi-account', link:''},
        { title: '5' ,icon: 'mdi mdi-account', link:''},
        { title: '6' ,icon: 'mdi mdi-account', link:''}
      ],
    })
}
</script>
<style lang="">
    
</style>
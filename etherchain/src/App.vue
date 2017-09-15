<template>
  <div id="app">
    <app-nav></app-nav> 
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"

export default {
  name: 'app',
  components:{
    "app-nav": Navbar,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #455f75;
  font-weight: 500;
}

body,html{
  margin: 0;
}

</style>

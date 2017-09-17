<template>
  <div id="app">
    <app-nav></app-nav> 
    <router-view></router-view>
    <!-- <app-footer></app-footer>  -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: 'app',
  components:{
    "app-nav": Navbar,
    "app-footer": Footer,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4b5963;
  font-weight: 500;
}

body,html{
  margin: 0;
}

</style>

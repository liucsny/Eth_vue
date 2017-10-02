<template>
  <div id="app">
    <app-nav></app-nav> 
    <router-view></router-view>
    <app-footer></app-footer> 
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

.mainCard{
  box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);
  border: 1px solid rgba(214,214,214,.6);
  padding: 40px 45px 30px 45px;
  margin: 16px auto 10px auto;
  background-color: #fff;
}

.narrow{
  width: 84%;
}

#pageName{
  font-size: 36px;
  color: #67666e;
  margin: 100px 0 30px 0;
}

</style>

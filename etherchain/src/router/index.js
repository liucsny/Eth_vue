import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import blockList from "@/components/blockList.vue"
import blockDetail from "@/components/blockDetail.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blocklist',
      name: 'blockList',
      component: blockList
    },
    {
      path: '/blockdetail',
      name: 'blockDetail',
      component: blockDetail
    },
  ]
})

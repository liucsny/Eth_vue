import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import blockList from "@/pages/blockList.vue"
import blockDetail from "@/pages/blockDetail.vue"
import transactionDetail from "@/pages/transactionDetail.vue"
import account from "@/pages/account.vue"



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
    {
      path: '/transactiondetail',
      name: 'transactionDetail',
      component: transactionDetail
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
  ]
})

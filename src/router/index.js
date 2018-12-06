import Vue from 'vue'
import Router from 'vue-router'
import Classify from "@/pages/Classify/Classify.vue"
import Discover from "@/pages/Discover/Discover.vue"
import MSite from "@/pages/MSite/MSite.vue"
import Order from "@/pages/Order/Order.vue"
import Profile from "@/pages/Profile/Profile.vue"

Vue.use(Router)
export default new Router({
  routes: [
    {path: '/msite', component: MSite, meta:{isShow:true}},
    {path: '/classify', component: Classify, meta:{isShow:true}},
    {path: '/discover', component: Discover, meta:{isShow:true}},
    {path: '/order', component: Order, meta:{isShow:true}},
    {path: '/profile', component: Profile},
    {path: '/', redirect:"/msite", meta:{isShow:true}},
  ]
})

/**
 * 路由器模块
 */

import Vue from 'vue';
import VueRouter from "vue-router";
import MSite from "../pages/MSite/MSite";
import Order from "../pages/Order/Order";
import Search from "../pages/Search/Search";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";

Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        isShowFooter: true,
      },
    },
    {
      path: '/search',
      component: Search,
      meta: {
        isShowFooter: true,
      },
    },{
      path: '/order',
      component: Order,
      meta: {
        isShowFooter: true,
      },
    },{
      path: '/profile',
      component: Profile,
      meta: {
        isShowFooter: true,
      },
    },
    // 默认
    {
      path: '/',
      redirect: '/msite',
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

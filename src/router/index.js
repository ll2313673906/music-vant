import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    redirect: '/sheet',
    children: [
      // 歌单
      { path: '/sheet', component: () => import('../components/Gedan/Sheet.vue') },

      // 排行榜
      { path: '/ranking', component: () => import('../components/Ranking/Ranking.vue') },
      //歌手
      { path: '/singer', component: () => import('../components/Singer/Singer.vue') },
    ],
  },
  {
    // 登录
    path: '/login',
    name: 'Login',

    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    // 用户
    path: '/user',
    name: 'User',

    component: () => import('../components/User/User.vue'),
  },

  {
    path: '/music',
    name: 'Music',
    component: () => import(/* webpackChunkName: "about" */ '../views/Music.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

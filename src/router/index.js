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
    // 避免用户在第一次使用时,没有songid而报错
    beforeEnter: (to, from, next) => {
      if (!sessionStorage.getItem('songid')) {
        let songid = []
        songid = JSON.stringify(songid)
        sessionStorage.setItem('songid', songid)
      }
      next()
    },
    children: [
      // 歌单
      { path: '/sheet', component: () => import('../components/Gedan/Sheet.vue') },
      // 排行榜
      { path: '/ranking', component: () => import('../components/Ranking/Ranking.vue') },
      //歌手
      { path: '/singer', component: () => import('../components/Singer/Singer.vue') },
    ],
  },
  // 歌单详情
  { path: '/sheet/:id', component: () => import('../components/Gedan/sheetdetails.vue') },
  // 排行榜详情
  { path: '/ranking/:id', component: () => import('../components/Ranking/Rankdetail.vue') },
  // 歌手详情
  {
    path: '/singer/:id',
    component: () => import('../components/Singer/Singerdetail.vue'),
    children: [
      { path: '/resolve', component: () => import('../components/Singer/Singerdetail/Resolve.vue') },
      { path: '/hotsong', component: () => import('../components/Singer/Singerdetail/Hotsong.vue') },
      { path: '/album', component: () => import('../components/Singer/Singerdetail/Album.vue') },
      { path: '/mv', component: () => import('../components/Singer/Singerdetail/Mv.vue') },
      { path: '/personaldetail', component: () => import('../components/Singer/Singerdetail/Personaldetail.vue') },
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
  // 公共组件
  {
    path: '/detail',
    component: () => import('../components/Common/Detail.vue'),
  },
  {
    path: '/songdetail/:id',
    component: () => import('../components/Common/Songdetail.vue'),
    beforeEnter: (to, from, next) => {
      store.state.showfooter = false
      next()
    },
  },
  {
    path: '/footer',
    name: 'Footer',
    component: () => import('../views/Footer.vue'),
  },

  {
    path: '/playhistory',
    component: () => import('../components/Popup/Playhistory.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

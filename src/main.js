import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入Vant
import { Button, Form } from 'vant'
Vue.use(Button)
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)

import { NavBar } from 'vant'
Vue.use(NavBar)

/*引入遮罩层 */
import { Overlay } from 'vant'
Vue.use(Overlay)

/*输入框组件引入 */
import { Field } from 'vant'
Vue.use(Field)
// 引入图标
import { Icon } from 'vant'
Vue.use(Icon)

// 引入轮播
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe)
Vue.use(SwipeItem)

// Dialog
import { Dialog, Cell, Popup, Row, Col } from 'vant'
Vue.use(Dialog)
Vue.use(Cell)
Vue.use(Popup)
Vue.use(Row)
Vue.use(Col)

//
import { CellGroup } from 'vant'
Vue.use(CellGroup)

import { Toast } from 'vant'
Vue.use(Toast)

// 图片懒加载
import { Lazyload } from 'vant'
Vue.use(Lazyload, {
  lazyComponent: true,
  error: require('./assets/error.jpg'),
  loading: require('./assets/loading.gif'),
})

// 宫格布局
import { Grid, GridItem } from 'vant'
Vue.use(Grid)
Vue.use(GridItem)

// Sticky粘性布局
import { Sticky } from 'vant'
Vue.use(Sticky)

// 加载
import { loading } from 'vant'
Vue.use(loading)

// 引入网易云api
// axios
import axios from 'axios'
Vue.prototype.axios = axios
// axios.defaults.baseURL = "xxxxx";  //这里使用自己下载的网易云接口地址
axios.defaults.baseURL = process.env.NODE_ENV == 'production' ? '/' : 'http://localhost:3000/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

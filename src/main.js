import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入Vant
import { Button } from 'vant'
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

// 引入键盘组件
import { PasswordInput, NumberKeyboard } from 'vant'
Vue.use(PasswordInput)
Vue.use(NumberKeyboard)

// Dialog
import { Dialog, Cell, Popup, Row, Col } from 'vant'
Vue.use(Dialog)
Vue.use(Cell)
Vue.use(Popup)
Vue.use(Row)
Vue.use(Col)

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

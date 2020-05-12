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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

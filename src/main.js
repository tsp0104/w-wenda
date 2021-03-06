import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Vant 组件库
import Vant from 'vant'
import 'vant/lib/index.less'
// 使用rem插件
import 'amfe-flexible'
// 覆盖vant的样式
import '@/styles/index.less'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

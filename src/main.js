import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import fastClick from 'fastclick'
import './assets/styles/iconfont'





Vue.config.productionTip = false

fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


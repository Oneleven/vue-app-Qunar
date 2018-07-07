import Vue from 'vue'
import router from './router'
// import store from './store/index'
import store from './store'
import App from './App'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'


import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont'




Vue.config.productionTip = false

fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


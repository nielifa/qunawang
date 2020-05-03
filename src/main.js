import Vue from 'vue'
import App from './App.vue'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/css/swiper.css'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
fastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
new Vue({
  render: h => h(App), 
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import fastClick from 'fastclick'
fastClick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

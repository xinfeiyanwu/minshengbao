import Vue from 'vue'
import App from './App.vue'
import '@/unit/index.js'
import router from './router'
import store from './store'

//mock
import './mock'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

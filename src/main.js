import Vue from 'vue'
import App from './App.vue'
import '@/unit/index.js'
import router from './router'

//mock
import '@/mock/home/navSwiper.js'
import '@/mock/home/ActiveSwiper.js'
import '@/mock/home/STList.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

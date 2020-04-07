import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

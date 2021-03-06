/**
 * @author youjingyu
 * @fileOverview init vue
 * @date 2019-02-23
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/common.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-md-icons/src/icons'
import 'vue-material/dist/vue-material.min.css'
import VueSmoothScroll from 'vue-smoothscroll'
import * as svgicon from 'vue-svgicon'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueSmoothScroll)
Vue.use(svgicon, {
  classPrefix: 'AppIcon-'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

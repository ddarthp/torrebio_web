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
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:3000',
  setId: function (provider, torreId) {
    this.providers[provider]['state'] = torreId
    return this
  },
  providers: {
    linkedin: {
      url: '/api/torre/bio',
      clientId: '78tjhkxleu8nnm',
      redirectUri: 'http://localhost:8080',
      scope: ['r_emailaddress', 'r_basicprofile'],
      state: 'SqnslkU11dS1Kq8t',
      responseType: 'code'
    }
  }
})

Vue.use(VueMaterial)
Vue.use(VueSmoothScroll)
Vue.use(svgicon, {
  classPrefix: 'AppIcon-'
})

// const vueAuth = new VueAuthenticate(Vue.prototype.$http, {
//   baseUrl: 'http://localhost:4000'
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

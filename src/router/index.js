import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import profile from '@/components/profile/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:torreId',
      name: 'Profile',
      component: profile
    }
  ]
})

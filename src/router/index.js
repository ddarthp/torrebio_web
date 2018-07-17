import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/profile/Profile'
import Linkedin from '@/components/linkedin/Linkedin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/linkedin/auth',
      name: 'Linkedin',
      component: Linkedin
    },
    {
      path: '/profile/:torreId',
      name: 'Profile',
      component: Profile
    }
  ]
})

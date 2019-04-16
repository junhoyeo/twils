import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './pages/Index'
import Projects from './pages/Projects'
import Twil from './pages/Twil'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/twil/:twilId',
      name: 'TWIL',
      component: Twil
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import AdminSignIn from '@/components/AdminSignIn'
import AdminComponents from '@/components/AdminComponents'
import AdminEditComponent from '@/components/AdminEditComponent'
import AdminBuilds from '@/components/AdminBuilds'
import NotFound from '@/components/NotFound'

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
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: 'components',
          name: 'AdminComponents',
          component: AdminComponents
        },
        {
          path: 'components/:_id',
          name: 'AdminEditComponent',
          component: AdminEditComponent
        },
        {
          path: 'builds',
          name: 'AdminBuilds',
          component: AdminBuilds
        }
      ]
    },
    {
      path: '/sign-in',
      name: 'AdminSignIn',
      component: AdminSignIn
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

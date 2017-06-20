import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Shared/Header'

import Login from '@/components/Pages/Login'
import News from '@/components/Pages/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      components: {
        default: Login
      }
    },
    {
      path: '/news',
      name: 'News',
      components: {
        header: Header,
        default: News
      },
      props: { 
        header: {
          color: 'amber lighten-3',
          textcolor: 'grey-text text-darken-4'
        } 
      }
    }
  ]
})

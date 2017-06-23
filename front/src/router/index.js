import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Shared/Header'
import HeaderExtend from '@/components/Shared/HeaderExtend'

import Login from '@/components/Pages/Login'
import News from '@/components/Pages/News'
import Program from '@/components/Pages/Program'
import Favs from '@/components/Pages/Favs'

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
          headertext: 'Notícias & Informes',
          color: 'amber lighten-3',
          textcolor: 'grey-text text-darken-4',
          useheaderextend: false
        } 
      }
    },
    {
      path: '/program',
      name: 'Program',
      components: {
        header: Header,
        default: Program
      },
      props: { 
        header: {
          headertext: 'Grade de Atividades',
          color: 'red lighten-2',
          textcolor: 'grey-text text-darken-4',
          useheaderextend: true
        } 
      }
    },
    {
      path: '/favs',
      name: 'Favs',
      components: {
        header: Header,
        default: Favs
      },
      props: { 
        header: {
          headertext: 'Favoritos',
          color: 'deep-purple darken-1',
          textcolor: 'purple-text text-lighten-5',
          useheaderextend: true
        } 
      }
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Shared/Header'
import HeaderExtend from '@/components/Shared/HeaderExtend'

import Login from '@/components/Pages/Login'
import News from '@/components/Pages/News'
import Program from '@/components/Pages/Program'
import Favs from '@/components/Pages/Favs'
import Phones from '@/components/Pages/Phones'
import Faq from '@/components/Pages/Faq'
import Maps from '@/components/Pages/Maps'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      components: {
        default: Login
      },
      beforeEnter: (to, from, next) => {
        document.querySelector("meta[name=theme-color]").setAttribute("content", '#ddd')
        next()
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
      },
      beforeEnter: (to, from, next) => {
        document.querySelector("meta[name=theme-color]").setAttribute("content", '#e6c86c')
        next()
      }
    },
    {
      path: '/program/activity/:id',
      name: 'ProgramActivity',
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
      },
      beforeEnter: (to, from, next) => {
        document.querySelector("meta[name=theme-color]").setAttribute("content", '#cc5c5c')
        next()
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
      },
      beforeEnter: (to, from, next) => {
        document.querySelector("meta[name=theme-color]").setAttribute("content", '#684c92')
        next()
      }
    },
    {
      path: '/phones',
      name: 'Phones',
      components: {
        header: Header,
        default: Phones
      },
      props: { 
        header: {
          headertext: 'Telefones importantes',
          color: 'grey lighten-1',
          textcolor: 'grey-text text-darken-4',
          useheaderextend: false
        } 
      },
      beforeEnter: (to, from, next) => {
        document.querySelector("meta[name=theme-color]").setAttribute("content", '#999999')
        next()
      }
    },
    {
      path: '/faq',
      name: 'Faq',
      components: {
        header: Header,
        default: Faq
      },
      props: { 
        header: {
          headertext: 'Perguntas frequentes',
          color: 'teal accent-4',
          textcolor: 'grey-text text-darken-4',
          useheaderextend: false
        } 
      },
      beforeEnter: (to, from, next) => {
        document.querySelector("meta[name=theme-color]").setAttribute("content", '#049a86')
        next()
      }
    },
    {
      path: '/maps',
      name: 'Maps',
      components: {
        header: Header,
        default: Maps
      },
      props: { 
        header: {
          headertext: 'Mapa do alojamento',
          color: 'blue lighten-2',
          textcolor: 'grey-text text-darken-4',
          useheaderextend: false
        } 
      },
      beforeEnter: (to, from, next) => {
        document.querySelector("meta[name=theme-color]").setAttribute("content", '#3c9be8')
        next()
      }
    }
  ]
})

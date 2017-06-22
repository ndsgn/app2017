import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        username: 'Bernardo Santos Vailati',
        useremail: 'bernardovailati@gmail.com',
        activeProgramTab: 'tab1',
        news: [],
        program: []
    },

    mutations: {
        ACTIVATE_TAB: function (state, payload) {
            state.activeProgramTab = payload
        },
        GET_NEWS: function (state, payload) {
            state.news = payload
        },
        GET_PROGRAM: function (state, payload) {
            state.program = payload
        }
    },

    actions: {

        activateTab: function(context, targetTab) {
            context.commit('ACTIVATE_TAB', targetTab)
        },

        getNews: function(context) {
            Axios.get(`http://eduardocamillo.com.br/development/ncuritiba2017/news`)
            .then(response => {
                const news = response.data
                context.commit('GET_NEWS', news)
            }).catch(e => {
                this.errors.push(e)
            })
        },

        getProgram: function(context) {
            Axios.get(`http://eduardocamillo.com.br/development/ncuritiba2017/program`)
            .then(response => {
                const news = response.data
                context.commit('GET_PROGRAM', news)
            }).catch(e => {
                this.errors.push(e)
            })
        }
    }
})

export default store

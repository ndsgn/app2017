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
            Axios.get(`https://ncwb2017_2.surge.sh/static/news.json`)
            .then(response => {
                const news = response.data
                // se rolou a chamada, atualiza no localStorage
                localStorage.setItem("news", JSON.stringify(news))
                context.commit('GET_NEWS', news)

            }).catch(e => {
                // se não rolou, mostra o que tem no localhost, desde que ele exista
                if(localStorage && localStorage.news) {
                    var news = JSON.parse(localStorage.news)
                    context.commit('GET_NEWS', news)
                }
            })
        },

        getProgram: function(context) {

            Axios.get(`https://ncwb2017_2.surge.sh/static/program.json`)
            .then(response => {
                const program = response.data
                // se rolou a chamada, atualiza no localStorage
                localStorage.setItem("program", JSON.stringify(program))
                context.commit('GET_PROGRAM', program)

            }).catch(e => {
                // se não rolou, mostra o que tem no localhost, desde que ele exista
                if(localStorage && localStorage.program) {
                    var program = JSON.parse(localStorage.program)
                    context.commit('GET_PROGRAM', program)
                }
            })
        }
    }
})

export default store

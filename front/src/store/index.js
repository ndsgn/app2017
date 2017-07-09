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
        program: [],
        fav: [],
        activities: [],
        isAdmin: true
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
        },
        GET_ACTIVITIES: function (state, payload) {
            state.activities = payload
        },
        EQUALIZE_FAV: function(state) {
            if(localStorage && localStorage.fav) {
                state.fav = JSON.parse(localStorage.fav)
            } else {
                localStorage.fav = JSON.stringify(state.fav)
            }
        },
        SAVE_FAV: function (state, payload) {
            if(state.fav.indexOf(payload) == -1) {
                state.fav.push(payload)
            }
            localStorage.fav = JSON.stringify(state.fav)
        },
        UNSAVE_FAV: function (state, payload) {
            const index = state.fav.indexOf(payload)
            if(index > -1) {
                state.fav.splice(index, 1);
            }
            localStorage.fav = JSON.stringify(state.fav)
        }
    },

    actions: {

        activateTab: function(context, targetTab) {
            context.commit('ACTIVATE_TAB', targetTab)
        },

        getNews: function(context) {
            Axios.get(`/static/news.json`)
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

            Axios.get(`/static/program.json`)
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
        },

        getFav: function(context) {
            context.commit('GET_FAV')
        },

        equalize_fav: function(context) {
            context.commit('EQUALIZE_FAV')
        },

        saveFav: function(context, activityId) {
            context.commit('SAVE_FAV', activityId)
        },

        unsaveFav: function(context, activityId) {
            context.commit('UNSAVE_FAV', activityId)
        },

        getActivities: function(context) {

            Axios.get(`/static/activities.json`)
            .then(response => {
                const activities = response.data
                // se rolou a chamada, atualiza no localStorage
                localStorage.setItem("activities", JSON.stringify(activities))
                context.commit('GET_ACTIVITIES', activities)

            }).catch(e => {
                // se não rolou, mostra o que tem no localhost, desde que ele exista
                if(localStorage && localStorage.activities) {
                    var activities = JSON.parse(localStorage.activities)
                    context.commit('GET_ACTIVITIES', activities)
                }
            })
        },

        editActivity: function(context, theActivity) {
            console.log('This is the post we will send to the endpoint of add/edit URL')
            console.log(theActivity)

            Axios.post(`APIURL`)
            .then(response => {
                // se rolou, avisa e atualiza no store a lista de atividades
                Materialize.toast('Atividade adicionada com sucesso!', 4000)

            }).catch(e => {
                // se não rolou, mostra o que tem no localhost, desde que ele exista
                Materialize.toast('Ops! Aconteceu um erro de comunicação com o <Br>servidor, e sua atividade não foi salva. Avise a equipe do app, por favor.', 4000)
            })
        }
    }
})

export default store

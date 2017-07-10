import Vue from 'vue'
import Vuex from 'vuex'
import Router from '../router'
import Axios from 'axios'

Vue.use(Vuex)

var API_URL = 'https://localhost:5000/api';

const store = new Vuex.Store({

    state: {
        useremail: '',
        activeProgramTab: 'Dia 15',
        news: [],
        faq: [],
        fav: [],
        activities: [],
        isAdmin: false
    },

    mutations: {
        ACTIVATE_TAB: function (state, payload) {
            state.activeProgramTab = payload
        },
        GET_NEWS: function (state, payload) {
            state.news = payload
        },
        GET_FAQ: function (state, payload) {
            state.faq = payload
        },
        GET_ACTIVITIES: function (state, payload) {
            state.activities = payload
        },
        GET_USER: function (state, payload) {
            console.log(payload)
            localStorage.setItem("useremail", payload)
            state.useremail = payload
        },
        SET_ADMIN: function(state, payload) {
            console.log(payload);
            state.isAdmin = payload;
            localStorage.setItem("isAdmin", payload);
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
            Axios.get(API_URL + "/db/news.json")
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
            Axios.get(API_URL + "/db/activities.json")
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

        editActivity: function(context, data) {            
            return Axios.post(API_URL + "/edit_activity/" + data.id, data)
            .then(response => {
                // se rolou, avisa e atualiza no store a lista de atividades
                Materialize.toast('Atividade editada com sucesso!', 4000)
            }).catch(e => {
                // se não rolou, mostra o que tem no localhost, desde que ele exista
                Materialize.toast('Ops! Aconteceu um erro de comunicação com o <Br>servidor, e sua atividade não foi salva. Avise a equipe do app, por favor.', 4000)
            })
        },

        deleteActivity: function(context, data) {
            Axios.post(API_URL + "/delete_activity/" + data.id, data)
            .then(response => {
                // se rolou, avisa e atualiza no store a lista de atividades
                Materialize.toast('Atividade removida com sucesso!', 4000)
            }).catch(e => {
                // se não rolou, mostra o que tem no localhost, desde que ele exista
                Materialize.toast('Ops! Aconteceu um erro de comunicação com o <Br>servidor, e sua atividade não foi salva. Avise a equipe do app, por favor.', 4000)
            })
        },

        getFaq: function(context) {
            Axios.get(API_URL + "/db/faq.json")
            .then(response => {
                const faq = response.data
                localStorage.setItem("faq", JSON.stringify(faq))
                context.commit('GET_FAQ', faq)
            }).catch(e => {
                if(localStorage && localStorage.faq) {
                    var faq = JSON.parse(localStorage.faq)
                    context.commit('GET_FAQ', faq)
                }
            })
        },

        logout: function(context) {
            localStorage.useremail = ''
            localStorage.fav = []
            context.commit('SET_ADMIN', false)
            context.commit('GET_USER', '')            
            Router.push('/')
        },
        
        getUser: function(context, data) {
            return Axios.post(API_URL + '/login', data)
            .then(response => {
                var r = response.data[0]['Action'];
                if (r == "Redir" || r == "Redir_Admin") {
                    context.commit('GET_USER', data["email"])
                    r == "Redir_Admin" ? context.commit('SET_ADMIN', true) : context.commit('SET_ADMIN', false)
                    return true;
                }
                return false;
            }).catch(e => {
                if(localStorage && localStorage.useremail) {
                    var useremail = localStorage.useremail
                    localStorage.isAdmin == true ? context.commit('SET_ADMIN', true) : context.commit('SET_ADMIN', false)
                    context.commit('GET_USER', useremail)
                    return true
                }
                return false;
            });
        }
    }
})

export default store

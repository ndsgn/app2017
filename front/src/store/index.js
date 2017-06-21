import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    username: 'Bernardo Santos Vailati',
    useremail: 'bernardovailati@gmail.com',
    activeProgramTab: 'tab1',
    news: [
      {
          id: '10',
          subtitle: 'Alteração de horário',
          title: 'Vamos conversar sobre saúde mental?',
          content: 'A atividade da Brisa Gil, planejada para acontecer hoje as 14:00, foi adiada para as 15:30.',
      },
      {
          id: '9',
          subtitle: 'Cancelamento',
          title: 'Game Design 101',
          content: 'A atividade do Rodrigo Cavalcante, planejada para acontecer hoje as 16:50, está cancelada.',
      },
      {
          id: '8',
          subtitle: 'Informe',
          title: 'Almoço do dia 16',
          content: 'Devido a fortes chuvas, o almoço de hoje vai começar a ser servido apenas as 12:30.',
      },
      {
          id: '7',
          subtitle: 'Informe',
          title: 'Plenária inicial',
          content: 'Nada de errado com a plenária inicial, por isso mesmo você deveria vir, vai ser topshow.',
      },
      {
          id: '6',
          subtitle: 'Informe',
          title: 'Está aberto o N Curitiba 2017',
          content: 'Nada de errado com a plenária inicial, por isso mesmo você deveria vir, vai ser topshow.',
      },
      {
          id: '5',
          subtitle: 'Alteração de horário',
          title: 'Vamos conversar sobre saúde mental?',
          content: 'A atividade da Brisa Gil, planejada para acontecer hoje as 14:00, foi adiada para as 15:30.',
      },
      {
          id: '4',
          subtitle: 'Cancelamento',
          title: 'Game Design 101',
          content: 'A atividade do Rodrigo Cavalcante, planejada para acontecer hoje as 16:50, está cancelada.',
      },
      {
          id: '3',
          subtitle: 'Informe',
          title: 'Almoço do dia 16',
          content: 'Devido a fortes chuvas, o almoço de hoje vai começar a ser servido apenas as 12:30.',
      },
      {
          id: '2',
          subtitle: 'Informe',
          title: 'Plenária inicial',
          content: 'Nada de errado com a plenária inicial, por isso mesmo você deveria vir, vai ser topshow.',
      },
      {
          id: '1',
          subtitle: 'Informe',
          title: 'Está aberto o N Curitiba 2017',
          content: 'Nada de errado com a plenária inicial, por isso mesmo você deveria vir, vai ser topshow.',
      }
    ]
  },
  mutations: {
    ACTIVATE_TAB: function (state, payload) {
			state.activeProgramTab = payload
		},
  },
  actions: {
    activateTab: function(context, targetTab) {
      context.commit('ACTIVATE_TAB', targetTab);
		}
  }
})

export default store

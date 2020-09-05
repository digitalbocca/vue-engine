'use strict'

import Engine from './engine'

export default {
  install (Vue, options) {
    Vue.mixin({
      // @todo Tentar montar no beforeMounted.
      mounted () {
        console.log('Carregado o módulo @digitalbocca/vue-engine')

        // Adiciona a mutation ADD_ITEM ao state do vuex.
        /*
        options.data._mutations['ADD_ITEM'] = (state, tarefa) => {
          state.fila.push(tarefa)
        }
        */

        // Implementação com registerModule e namespace.
        /*
        options.data.registerModule('veng', {
          namespaced: true,
          preserveState: true,
          mutations: {
            ADD_TASK (state, tarefa) {
              console.log('Estou no modulo veng, na mutation ADD_TASK')
              state.fila.push(tarefa)
              console.log('Adicionei uma tarefa na fila')
              console.log(state.fila)
            }
          },
          state: {
            fila: []
          },
          getters: {
            fila (state) {
              return state.fila
            }
          }
        })
        */

        // Adiciona uma action addItem ao state do vuex.
        /*
        options.data._actions['addItem'] = (context, tarefa) => {
          context.commit('ADD_ITEM', tarefa)
        }
        */

        /**
         * @todo Definir automaticamente o tempo de um segundo como padrão.
         */
        return new Engine({ seconds: options.time, fila: options.data.state.fila })
      }
    })

    Vue.prototype.$adicionarTarefa = tarefa => {
      console.log('Adicionando Tarefa na Fila...')
      // Implementação antiga:
      // options.data.state.fila.push(tarefa)
      // options.data.dispatch('addItem', tarefa)
      // console.log(options.data._actions)
      // options.data.veng.commit('ADD_TASK', tarefa)
      // console.log(options.data.state.veng.cod)
      // console.log(options.data.state.veng)
      // options.data.mutations.veng.commit('ADD_TASK')
      // options.data.commit('veng/ADD_TASK', tarefa)
      options.data.dispatch('addTask', tarefa)
    }
  }
}

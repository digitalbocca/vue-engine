'use strict'

import Engine from './engine'

export default {
  install (Vue, options) {
    Vue.mixin({
      mounted () {
        console.log('Carregado o módulo @digitalbocca/vue-engine')
        return new Engine({ seconds: options.time, fila: options.data.state.fila })
      }
    })
    Vue.prototype.$adicionarTarefa = tarefa => {
      console.log('Adicionando Tarefa na Fila...')
      options.data.state.fila.push(tarefa)
    }
  }
}

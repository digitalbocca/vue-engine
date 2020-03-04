'use strict'

import { DateTime } from 'luxon'

export default class Engine {
  constructor (config) {
    this.interval = config.seconds * 1000
    this.fila = config.fila

    this.engine(this.interval)
  }

  engine (interval) {
    if (window.engine === undefined) {
      console.log('Iniciando a Engine @digitalbocca/vue-engine')
      window.engine = window.setInterval(this.loop, interval, this.fila)
    }
  }

  loop (fila) {
    console.log('Percorrendo fila de tarefas...')
    if (fila.length > 0) {
      const now = DateTime.local()
      fila.forEach((item, id) => {
        if (now > item.tempo) {
          console.log('Executando a tarefa')
          item.action()
          fila.splice(id, 1)
        }
      })
    }
  }

  adicionarEventoNaFila (evt) {
    this.fila.push(evt)
  }
}

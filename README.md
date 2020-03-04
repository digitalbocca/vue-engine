# @digitalbocca/vue-engine

## Atenção: Este projeto está em fase de implementação, não use em produção antes da versão 1.0.0

## Como Usar

- No seu arquivo js inicial do projeto (ex: main.js ou index.js) importe VueEngine e passe sua store como valor de dados, nesta store é onde estará a fila de tarefas. Passe também o tempo de execução entre os loops, este valor é em segundos.

```javascript
import VueEngine from '@digitalbocca/vue-engine'

Vue.use(VueEngine, { data: store, time: 1 })
```

- No state da sua store do vuex certifique-se de ter as chaves:

```javascript
{
  // ...
  fila: []
  // ...
}
```

- Ao iniciar a engine você fica com o metodo ```$adicionarTarefa()``` exposto na sua instância do Vue. No exemplo abaixo minha instância do vue está em ```window.vm``` e estou criando um id com um timestamp, para o tempo de execução da tarefa eu crio um objeto de tempo do luxon com o horário atual e adiciono vinte segundos, na action é a função que será executada.

```javascript
window.vm.$adicionarTarefa({
  id: Date.now().toString(),
  time: DateTime.local().plus({ seconds: 20 }),
  action: () => console.log('Executei a ação')
})
```
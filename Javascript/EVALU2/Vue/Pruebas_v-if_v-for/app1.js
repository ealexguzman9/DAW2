const { createApp } = Vue;

const App = {
  data() {
    return {
      nombres:[
        "John","Charlotte","Sarah","Alex","Bryan"
      ],
      valor:0
    };
  },
  methods: {
    incrementar(){
      this.valor++;
    },
    decrementar(){
      this.valor--;
    }
  },
  template: `
    <div>
      <li v-for="nombre in nombres">
        {{ nombre }}, {{ nombre.length }} caracteres y termina en {{ nombre.charAt(nombre.length-1).toUpperCase() }}</li>
      <br>
    <h1>{{valor}}</h1>
    <button v-on:click="incrementar">Incrementar</button><button @click="decrementar">Decremetar</button>
      
    </div>
  `,
};

createApp(App).mount('#app');

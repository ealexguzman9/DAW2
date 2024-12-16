const { createApp } = Vue;

const App = {
  data() {
    return {
      numero1: 0,
      numero2: 0,
      valor:0
    };
  },
  computed:{
    division(){
      if(this.numero2!=0){
        return (this.numero1 / this.numero2).toFixed(2);
      }else{
        return "No se puede dividir entre 0";
      }
    },
    mensaje(){
      if(this.valor===0)
      return "El contador esta en 0";
      else 
      if(this.valor <20 )
        return "Sigue aumentando"
      else
        return "Has llegado al limite"
    }
  },
  methods:{
    incrementar(){
      this.valor++;
    },
    decrementar(){
      this.valor--;
    }
  },
  template: `
    <input v-model="numero1" type="number" placeholder="Escribe un numero"/>
    <input v-model="numero2" type="number" placeholder="Escribe un numero"/>

    <h2>Pruebas:</h2> 
    <p>División: {{ division }}</p>
    <h1>{{valor}}</h1>
    <button v-on:click="incrementar":disabled="valor==20">Incrementar</button><button @click="decrementar":disabled="valor==0">Decremetar</button>
    <p>{{mensaje}}</p>

  `,
};
// Crear la aplicación y montarla en el elemento con id="app"
createApp(App).mount('#app');
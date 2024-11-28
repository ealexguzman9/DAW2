const { createApp } = Vue;

const App = {
  data() {
    return {
      numero1: 0,
      numero2: 0
    };
  },
  template: `
    <input 
    v-model="numero1"
    type="number"
    placeholder="Escribe un numero"
    />
    <input 
    v-model="numero2"
    type="number"
    placeholder="Escribe un numero"
    />
    <h2>Estos son los resultados:</h2>
    <p>Sumados: {{ numero1 + numero2 }}</p>
    <p>Restados: {{ numero1 - numero2 }}</p>   
    <p>Multiplicados: {{ numero1 * numero2 }}</p>
    <p>Divididos: {{ numero1 / numero2 }}</p>
    <p>Potencia del primero sobre el segundo: {{ numero1 ** numero2 }}</p>
  `,
};
// Crear la aplicación y montarla en el elemento con id="app"
createApp(App).mount('#app');
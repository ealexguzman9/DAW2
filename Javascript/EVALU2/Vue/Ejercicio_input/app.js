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
    <h2>Resultados:</h2>
    <p>Suma: {{ numero1 + numero2 }}</p>
    <p>Resta: {{ numero1 - numero2 }}</p>   
    <p>Multiplicación: {{ numero1 * numero2 }}</p>
    <p>División: {{ numero2!=0?(numero1 / numero2).toFixed(2):"No se puede dividir por 0" }}</p>
    <p>Potencia del segundo sobre el primero: {{ numero1 ** numero2 }}</p>
    <p>Mayor: {{ Math.max(numero1, numero2) }}</p>
    <p>Menor: {{ Math.min(numero1, numero2) }}</p>
    <p>¿Son iguales?: {{ (numero1 == numero2)?"Si":"No" }}</p>
    <p>Número 1 es: {{ numero1%2==0?"Par":"Impar" }}</p>
    <p>Número 2 es: {{ numero2%2==0?"Par":"Impar" }}</p>
  `,
};
// Crear la aplicación y montarla en el elemento con id="app"
createApp(App).mount('#app');
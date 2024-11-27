const { createApp } = Vue;

const App = {
  data() {
    return {
      nombre: "Erick"
    };
  },
  template: `
    <h1>Hola {{ nombre }}</h1>
    <p>En minúsculas: {{ nombre.toLowerCase() }}</p>
    <p>En mayúsculas: {{ nombre.toUpperCase() }}</p>
    <p>Al revés: {{ nombre.split('').reverse().join('') }}</p>
    <p>Longitud: {{ nombre.length }}</p>
    <p>Primera letra: {{ nombre[0] }}</p>
  `,
};

// Crear la aplicación y montarla en el elemento con id="app"
createApp(App).mount('#app');
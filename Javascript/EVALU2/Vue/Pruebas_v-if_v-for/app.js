const { createApp } = Vue;

const App = {
  data() {
    return {
      numero: 0,

      cantidad:8,
      texto:"Libro",
      
      nombre:"Erick",
      edad:19,
      nota:6,

      datos: [10,44,5,87,-3,25,31]
    };
  },
  methods: {
  },
  template: `
    <div>
    <h2>Pruebas de v-if, v-show</h2>
    
    <input type="number" v-model="numero" placeholder="Escribe un numero">
    <p v-if="numero%2===0">El numero es par</p>
    <p v-else>El numero es impar</p>

    <p v-if="nota>=5 && edad>=18">{{nombre}} es mayor de edad.</p> 
    <p v-else="nota>=5 && edad<18"> {{nombre}} no es mayor de edad.</p>
    <p v-show="nota>=5 && edad>=18">{{nombre}} es mayor de edad.</p> 
    <p v-show="nota>=5 && edad<18">{{nombre}} no es mayor de edad.</p> 

    <h2>Pruebas de v-for</h2>
      <ul>
        <li v-for="i in cantidad">
          {{texto}}{{i}}. 
        </li>
      </ul>
      <h2>Lista de elementos:</h2>
        <ol>
          <li v-for="i in datos">
            {{i}}
          </li>
        </ol>
      <p>Cantidad de elementos: {{datos.length}}</p>
      <p>Ultimo elemento: {{datos[datos.length-1]}}</p>
    </div>
  `,
};

createApp(App).mount('#app');

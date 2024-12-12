const { createApp } = Vue;

const App = {
  data() {
    return {
      libros : [
        { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anno: 1967, editorial: "Editorial Sudamericana" },
        { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anno: 1605, editorial: "Francisco de Robles" },
        { titulo: "1984", autor: "George Orwell", anno: 1949, editorial: "Secker & Warburg" },
        { titulo: "Matar a un ruiseñor", autor: "Harper Lee", anno: 1960, editorial: "J.B. Lippincott & Co." },
        { titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald", anno: 1925, editorial: "Charles Scribner's Sons" },
        { titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", anno: 2001, editorial: "Planeta" },
        { titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", anno: 1866, editorial: "The Russian Messenger" },
        { titulo: "Orgullo y prejuicio", autor: "Jane Austen", anno: 1813, editorial: "T. Egerton, Whitehall" },
        { titulo: "El Hobbit", autor: "J.R.R. Tolkien", anno: 1937, editorial: "George Allen & Unwin" },
        { titulo: "La casa de los espíritus", autor: "Isabel Allende", anno: 1982, editorial: "Sudamericana" },
        { titulo: "El amor en los tiempos del cólera", autor: "Gabriel García Márquez", anno: 1985, editorial: "Editorial Oveja Negra" },
        { titulo: "La tregua", autor: "Mario Benedetti", anno: 1960, editorial: "Editorial Siglo XXI" },
        { titulo: "El túnel", autor: "Ernesto Sabato", anno: 1948, editorial: "Editorial Sur" },
        { titulo: "Los detectives salvajes", autor: "Roberto Bolaño", anno: 1998, editorial: "Anagrama" },
        { titulo: "Fahrenheit 451", autor: "Ray Bradbury", anno: 1953, editorial: "Ballantine Books" },
        { titulo: "La metamorfosis", autor: "Franz Kafka", anno: 1915, editorial: "Kurt Wolff Verlag" },
        { titulo: "Las aventuras de Huckleberry Finn", autor: "Mark Twain", anno: 1884, editorial: "Charles L. Webster And Company" },
        { titulo: "Ulises", autor: "James Joyce", anno: 1922, editorial: "Sylvia Beach" },
        { titulo: "En busca del tiempo perdido", autor: "Marcel Proust", anno: 1913, editorial: "Grasset" },
        { titulo: "El extranjero", autor: "Albert Camus", anno: 1942, editorial: "Gallimard" }
      ],
      anno_actual: new Date().getFullYear(),
      mostrar_libros:0,
      pagina_actual:1,
      libros_pagina:5,
    };
  },
  methods: {
    mostrar_todos(){
      if(this.mostrar_libros==0){
        this.mostrar_libros++;
      }else if(this.mostrar_libros==2){
        this.mostrar_libros--;
      }
    },
    mostrar_mayores75(){
      if(this.mostrar_libros==1){
        this.mostrar_libros++;
      }else if(this.mostrar_libros==0){
        this.mostrar_libros=2;
      }
    },
    ocultar(){
      this.mostrar_libros=0;
    },
    siguiente(){
      this.pagina_actual++;
    },
    anterior(){
      this.pagina_actual--;
    }
  },
  template: `
  <div>
    <h1>Libros</h1>
    <div v-if="mostrar_libros==1">
      <div v-for="libro in libros">
        {{ libro }}}
      </div>
    </div>
    <div v-if="mostrar_libros==2">
      <div v-for="libro in libros">
        <p>{{ anno_actual-libro.anno>75?libro:""}}</p>
      </div>
    </div>
    <button v-on:click="mostrar_todos()">Mostrar todos los libros</button>
    <button @click="mostrar_mayores75()">Mostrar mayores 75 años</button>
    <button @click="ocultar()">Ocultar</button>

    <h1>Paginación</h1>
      <div>
        <p v-for="libro in libros.slice(librosPorPagina * paginaActual-1)">{{libro}}</p>
      </div><br>
    <button v-on:click="anterior()">anterior</button>
    <label>{{paginacion}}</label>
    <button v-on:click="siguiente()">siguiente</button>

  </div>
  `,
};

createApp(App).mount('#app');

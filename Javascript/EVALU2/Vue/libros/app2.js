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
      mostrar:false,
      mayores75:false
    };
  },
  methods: {
    mostrar_todos() {
      this.mostrar = !this.mostrar;
      this.mayores75 = false; // Asegura que solo una lista esté visible
    },
    mostrar_mayores75() {
      this.mayores75 = !this.mayores75;
      this.mostrar = false; // Asegura que solo una lista esté visible
    }
  },
  template: `  
 <div>
      <!-- Lista completa -->
      <div v-if="mostrar">
        <h3>Todos los libros</h3>
        <ol>
          <li v-for="libro in libros" :key="libro.titulo">
            <strong>Título:</strong> {{ libro.titulo }}<br>
            <strong>Autor:</strong> {{ libro.autor }}<br>
            <strong>Año:</strong> {{ libro.anno }}<br>
            <strong>Editorial:</strong> {{ libro.editorial }}<br><br>
          </li>
        </ol>
      </div>

      <!-- Libros mayores de 75 años -->
      <div v-if="mayores75">
        <h3>Libros con más de 75 años de antigüedad</h3>
        <ol>
          <li v-for="libro in libros" :key="libro.titulo" v-if="anno_actual - libro.anno > 75">
            <strong>Título:</strong> {{ libro.titulo }}<br>
            <strong>Autor:</strong> {{ libro.autor }}<br>
            <strong>Año:</strong> {{ libro.anno }}<br>
            <strong>Editorial:</strong> {{ libro.editorial }}<br><br>
          </li>
        </ol>
      </div>

      <!-- Botones -->
      <button @click="mostrar_todos">Mostrar todos los libros</button>
      <button @click="mostrar_mayores75">Mostrar mayores 75 años</button>
    </div>
  `,
};

createApp(App).mount('#app');

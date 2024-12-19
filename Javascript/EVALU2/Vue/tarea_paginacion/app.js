const { createApp } = Vue;

createApp({
  template: `
  <div>
    <h1>Lista de comidas</h1>
    <ul>
      <li v-for="comida in paginatedfoods" :key="comida.id">
        <img :src="comida.imagen" :alt="comida.comida" width="100" height="100" />
        <div>
          <strong>{{ comida.comida }}</strong> (Origenes: {{ comida.origenes.toLocaleString() }})
          <br>
          País: {{ comida.pais }}, Continente: {{ comida.continente }}
        </div>
      </li>
    </ul>

    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
    </div>
  </div>
  `,
  data() {
    return {
      food: [
        { id: 1, comida: "Burrito", origenes: "Mexico y Texas(USA)", pais: "Mexico", continente: "America", imagen: "img/burrito.webp" },
        { id: 2, comida: "Carne Asada", origenes: "Mexico", pais: "Mexico", continente: "America", imagen: "img/carne_asada.webp" },
        { id: 3, comida: "Cuernito", origenes: "París", pais: "Francia", continente: "Europa", imagen: "img/cuernito.webp" },
        { id: 4, comida: "Ensalada", origenes: "Egypto", pais: "Egypto", continente: "Africa", imagen: "img/ensalada.webp" },
        { id: 5, comida: "Hamburguesa", origenes: "USA y Alemania", pais: "USA y Alemania", continente: "America y Europa", imagen: "img/hamburguesa.webp" },
        { id: 6, comida: "Lasagna", origenes: "Italia", pais: "Italia", continente: "Europa", imagen: "img/lasagna.webp" },
        { id: 7, comida: "Pancakes", origenes: "Antigua Grecia", pais: "Grecia", continente: "Europa", imagen: "img/pancakes.webp" },
        { id: 8, comida: "Pasta parmesana", origenes: "Italia", pais: "Italia", continente: "Europa", imagen: "img/pasta_parmesana.webp" },
        { id: 9, comida: "Pastel de chocolate", origenes: "America Central", pais: "Honduras, Costa Rica y Nicaragua", continente: "America", imagen: "img/pastel_chocolate.webp" }, 
        { id: 10, comida: "Pizza", origenes: "Italia", pais: "Italia", continente: "Europa", imagen: "img/pizza.webp" },
        { id: 11, comida: "Ravioles", origenes: "Italia", pais: "Italia", continente: "Europa", imagen: "img/ravioles.webp" },
        { id: 12, comida: "Salmon Teriyaki", origenes: "Japón", pais: "Japon", continente: "Asia", imagen: "img/salmon_teriyaki.webp" },
        { id: 13, comida: "Sushi", origenes: "Japón", pais: "Japón", continente: "Asia", imagen: "img/sushi.webp" },
        { id: 14, comida: "Tacos al pastor", origenes: "Mexico y Texas(USA)", pais: "Mexico", continente: "America", imagen: "img/tacos_al_pastor.webp" },
        { id: 15, comida: "Ttukbaegi", origenes: "Corea Norte y Sur", pais: "Corea Norte y Sur", continente: "Asia", imagen: "img/ttukbaegi.webp" }
      ],
      currentPage: 1,
      itemsPerPage:5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.food.length / this.itemsPerPage);
    },
    paginatedfoods() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.food.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
}).mount('#app');

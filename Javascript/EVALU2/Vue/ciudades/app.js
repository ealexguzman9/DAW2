const { createApp } = Vue;

createApp({
  template: `
    <div>
      <h1>Lista de Ciudades</h1>
      <ul>
        <li v-for="ciudad in paginatedCities" :key="ciudad.id">
          <img :src="ciudad.imagen" :alt="ciudad.ciudad" width="100" height="100" />
          <div>
            <strong>{{ ciudad.ciudad }}</strong> ({{ ciudad.habitantes.toLocaleString() }} habitantes)
            <br />
            {{ ciudad.pais }}, {{ ciudad.continente }}
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
      cities: [
        { id: 1, ciudad: "Tokio", habitantes: 13929286, pais: "Japón", continente: "Asia", imagen: "img/tokio.webp" },
        { id: 2, ciudad: "Nueva York", habitantes: 8419600, pais: "Estados Unidos", continente: "América", imagen: "img/nueva_york.webp" },
        { id: 3, ciudad: "París", habitantes: 2140526, pais: "Francia", continente: "Europa", imagen: "img/paris.webp" },
        { id: 4, ciudad: "Londres", habitantes: 8982000, pais: "Reino Unido", continente: "Europa", imagen: "img/londres.webp" },
        { id: 5, ciudad: "Sídney", habitantes: 5230330, pais: "Australia", continente: "Oceanía", imagen: "img/sidney.webp" },
        { id: 6, ciudad: "Ciudad del Cabo", habitantes: 433688, pais: "Sudáfrica", continente: "África", imagen: "img/ciudad_del_cabo.webp" },
        { id: 7, ciudad: "Buenos Aires", habitantes: 3075646, pais: "Argentina", continente: "América", imagen: "img/buenos_aires.webp" },
        { id: 8, ciudad: "Bangkok", habitantes: 10539000, pais: "Tailandia", continente: "Asia", imagen: "img/bangkok.webp" },
        { id: 9, ciudad: "Moscú", habitantes: 12635466, pais: "Rusia", continente: "Europa", imagen: "img/moscu.webp" },
        { id: 10, ciudad: "Estambul", habitantes: 15462452, pais: "Turquía", continente: "Europa", imagen: "img/estambul.webp" },
        { id: 11, ciudad: "Toronto", habitantes: 2731571, pais: "Canadá", continente: "América", imagen: "img/toronto.webp" },
        { id: 12, ciudad: "Dubái", habitantes: 3331400, pais: "Emiratos Árabes Unidos", continente: "Asia", imagen: "img/dubai.webp" },
        { id: 13, ciudad: "Hong Kong", habitantes: 7481800, pais: "China", continente: "Asia", imagen: "img/hong_kong.webp" },
        { id: 14, ciudad: "Madrid", habitantes: 3265038, pais: "España", continente: "Europa", imagen: "img/madrid.webp" },
        { id: 15, ciudad: "Roma", habitantes: 2870500, pais: "Italia", continente: "Europa", imagen: "img/roma.webp" },
        { id: 16, ciudad: "Mumbai", habitantes: 20411000, pais: "India", continente: "Asia", imagen: "img/mumbai.webp" },
        { id: 17, ciudad: "Sao Paulo", habitantes: 12396372, pais: "Brasil", continente: "América", imagen: "img/sao_paulo.webp" },
        { id: 18, ciudad: "Seúl", habitantes: 9720846, pais: "Corea del Sur", continente: "Asia", imagen: "img/seul.webp" },
        { id: 19, ciudad: "Ciudad de México", habitantes: 9209944, pais: "México", continente: "América", imagen: "img/ciudad_de_mexico.webp" },
        { id: 20, ciudad: "El Cairo", habitantes: 20484965, pais: "Egipto", continente: "África", imagen: "img/el_cairo.webp" },
        { id: 21, ciudad: "Pekín", habitantes: 21707000, pais: "China", continente: "Asia", imagen: "img/pekin.webp" },
        { id: 22, ciudad: "Johannesburgo", habitantes: 5596400, pais: "Sudáfrica", continente: "África", imagen: "img/johannesburgo.webp" },
        { id: 23, ciudad: "Viena", habitantes: 1911191, pais: "Austria", continente: "Europa", imagen: "img/viena.webp" },
        { id: 24, ciudad: "Ámsterdam", habitantes: 872757, pais: "Países Bajos", continente: "Europa", imagen: "img/amsterdam.webp" },
        { id: 25, ciudad: "Santiago", habitantes: 5253000, pais: "Chile", continente: "América", imagen: "img/santiago.webp" },
        { id: 26, ciudad: "Melbourne", habitantes: 5089000, pais: "Australia", continente: "Oceanía", imagen: "img/melbourne.webp" },
        { id: 27, ciudad: "Oslo", habitantes: 699827, pais: "Noruega", continente: "Europa", imagen: "img/oslo.webp" },
        { id: 28, ciudad: "Lisboa", habitantes: 545245, pais: "Portugal", continente: "Europa", imagen: "img/lisboa.webp" },
        { id: 29, ciudad: "Rio de Janeiro", habitantes: 6747815, pais: "Brasil", continente: "América", imagen: "img/rio_de_janeiro.webp" },
        { id: 30, ciudad: "Singapur", habitantes: 5638700, pais: "Singapur", continente: "Asia", imagen: "img/singapur.webp" },
      ],
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.cities.length / this.itemsPerPage);
    },
    paginatedCities() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.cities.slice(start, end);
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

const { createApp } = Vue;

createApp({
  data() {
    return {
      // Lista de productos disponibles en la tienda
      products: [
        { id: 1, name: 'iPhone 15 Pro', price: 1200, image: 'img/iphone.webp', specs: '6.1", 128GB, 8GB RAM, Triple Cámara 48MP', quantity: 1 },
        { id: 2, name: 'Samsung Galaxy S23 Ultra', price: 1300, image: 'img/samsung.webp', specs: '6.8", 256GB, 12GB RAM, Cámara 200MP', quantity: 1 },
        { id: 3, name: 'Google Pixel 8 Pro', price: 1000, image: 'img/pixel.webp', specs: '6.7", 128GB, 12GB RAM, Cámara 50MP', quantity: 1 },
        { id: 4, name: 'Xiaomi 13 Pro', price: 950, image: 'img/xiaomi.webp', specs: '6.73", 256GB, 12GB RAM, Cámara 1"', quantity: 1 },
        { id: 5, name: 'OnePlus 11', price: 900, image: 'img/one.webp', specs: '6.7", 256GB, 16GB RAM, Cámara 50MP', quantity: 1 },
        { id: 6, name: 'Huawei P60 Pro', price: 1100, image: 'img/huawei.webp', specs: '6.6", 512GB, 12GB RAM, Cámara Triple', quantity: 1 },
        { id: 7, name: 'Sony Xperia 1 V', price: 1400, image: 'img/sony.webp', specs: '6.5", 256GB, 12GB RAM, Cámara 12MP', quantity: 1 },
        { id: 8, name: 'Oppo Find X6 Pro', price: 1200, image: 'img/opo.webp', specs: '6.82", 256GB, 12GB RAM, Cámara Triple', quantity: 1 },
        { id: 9, name: 'Asus ROG Phone 7', price: 1100, image: 'img/asus.webp', specs: '6.78", 512GB, 16GB RAM, Cámara 50MP', quantity: 1 },
        { id: 10, name: 'Realme GT 3', price: 800, image: 'img/realme.webp', specs: '6.74", 256GB, 12GB RAM, Cámara 50MP', quantity: 1 },
        { id: 11, name: 'Motorola Edge 40 Pro', price: 850, image: 'img/moto.webp', specs: '6.7", 256GB, 12GB RAM, Cámara 50MP', quantity: 1 },
        { id: 12, name: 'Nothing Phone 2', price: 700, image: 'img/not.webp', specs: '6.7", 256GB, 12GB RAM, Cámara Dual', quantity: 1 },
        { id: 13, name: 'Vivo X90 Pro', price: 1000, image: 'img/vivo.webp', specs: '6.78", 256GB, 12GB RAM, Cámara Triple', quantity: 1 },
        { id: 14, name: 'Honor Magic 5 Pro', price: 950, image: 'img/honor.webp', specs: '6.81", 256GB, 12GB RAM, Cámara Triple', quantity: 1 },
        { id: 15, name: 'Nubia Z50 Ultra', price: 900, image: 'img/nubia.webp', specs: '6.8", 256GB, 12GB RAM, Cámara Triple', quantity: 1 },
      ],
      // Lista de productos en el carrito
      cart: [],
      // Control de visibilidad del carrito
      isSidebarVisible: false,
      // Página actual de los productos
      currentPage: 1,
      // Cantidad de productos mostrados por página
      itemsPerPage: 5,
    };
  },
  computed: {
    // Cálculo del total de páginas necesarias
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
    // Obtención de los productos para la página actual
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.products.slice(start, end);
    },
    // Cálculo del total del carrito
    total() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
  },
  methods: {
    // Agregar un producto al carrito
    addToCart(product) {
      const item = this.cart.find((i) => i.id === product.id);
      if (item) {
        // Si el producto ya está en el carrito, incrementar su cantidad
        item.quantity += product.quantity;
      } else {
        // Si no está en el carrito, agregarlo
        this.cart.push({ ...product });
      }
    },
    // Alternar la visibilidad del carrito
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    // Cambiar a la página siguiente
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    // Cambiar a la página anterior
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
}).mount('#app');

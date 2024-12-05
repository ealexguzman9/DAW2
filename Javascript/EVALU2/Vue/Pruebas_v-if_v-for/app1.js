const { createApp } = Vue;

const App = {
  data() {
    return {
      servicios: [
        {
          nombre: 'Desarrollo web',
          precio: 300,
          activo:true
        },{
          nombre: 'Diseño base de datos',
          precio: 400,
          activo:false
        },{
          nombre: 'Integración',
          precio: 250,
          activo:false
        },{
          nombre: 'Formación',
          precio: 220,
          activo:true
        }
      ]

    };
  },
  methods: {
  },
  template: `
    <div>
      <li v-for="servicio in servicios">
      {{ servicio.nombre }}, Precio: {{ servicio.precio }}
      </li>
    </div>
  `,
};

createApp(App).mount('#app');

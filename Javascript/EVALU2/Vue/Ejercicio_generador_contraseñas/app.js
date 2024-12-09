const { createApp } = Vue;

const App = {
  data() {
    return {
      caja: "",
      longitud: 20,
      minusculas: "abcdefghijklmnopqrstuvwxyz", 
      mayusculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
      digitos: "0123456789", 
      simbolos: "#$%&'()*+-./:;<=>?@[]^_`{|}",
      caracteresPermitidos: "", 
      incluirMinusculas: true, 
      incluirMayusculas: false, 
      incluirDigitos: false, 
      incluirSimbolos: false, 
    };
  },
  methods: {
    generar_contraseña() {
      let caracteresDisponibles = "";
      if (this.incluirMinusculas)
        caracteresDisponibles = caracteresDisponibles + this.minusculas;
      if (this.incluirMayusculas)
        caracteresDisponibles = caracteresDisponibles + this.mayusculas;
      if (this.incluirDigitos)
        caracteresDisponibles = caracteresDisponibles + this.digitos;
      if (this.incluirSimbolos)
        caracteresDisponibles = caracteresDisponibles + this.simbolos;

      if (caracteresDisponibles.length === 0) {
        alert("Por favor, selecciona al menos una opción");
        return;
      }
      let contrasena = "";
      for (let i = 0; i < this.longitud; i++) {
        const randomChar = caracteresDisponibles.charAt(Math.floor(Math.random() * caracteresDisponibles.length));
        contrasena = contrasena + randomChar;
      }
      this.caja = contrasena;
    },
    copiarAlPortapapeles() {
      if(this.caja===""){
        alert("Error, Debes generar una contraseña para copiar en el portapapeles.");
      } else {
      navigator.clipboard.writeText(this.caja)
        .then(() => {
          alert("Contraseña copiada al portapapeles");
        })
      }
    }
  },
  template: `
    <div>
       <h1>Generador de contraseñas</h1>
      <input 
        v-model="caja"
        type="text"
        placeholder=""
        readonly
      />
      <button type="button" @click="copiarAlPortapapeles">Copiar</button><br>
      <br><label>Longitud: {{ longitud }}</label>
      <input type="range" min="20" max="255" v-model="longitud" /><br>
      <label><input type="checkbox" v-model="incluirMinusculas">Minúsculas</label>
      <label><input type="checkbox" v-model="incluirMayusculas">Mayúsculas</label>
      <label><input type="checkbox" v-model="incluirDigitos">Dígitos</label>
      <label><input type="checkbox" v-model="incluirSimbolos">Símbolos</label><br>

      <button type="button" @click="generar_contraseña">Generar</button>
    </div>
  `,
};

createApp(App).mount('#app');

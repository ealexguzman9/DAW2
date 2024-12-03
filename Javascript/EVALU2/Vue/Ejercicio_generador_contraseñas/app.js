const { createApp } = Vue;

const App = {
  data() {
    return {
      caja: "",
      longitud: 8,
      minusculas: "abcdefghijklmnopqrstuvwxyz", 
      mayusculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
      digitos: "0123456789", 
      simbolos: "!@#$%^&*()_-+=<>?/[]{}",
      caracteresPermitidos: "", 
      incluirMinusculas: false, 
      incluirMayusculas: false, 
      incluirDigitos: false, 
      incluirSimbolos: false, 
    };
  },
  methods: {
    generar_contraseña() {
      let caracteresDisponibles = "";
      if (this.incluirMinusculas) caracteresDisponibles += this.minusculas;
      if (this.incluirMayusculas) caracteresDisponibles += this.mayusculas;
      if (this.incluirDigitos) caracteresDisponibles += this.digitos;
      if (this.incluirSimbolos) caracteresDisponibles += this.simbolos;

      if (caracteresDisponibles.length === 0) {
        this.caja = "Por favor, selecciona al menos una opción";
        return;
      }
      let password = "";
      for (let i = 0; i < this.longitud; i++) {
        const randomChar = caracteresDisponibles.charAt(Math.floor(Math.random() * caracteresDisponibles.length));
        password += randomChar;
      }
      this.caja = password;
    },
    copiarAlPortapapeles() {
      navigator.clipboard.writeText(this.caja)
        .then(() => {
          alert("Contraseña copiada al portapapeles");
        })
        .catch(err => {
          alert("Error al copiar la contraseña: " + err);
        });
    }
  },
  template: `
    <div>
      <input 
        v-model="caja"
        type="text"
        placeholder="Contraseña generada"
        readonly
      />
      <button type="button" @click="copiarAlPortapapeles">Copiar</button><br>
      
      <label>Longitud: {{ longitud }}</label>
      <input type="range" min="1" max="20" v-model="longitud" /><br>

      <!-- Checkboxes para elegir los tipos de caracteres -->
      <label><input type="checkbox" v-model="incluirMinusculas"> Minúsculas</label>
      <label><input type="checkbox" v-model="incluirMayusculas"> Mayúsculas</label>
      <label><input type="checkbox" v-model="incluirDigitos"> Dígitos</label>
      <label><input type="checkbox" v-model="incluirSimbolos"> Símbolos</label><br>

      <button type="button" @click="generar_contraseña">Generar Contraseña</button>
    </div>
  `,
};

createApp(App).mount('#app');

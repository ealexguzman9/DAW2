const { createApp } = Vue;

const App = {
  data() {
    return {
      letra:"",
      minusculas:"abcdefghijklmnopqrstuvwxyz"
    };
  },
  methods: {
    generar_contraseña(){
    this.letra = minusculas.charAt(Math.floor(Math.random() * minusculas.length))
    }
  },
  template: `
    <input 
    v-model="caja"
    type="textbox"
    placeholder=""
    />
    <button type="submit">Copiar</button><br>
    <input type="range" min="1" max="20" v-model="longitud">

    <br>
    <label><input type="checkbox" v-model="minusculas">Minúsculas</label>
    <label><input type="checkbox" v-model="minusculas">Mayúsculas</label>
    <label><input type="checkbox" v-model="digitos">Dígitos</label>
    <label><input type="checkbox" v-model="simbolos">Símbolos</label><br>
    <button type="submit" @click="generar_contraseña">Generar</button>
  `,
};
/*Navigator.clipboard.writeText("aqui ira la variable a copiar")*/
// Crear la aplicación y montarla en el elemento con id="app"
createApp(App).mount('#app');
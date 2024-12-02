const { createApp } = Vue;

const App = {
  data() {
    return {
      minusculas:"abcdefghijklmnopqrstuvwxyz",
    };
  },
  template: `
    <input 
    v-model="caja"
    type="textbox"
    placeholder=""
    />

    <button type="submit">Copiar</button><br>
    
    <input
    v-model="longitud"
    type="number"
    placeholder="1"
    />
    <br>
    <label><input type="checkbox" v-model="minusculas">Minúsculas</label>
    <label><input type="checkbox" v-model="minusculas">Mayúsculas</label>
    <label><input type="checkbox" v-model="digitos">Dígitos</label>
    <label><input type="checkbox" v-model="simbolos">Símbolos</label><br>
    <button type="submit">Generar</button>
    <p>letra: {{ minusculas.charAt(Math.floor(Math.random() * minusculas.length)) }}</p>
  `,
};
/*Navigator.clipboard.writeText("aqui ira la variable a copiar")*/
// Crear la aplicación y montarla en el elemento con id="app"
createApp(App).mount('#app');
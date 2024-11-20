/*1*/
const aleatorios = [1, 6, 10, 16, 20];
console.log("La resta total será: " + (Math.max(...aleatorios) - Math.min(...aleatorios)));

/*2*/
//Muestra la cantidad de de nombres que contienen la h o H
const nombres = ["John", "Sarah", "Anne", "Charlotte", "Oscar"];
let nomContienenH = 0;
for(let i =0; i <nombres.length; i++){
    if(nombres[i].indexOf("h")>=0 ||nombres[i].indexOf("H")>=0){
    nomContienenH++;
    }
}
console.log("Cantidad de nombres que contienen h: " + nomContienenH)



/*4*/
const personas = [
    {
      nombre: "Jon Ander",
      apellido: "Pérez",
      edad: 25,
      telefono: "123-456-7890",
      ciudad: "Donostia"
    },
    {
      nombre: "María",
      apellido: "Gómez",
      edad: 16,
      telefono: "987-654-3210",
      ciudad: "Tolosa"
    },
    {
      nombre: "Ane",
      apellido: "López",
      edad: 22,
      telefono: "555-123-4567",
      ciudad: "Donostia"
    },
    {
      nombre: "Ana",
      apellido: "Martínez",
      edad: 18,
      telefono: "222-333-4444",
      ciudad: "Donostia"
    },
    {
      nombre: "Pedro",
      apellido: "Sánchez",
      edad: 19,
      telefono: "999-888-7777",
      ciudad: "Madrid"
    }
  ];
//¿Cuantas personas hay?
console.log("Hay: " + personas.length + " personas en el array.");

//¿Cuantas personas hay que tienen entre 20 y 25 años?
let pEntr20y25 = 0;
for(let i = 0; i < personas.length; i++){
    if(personas[i].edad >= 20 && personas[i].edad <= 25 ){
        pEntr20y25++;
    }
}
console.log("Hay: " + pEntr20y25 + " personas que oscilan entre las edades de 20 y 25");

//Haz que las personas de Donostia tengan un año más.
let prueba = 0;
for(let i = 0; i < personas.length; i++){
    if(personas[i].ciudad == "Donostia"){
        personas[i].edad = personas[i].edad+1;
    }
}
console.log(personas);

//Intercambia los telefonos de las personas en posiciones 2 y 4
let tel1 = personas[1].telefono;
console.log(tel1)
console.log(personas[1].telefono)

//¿Cual es el nombre y apellido de la persona mas joven?
let nombPersEdadMin = "";
let apellPersEdadMin = "";
let edadMin = 0;
for(let i = 0; i < personas.length; i++){
    if(edadMin = Math.min(personas[i].edad)){
        nombPersEdadMin = personas[i].nombre
        apellPersEdadMin = personas[i].apellido
    }
}
console.log("El nombre de la persona con la menor edad es: " + nombPersEdadMin + " "+ apellPersEdadMin);



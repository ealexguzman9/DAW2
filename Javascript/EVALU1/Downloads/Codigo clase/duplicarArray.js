const frutas=["Naranja","Melón","Manzana","Pera"];

// Slice
const frutas2=frutas.slice();
frutas2[1]="Sandía";
console.log(frutas);
console.log(frutas2);

// Spread
const frutas3=[...frutas];
frutas3[1]="Sandía";
console.log(frutas);
console.log(frutas3);

// Array.from
const frutas4 = Array.from(frutas);
frutas4[1]="Sandía";
console.log(frutas);
console.log(frutas4);

// forEach
const frutas5=[];
function acumular(fruta){
  frutas5.push(fruta);
}
frutas.forEach(acumular);
acumular("Naranja");
acumular("Melón");
acumular("Manzana");
acumular("Pera");

frutas5[1]="Sandía";
console.log(frutas);
console.log(frutas5);




// while
let i=0;
while(i<nums.length){
  suma += nums[i];
  i++;
}
console.log(suma);


// do while
let i=0;
do{
  suma += nums[i++];
}while(i<nums.length)
console.log(suma);

for(let i=0;i<nums.length;i++)
  suma+=nums[i];
console.log(suma);

//for-of
for(elemento of nums)
  suma += elemento;
console.log(suma);

suma=0;
//for-in
for(posicion in nums)
  suma += nums[posicion];
console.log(suma);

//forEach
function sumarNumeros(valor){
  suma += valor;
}

nums.forEach(sumarNumeros);
console.log(suma);
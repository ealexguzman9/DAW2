const nums=[11,4,17,19,3,6,10];

function esImpar(elemento){
  if(elemento % 2 != 0)
    return true;
  else
    return false;
    
}

const numsImpares = nums.filter(esImpar);
console.log(nums);
console.log(numsImpares);

/*const numsImpares=[];
for(let i=0;i<nums.length;i++)
  if(nums[i] % 2 != 0)
    numsImpares.push(nums[i]);
console.log(nums);
console.log(numsImpares);*/


function doblar(elemento){
  return elemento * 2;
}
const numsDobles = nums.map(doblar);

console.log(nums);
console.log(numsDobles);
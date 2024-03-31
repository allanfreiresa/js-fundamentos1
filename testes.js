let i = 5;
let valorA = i++;
let valorB = ++i;

console.log("O valor de valorA é:", valorA);
console.log("O valor de valorB é:", valorB);

const numeros = [100, 200, 300, 400, 500, 600];
 
for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}

console.log("");


const numeros2 = [100, 200, 300, 400, 500, 600];
 
for (let i = numeros2.length - 1; i >= 0; i -= 2) {
  console.log(numeros2[i]);
}


console.log("numeros pares");
const numerosPares = [];
 
for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}
 
console.log(numerosPares);

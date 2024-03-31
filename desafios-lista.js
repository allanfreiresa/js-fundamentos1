//1 - Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

console.log("");
console.log("Iniciando exercicio 1");


function imprimeElementos(arr) {
    for (let elemento of arr) {
        console.log(elemento); // Imprime cada elemento do array
    }
}

const meuArray = ['a', 'b', 'c'];
imprimeElementos(meuArray);

//2 - Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
const listinha = ['banana', 'gatinho', 'brócolis'];

console.log("");
console.log("Iniciando exercicio 2");

function imprimeIndiceEElemento(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`índice ${i}, elemento ${arr[i]}`);
  }
}

imprimeIndiceEElemento(listinha);

//3 - Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
const listaNumeros = [10, 11, 12, 10, 11, 12, 10, 11, 12, 10, 11, 12];
console.log("");
console.log("Iniciando exercicio 3");

function soma(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(soma(listaNumeros));

//4 - Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
const arrMenoresMaiores = [5, 37, 18, 59, 12, -5];

console.log("");
console.log("Iniciando exercicio 4");

function imprimeMaiorEMenor(arr) {

  let maior = 0;
  let menor = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > maior) {
        console.log(arr[i])
        maior = arr[i]
    }
    if (arr[i] < menor) {
        console.log(arr[i])
      menor = arr[i]
    }
  }
  return `o maior número é ${maior} e o menor número é ${menor}`;
}

console.log(imprimeMaiorEMenor(arrMenoresMaiores));

//5 - Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

console.log("");
console.log("Iniciando exercicio 5");

console.log('Números pares do array:');

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }
}

//6 - Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
const numeros2 = [10, 8, 6, 9, 7, 5];
let soma2 = 0;

console.log("");
console.log("Iniciando exercicio 6");

for (let i = 0; i < numeros2.length; i++) {
  soma2 += numeros2[i];
}

const media = soma2 / numeros2.length;
console.log('Array:', numeros2);
console.log('Média dos números:', media);
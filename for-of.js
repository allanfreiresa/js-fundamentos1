const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let nota of notas) {
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`a média das notas é ${media}`);



const precos = [5.5, 6.2, 14, 19.5];

let desconto = 0.90;

let preconew = 0;

for (let preco of precos) {
 //console.log(preco);
 preco = preco * desconto;
 preconew = preco * desconto;
 //console.log(preconew);
 
}

console.log(precos);
console.log(preconew);


const numeros = [5, 8, 6, 10, 7];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

const media = soma / numeros.length;

console.log("A média dos números é:", media);



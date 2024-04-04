const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

/*notas.forEach(function (nota) {
    somaDasNotas += nota;
})*/

notas.forEach(somaNotas);

function somaNotas(nota){
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`a média das notas é ${media}`);



const notas2 = [5.5, 6.5, 10, 9.5];

notas2.forEach(function (nota2) {
 console.log(nota2);
})



const lista = [1, 2, 3, 4, 5];
let soma = 0;
 
lista.forEach(numero => soma += numero);
console.log(soma) //15

/*lista.forEach(numero => {
    soma += numero
   });
   ou

   lista.forEach(function (numero) {
         soma += numero
    });

   */

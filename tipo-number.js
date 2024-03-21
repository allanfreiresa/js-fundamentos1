const notaPrimeiroBi = 8 ;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
//const notaQuartoBi = 5;
const notaQuartoBi = Number.parseInt('5');


const total =(notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

console.log('A média é :' + total.toFixed(2));

//conversao para number

console.log(Number("1")); // retorna o número 1 
console.log(Number("Alura")); // retorna NaN
console.log(Number(undefined)); // retorna NaN
console.log(Number(null)); // retorna 0



console.log(parseInt('4')); // retorna o número 4
console.log(parseInt('4.5')); // retorna o número 4

console.log(parseFloat('4')); // retorna o número 4
console.log(parseFloat('4.5')); // retorna o número 4.5
console.log(parseFloat('4.5abc')); // retorna o número 4.5

+'45' // retorna o número 45
+true // retorna o número 1

console.log(typeof +'45'); // retorna ‘number’
console.log(typeof +true); // retorna ‘number’



const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados)

const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"
 
const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura



const listaProdutos = ['pôster A4', 'pôster A5', 'camiseta lisa', 'camiseta estampada', 'pin de metal', 'cartela de adesivos'];

const listaAtualizada = listaProdutos.map((produto) => {
 return `${produto} - unidade`;
})

console.log(listaAtualizada);



const numeros = [2, 4, 6, 8];
let soma = 0;

numeros.forEach(numero => {
    soma += numero;
});

console.log("A soma dos números é:", soma);



const arrayNums = [1, 2, 3, 4]

/*function multiplicaPorDez(num) {
    return num * 10
   }*/
//const arraySomada = arrayNums.map(multiplicaPorDez)

const arraySomada = arrayNums.map(num => num * 10)
 
console.log(arraySomada)


// console.log(arraySomada)



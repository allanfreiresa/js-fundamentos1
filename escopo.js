
//Escopo Global 

const nome = "Camila"; // variável global

function cumprimentar() {
  console.log(`Olá, ${nome}!`); // Acessa a var global
}

cumprimentar(); // ‘Olá, Camila!”


//escopo de bloco
if (1 > 0) {
    let nome = 'Ana';
    console.log(nome); // ‘Ana’
  }
  
  // variável `nome` não está acessível
  console.log(nome); // Error: nome is not defined
  

  //Variaveis VAR

  if (1 > 0) {
    var nome1 ='Ana';
    console.log(nome1); // ‘Ana’
  }
  
  console.log(nome1); // ‘Ana’
  
//Escopo função
function cumprimentar() {
    const nome2 = 'Camila'; // variável local
    const cumprimento = 'Olá'; // variável local
    console.log(`${cumprimento}, ${nome2}!`); // “Olá, Camila!”
  }
  
  // as variáveis não podem ser acessada de fora da função
 // console.log(`${cumprimento}, ${nome2}!`); // Dará erro de “not defined” no console
  


  
/*

const estudante = 'Caroline';
if (1 > 0 ) {
    console.log(estudante);
}
console.log(estudante);

let variavel = 10;
const constante = 20;

console.log(variavel);
console.log(constante);


//const nome = 'Alice';
//console.log(`Olá, meu nome é ${nome}.`);


if (1 > 0) {
    let nome = 'Ana';
    console.log(nome); // ‘Ana’
  }
  
  // variável `nome` não está acessível
  //console.log(nome); // Error: nome is not defined
  

  if (true) {
    let num1 = 10;
    var num2 = 20;
  }

  console.log(num2); // Error: nome is not defined
  //console.log(num2); // Error: nome is not defined
  

  let numero = 10;
let nome = "Alice";

if (numero === 10) {
  console.log("O número é 10.");
} else {
  console.log("O número não é 10.");
}

if (nome === "Alice") {
  console.log("Boas vindas, Alice!");
} else {
  console.log("Você não é a Alice.");
}
*/
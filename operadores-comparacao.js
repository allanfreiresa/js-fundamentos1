const estudante = 'Fernando';
const estaAprovado = true;

if (estaAprovado === true) { 
  console.log('parabéns, boas festas');
} else {
  console.log('REPROVADO, boas festas');
}

if (estudante === 'Fernando') {
  console.log(`olá, ${estudante}`);
} else {
  console.log('quem é vc');
}

const idadeMinima = 18;
const idadeEstudante = 16;

if (idadeEstudante >= idadeMinima) {
    console.log('não precisa de autorização.')
} else {
    console.log('precisa de autorização.')
}


const valor1 = 50;
const texto = valor1 < 50 ? 'valor insuficiente' : 'valor suficiente';
console.log(texto); // retorna ‘valor suficiente’


let matriculaAtiva = true;

function verificaMatriculaAtiva() {
 if (matriculaAtiva === true) {
   return 'matrícula ativa no sistema';
 } else {
   return 'matrícula não está ativa';
 }
}

console.log(verificaMatriculaAtiva());
// retorna 'matrícula ativa no sistema'


//mesma logica com operador ternario
let matriculaAtiva1 = true;

function verificaMatriculaAtiva1() {
 return matriculaAtiva1 ? 'matrícula ativa no sistema' : 'matrícula não está ativa';
}

console.log(verificaMatriculaAtiva1());
// retorna 'matrícula ativa no sistema'


let valor1s = '5';
let valor2 = 5;

let resultado1 = valor1s + valor2;
let resultado2;

if (valor1s === valor2) {
 resultado2 = 'Os valores são iguais.';
} else {
 resultado2 = 'Os valores são diferentes.';
}

console.log('Resultado 1:', resultado1);
console.log('Resultado 2:', resultado2);

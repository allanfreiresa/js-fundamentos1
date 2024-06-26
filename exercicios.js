//1 - Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e 
//atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.

const texto = 'Olá, mundo!';
const numero = 42;
const booleano = true;

console.log(typeof texto); // String
console.log(typeof numero); // Number
console.log(typeof booleano); // Boolean


//2 - Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, 
//combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. 
//Por fim, imprima os resultados obtidos no console.

const primeiroNome = 'Carlos';
const ultimoNome = 'Drummond de Andrade';

// Usando o operador +
const nomeCompletoConcatenado = primeiroNome + ' ' + ultimoNome;
console.log('Usando operador +: ', nomeCompletoConcatenado);

// Usando template strings
const nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`;
console.log(`Usando template strings: ${nomeCompletoTemplate}`);


//3 - Declare duas variáveis, uma contendo um número e outra contendo uma string. 
//Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console


const numero1 = 42;
const string = 'universo';

const texto1 = `${numero1} é a resposta para a pergunta mais importante do ${string}`;
console.log(texto1);


//4 - Crie uma variável inicializada com um valor de qualter tipo e, em seguida, 
//reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.
let minhaVariavel = 'Primeiro valor';
console.log(minhaVariavel);

minhaVariavel= 'Novo valor';
console.log(minhaVariavel);

//5- Declare uma variável usando var fora de um bloco de código (por exemplo, if) 
//e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloc e fora dele 
//utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.
var fora = 'Fora do bloco';

if (true) {
    var dentro = 'Dentro do bloco';
    console.log(fora); // retorna 'Fora do bloco'
    console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // retorna 'Dentro do bloco'

/////////////////////

let fora1 = 'Fora1 do bloco';

if (true) {
    let dentro = 'Dentro do bloco';
    console.log(fora1); // retorna 'Fora do bloco'
    console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora1); // retorna 'Fora do bloco'
console.log(dentro); // erro 'dentro is not defined'

//6- Declare uma variável booleana que informa se está chovendo e 
//utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é 
//preciso levar um guarda-chuva ou não dependendo do valor da variável.

const estaChovendo = true;

if (estaChovendo) {
    console.log('É melhor levar um guarda-chuva!');
} else {
    console.log('O tempo está bom, sem necessidade de guarda-chuva.');
}



//VErificar variaveis NaN - not a number

const numero3 = 10;
const nome3 = 'Ana';

console.log(Number.isNaN(numero3)) // false
console.log(Number.isNaN(nome3)) // false
console.log(Number.isNaN(NaN)) // true

console.log(isNaN(10)) // false
console.log(isNaN(nome3)) // true
console.log(isNaN(NaN))



const estudante = "Caroline";
const docente = 'Ana';
const cumprimento =  "nosso lema é 'estudar bastante' ";
const citacao = `Ju diz: "Nosso Lema é " 'estudar bastante' `;

console.log(cumprimento);
console.log(citacao);

console.log('a estudante chama ' + estudante);

//template String
console.log(`a estudante chama ${estudante}`);

const senha = "Senha segura" + estudante.toUpperCase();
console.log(senha);



const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


//conversao para string
console.log(String(2)); // retorna '2'
console.log(String(undefined)); // retorna 'undefined'
console.log(String(true)); // retorna 'true'

console.log('estudando JavaScript'.includes('Java')); // retorna true

const texto = 'estudando JavaScript';
console.log(texto.includes('Java')); // retorna true


'POR FAVOR, NÃO GRITE'.toLowerCase(); // retorna 'por favor, não grite'


const texto4 = 'POR FAVOR, NÃO GRITE';
texto4.toLowerCase(); // retorna 'por favor, não grite'



console.log(Number(true));
console.log(Number(false));
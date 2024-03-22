function calculaProduto(a, b = 2, c = 1) {
    return a * b * c;
  }
  
  const resultado1 = calculaProduto(3);
  const resultado2 = calculaProduto(2, 4);
  const resultado3 = calculaProduto(1, 2, 3);
  const resultado4 = calculaProduto(2, undefined, 5);
  
  console.log("Resultado 1:", resultado1);
  console.log("Resultado 2:", resultado2);
  console.log("Resultado 3:", resultado3);
  console.log("Resultado 4:", resultado4);
  

  // Função de calculadora simples
function calculadoraSimples(a, b, operacao) {
  let resultado;
  if (operacao === 'soma') {
      resultado = a + b;
  } else if (operacao === 'subtracao') {
      resultado = a - b;
  } else if (operacao === 'multiplicacao') {
      resultado = a * b;
  } else if (operacao === 'divisao') {
      resultado = a / b;
  } else {
      resultado = 'Operação não reconhecida';
  }
  return resultado;
}

console.log(`resultado primeira funcao sem arrow ${calculadoraSimples(10, 20, 'multiplicacao')}`)
//refatorando a funcao

const calculadoraSimples2 = (a, b, operacao) => {
  if (operacao === 'soma') {
      return a + b;
  } else if (operacao === 'subtracao') {
      return a - b;
  } else if (operacao === 'multiplicacao') {
      return a * b;
  } else if (operacao === 'divisao') {
      return a / b;
  } else {
      return 'Operação não reconhecida';
  }
};

console.log(`resultado primeira funcao sem arrow ${calculadoraSimples(10, 20, 'soma1')}`)
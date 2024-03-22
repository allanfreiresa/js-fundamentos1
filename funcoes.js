function exibeNomeEstudante (nome, nota) {
    console.log(`o nome é ${nome} e a nota é ${nota}`);
}

exibeNomeEstudante('Allan', 9);
exibeNomeEstudante('Brendinha', 10);



function exibeInfosEstudante (nome, nota) {
    return `o nome é ${nome} e a nota é ${nota}`;
}


console.log(exibeInfosEstudante('Brendinha', 10));



// declaração da função
function somarDoisNumeros(numA, numB) {
    return numA + numB;
   }
   
   // execução (ou chamada) da função
   somarDoisNumeros(2, 2);
   
   // atribuindo o retorno de uma função a uma variável
   const resultado1 = somarDoisNumeros(2, 2);
   console.log(resultado1);
   



   function dividir(dividendo, divisor) {
    return dividendo / divisor;
   }
   
   const resultado2 = dividir(10, 2);
   console.log(`o resultado é ${resultado2}`); // o resultado é 5
   

   function dividir2(dividendo, divisor) {
     dividendo / divisor;  // teste sem o return
   }
   
   const resultado3 = dividir2(10, 2);
   console.log(`o resultado é ${resultado3}`); // o resultado é undefined



   function dividir(dividendo, divisor) {
    return dividendo / divisor;
    // este console não é executado
    console.log('fim da função');
   }
   
   const resultado4 = dividir(10, 5);
   console.log(`o resultado é ${resultado4}`); // o resultado é 2



   function dividir(dividendo, divisor) {
    if (divisor !== 0) {
        console.log('deu certo')
      return dividendo / divisor;
    } else {
      return 'favor não dividir por zero';
    }
   }
   
   const resultado6 = dividir(10, 5);
   console.log(resultado6); // 2
   const resultadoZero = dividir(10, 0);
   console.log(resultadoZero); // 'favor não dividir por zero'
   
   
   
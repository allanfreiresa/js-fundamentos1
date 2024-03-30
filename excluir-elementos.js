const notas = [10, 6, 8, 5.5, 10,99];

// código omitido

notas.pop();

// código omitido
console.log(notas.length);
console.log(notas[0] + notas[1] + notas[2] + notas[3]);
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media.toFixed(2));


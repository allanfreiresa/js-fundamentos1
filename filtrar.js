const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

// código omitido

/*const tamanhoNome = alunos.filter((aluno) => {
    return aluno.length < 4;
  });*/
  
  //const tamanhoNome = alunos.filter((aluno, indice) => {
    const reprovados = alunos.filter((_, indice) => {
    //return aluno.length < 4;
    return medias[indice] < 7;
  })

  //const reprovados = alunos.filter((_, indice) => {
  //console.log(tamanhoNome);
  console.log(reprovados);


  const notas = [10, 5, 7, 4, 8, 3];

const aprovados = notas.filter((nota) => nota >= 7);
console.log(aprovados);

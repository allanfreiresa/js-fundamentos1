const notaFinal = 6;
const faltas = 5;
const advertencias = 0 ;


//if (notaFinal < 7 || faltas > 4) {
if (notaFinal < 7 && faltas > 4) {
    console.log('reprovado, boas festas');    
} else {
 console.log('Não foi reprovado por falta');
}

if (faltas >= 2 && !advertencias) {
    console.log('recebeu bonus');    
} else {
 console.log('Não recebeu bonus');
}






const idade = 25;
const possuiCarteira = true;

if (idade >= 18 && possuiCarteira) {
    console.log("Pode dirigir, possui idade suficiente e carteira de motorista.");
} else {
    console.log("Não pode dirigir.");
}

const temExperiencia = true;
const temDiploma = false;

if (temExperiencia || temDiploma) {
    console.log("Pode se candidatar ao emprego, pois possui experiência ou diploma.");
} else {
    console.log("Não pode se candidatar ao emprego.");
}

const chuva = false;

if (!chuva) {
    console.log("Não está chovendo. Pode sair de casa.");
} else {
    console.log("Está chovendo. Melhor ficar em casa.");
}


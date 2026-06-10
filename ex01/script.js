
let idades = Array(4);
let maiorIdade;
let posicaoMaior;

for (let i = 0; i < 4; i++) {
    idades[i] = parseInt(prompt("Digite a idade da " + (i + 1) + "ª pessoa:"));

    if (i == 0) {
        maiorIdade = idades[i];
        posicaoMaior = i;
    } else {
        if (idades[i] > maiorIdade) {
            maiorIdade = idades[i];
            posicaoMaior = i;
        }
    }
}

alert("A maior idade digitada foi: " + maiorIdade);
alert("Foi digitada na posição " + (posicaoMaior + 1));
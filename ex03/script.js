let nomes = [];
let alturas = [];
let continuar = 1; // Controla o loop (1 = Sim, 0 = Não)
let contador = 0;  // Funciona como índice do vetor

let maiorAltura = 0;
let menorAltura = 0;
let nomeMaior = "";
let nomeMenor = "";

while (continuar === 1) {
    nomes[contador] = prompt("Digite o nome da pessoa:");
    alturas[contador] = parseFloat(prompt("Digite a altura de " + nomes[contador] + " (ex: 1.75):"));

    // Lógica para definir maior e menor logo na entrada
    if (contador === 0) {
        maiorAltura = alturas[contador];
        menorAltura = alturas[contador];
        nomeMaior = nomes[contador];
        nomeMenor = nomes[contador];
    } else {
        if (alturas[contador] > maiorAltura) {
            maiorAltura = alturas[contador];
            nomeMaior = nomes[contador];
        }
        if (alturas[contador] < menorAltura) {
            menorAltura = alturas[contador];
            nomeMenor = nomes[contador];
        }
    }

    contador++; // Avança o índice para o próximo cadastro
   
    // Pergunta se deseja continuar utilizando o parseInt
    continuar = parseInt(prompt("Deseja cadastrar outra pessoa?\n1 - SIM\n0 - NÃO"));
}

alert(
    "Resultados Finais:\n\n" +
    "Maior altura: " + maiorAltura + "m (Pertence a: " + nomeMaior + ")\n" +
    "Menor altura: " + menorAltura + "m (Pertence a: " + nomeMenor + ")"
);
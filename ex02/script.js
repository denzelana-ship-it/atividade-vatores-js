let nomes = [];
let sexos = [];
let salarios = [];
let resultado = "Funcionárias que ganham mais de R$ 5.000,00:\n\n";
let encontrou = false;


for (let i = 0; i < 5; i++) {
    nomes[i] = prompt("Digite o nome do(a) " + (i + 1) + "º funcionário(a):");
    sexos[i] = prompt("Digite o sexo de " + nomes[i] + " (M ou F):").toUpperCase();
    salarios[i] = parseFloat(prompt("Digite o salário de " + nomes[i] + ":"));
}

for (let i = 0; i < 5; i++) {
   
    if (sexos[i] === "F" && salarios[i] > 5000) {
        resultado += "- " + nomes[i] + " (R$ " + salarios[i] + ")\n";
        encontrou = true;
    }
}

if (!encontrou) {
    resultado = "Nenhuma funcionária cadastrada ganha mais de R$ 5.000,00.";
}

alert(resultado);
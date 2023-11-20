const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o nome do herói: ', (nomeHeroi) => {
  rl.question('Digite a quantidade de XP adquirida pelo herói: ', (xp) => {
    xp = parseInt(xp); // Convertendo a entrada para número inteiro (caso não esteja)

    if (xp <= 1000) {
      console.log(`O Heroi ${nomeHeroi} está no nível de ferro.`);
    } else if (xp <= 2000) {
      console.log(`O Heroi ${nomeHeroi} está no nível de bronze.`);
    } else if (xp <= 5000) {
      console.log(`O Heroi ${nomeHeroi} está no nível de prata.`);
    } else if (xp <= 7000) {
      console.log(`O Heroi ${nomeHeroi} está no nível de ouro.`);
    } else if (xp <= 8000) {
      console.log(`O Heroi ${nomeHeroi} está no nível de platina.`);
    } else if (xp <= 9000) {
      console.log(`O Heroi ${nomeHeroi} está no nível de ascendente.`);
    } else if (xp <= 10000) {
      console.log(`O Heroi ${nomeHeroi} está no nível de imortal.`);
    } else {
      console.log(`O Heroi ${nomeHeroi} está no nível de radiante.`);
    }

    rl.close();
  });
});
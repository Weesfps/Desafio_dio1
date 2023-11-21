let vitorias = 120;
let derrotas = 20;
let elo = rankElo(vitorias, derrotas);

function rankElo(vitorias, derrotas) {
    let elo = vitorias - derrotas;

    if (elo <= 10) {
        return "Ferro";
    } else if (elo <= 20) {
        return "Bronze";
    } else if (elo <= 50) {
        return "Prata";
    } else if (elo <= 80) {
        return "Ouro";
    } else if (elo <= 90) {
        return "Diamante";
    } else if (elo <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

console.log("Suas vitórias são " + vitorias);
console.log("Seu elo é " + elo);

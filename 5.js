const readline = require('readline-sync');
let cine = Array(5).fill(0).map(() =>
Array(5).fill(0));
let f = readline.questionInt("Fila a reservar (0-4):");
let c = readline.questionInt("Columna a reservar(0-4): ");
cine[f][c] = 1; // 1 = Reservado
console.log("--- Estado de la Sala ---");
cine.forEach(fila => console.log(fila.join(" ")));
const readline = require('readline-sync');
let stock = [[15, 3], [8, 25], [2, 18], [30, 4]];
let limite = readline.questionInt("Límite mínimo de stock: ");
for (let i = 0; i < 4; i++) {
for (let j = 0; j < 2; j++) {
if (stock[i][j] < limite) {
console.log(` Bajo Stock en [${i}][$
{j}]: ${stock[i][j]} unidades`);
}
}
}
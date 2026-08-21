JAVASCRIPT ('VS CODE')
let m = [
[4, 2, 1, 5],
[3, 8, 9, 2],
[1, 0, 7, 4],
[6, 3, 2, 5]
];
let sumaDiag = 0;
for (let i = 0; i < m.length; i++) {
sumaDiag += m[i][i]; // Acceso directo a la diagonal
}
console.log(`Suma de la Diagonal Principal: $
{sumaDiag}`);
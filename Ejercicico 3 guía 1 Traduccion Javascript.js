const readline = require('readline-sync'); // es un aviso previo de un comando que vamos a hacer despues, hace que constantemente lea los datos que ingrese el usuario  
let m = [], suma = 0; // Dimension, y el suma = 0 es un contador
for (let i = 0; i < 3; i++) { //
    m[i] = []; // en este comando se registra la matricesxfila
    for (let j = 0; j < 4; j++) {
        m[i][j] = readline.questionInt(`Val [${i}][$ 
        {j}]: `); // este comando es un Escribir y Leer conjuntos
        suma += m[i][j]; // Es un contador que va sumando el valor de todos los valores de la matriz
    }
}
console.log(`
La suma total es: ${suma}`); // es un acumulador
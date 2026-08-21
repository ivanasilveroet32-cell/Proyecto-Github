const readline = require('readline-sync'); // es un aviso previo de un comando que vamos a hacer despues, hace que constantemente lea los datos que ingrese el usuario  
let temp = []; // dimension
for (let i = 0; i < 3; i++) { 
    temp[i] = [];
    for (let j = 0; j < 3; j++) {
     temp[i][j] = readline.questionFloat(`Temp [$
     {i}][${j}]: `); // Es un ecribir y leer conjuntos
    }
}
let max = temp[0][0]; // Este comando basicamen es 
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (temp[i][j] > max) max = temp[i][j]; // El if es un si-entonces, hace que si en la matriz hay un numero/temperatura mayor a 0
    }
}
console.log(`Temperatura máxima: ${max}°C`);
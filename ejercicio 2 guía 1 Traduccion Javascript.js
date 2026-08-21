const readline = require('readline-sync'); // es un aviso previo de un comando que vamos a hacer despues, hace que constantemente lea los datos que ingrese el usuario  
let ventas = []; // dimension
for (let i = 0; i < 3; i++) { // En este caso como en este ejercicio no estan los valores predeterminados, no hay matriz.length en el para
    ventas[i] = [];
    for (let j = 0; j < 3; j++) {
        ventas[i][j] = readline.questionInt( // Esto es equivalente a un escribir y leeer a la vez
          `Venta Negocio ${i+1}, Dia ${j+1}: ` // contador que guarda los datos de la matriz
        );
    }
}
console.log("--- Matriz de Ventas ---"); // Escribir
for (let i = 0; i < 3; i++) { 
console.log(ventas[i].join(" ")); // Este comado hace que cuando se ejecute el codigo se muestren las ventas por fila/negocio y agrega los espxion entre matrizes
}

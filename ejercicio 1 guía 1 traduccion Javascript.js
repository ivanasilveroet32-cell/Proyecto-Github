let matriz = [ //dimesnion
    [10, 20 ], //primera fila de la matriz
    [30, 40 ]  //segunda fila de la matriz
];

console.log("--- Matriz 2x2 ---"); // esto es un escribir,  
for (let i = 0; i < matriz.length; i++) { // Primer Para de la matriz,dedicado a la fila de la matriz, let es equivalente a variable núemrica, matriz.length es el hasta, y por ultimo i++ es el con paso en 1
    let filaTexto = ""; // es el escribir "     " que ponemos adentro del ptimer arriba del FinalPara 
    for ( let j = 0; j < matriz[i].length; j++ ) {  // Es el para dedicado a la columna, identico en funsionamiento al anterior para, solo que dedicado a la columna.
        filaTexto += matriz[i][j] + "        "; // este seria el escribir matriz, "       " Sin Saltar
    }
    console.log(filaTexto); // esto seria escribe la matriz para que sea visible         
}


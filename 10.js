let orig = [
    [5, -2, 8],
    [-1, 0, -4],
    [7, 3, -9]
    ];
    let copia = [];
    for (let i = 0; i < 3; i++) {
    copia[i] = [];
    for (let j = 0; j < 3; j++) {
    copia[i][j] = orig[i][j] < 0 ? 0 : orig[i][j];
    }
    }
    console.log("--- Matriz Copia Sin Negativos ---");
    copia.forEach(fila => console.log(fila.join(" ")));
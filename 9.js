let orig = [
    [1, 2, 3],
    [4, 5, 6]
    ];
    let transp = [];
    for (let j = 0; j < 3; j++) {
    transp[j] = [];
    for (let i = 0; i < 2; i++) {
    transp[j][i] = orig[i][j];
    }
    }
    console.log("--- Matriz Transpuesta (3x2) ---");
    transp.forEach(fila => console.log(fila.join(" ")));
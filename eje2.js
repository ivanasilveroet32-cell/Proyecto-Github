let notas = [
      [7, 8, 9, 6], [5, 10, 8, 7],
      [9, 6, 7, 8], [8, 9, 4, 10]
    ];
    let maxNota = notas[0][0], maxF = 0, maxC = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
       if (notas[i][j] > maxNota) {
       maxNota = notas[i][j];
       maxF = i; maxC = j;
    }
    }
    }
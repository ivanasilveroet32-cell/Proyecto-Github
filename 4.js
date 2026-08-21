let Puntaje = [
       [10, 20, 15], [5, 10, 25], [30, 20, 10],
      [12, 18, 20], [8, 15, 22]
    ];
    for (let i = 0; i < Puntaje.length; i++) {
       let totalJugador = 0;
      for (let j = 0; j < Puntaje[i].length; j++) {
       totalJugador += Puntaje[i][j];
    }
    console.log(`Jugador ${i + 1} - Total: $
    {totalJugador} pts`);
    }

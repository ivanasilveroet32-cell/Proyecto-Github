let ventas = [
    [100, 200, 150, 300],
    [120, 180, 200, 250],
    [110, 210, 160, 280]
    ];
    for (let j = 0; j < 4; j++) {
    let sumaCol = 0;
    for (let i = 0; i < 3; i++) {
    sumaCol += ventas[i][j];
    }
    let promedio = (sumaCol / 3).toFixed(2);
    console.log(`Sucursal ${j + 1} - Promedio: $$
    {promedio}`);
}
let Productos = [

    [1,1,0,1,1],
    [0,1,1,1,0],
    [1,1,1,0,1]

];
let aprobados = 0 , defectuosos = 0;

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        if (productos [i][j] === 1) aprobados++;
         else defectuoso++;
    }
}
console.log (" aprobados : {aprobados} defectuosos: {defectuosos}");
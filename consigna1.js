function verificarMayorEdad (anioNacimiento){
const anioActual = new Date () .getFullYear();
const edad = anioActual - anioNacimiento;

if (edad >= 18) {
    return "Usted es mayor de edad." ;
} else {
    return "ustes es menor de edad";
}
}
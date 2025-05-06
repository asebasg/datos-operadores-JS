const DIAS_ANIO = 365;
const cantCaracteres = 5;

let nombre = prompt("Bienvenido, ingresa tu nombre a continnuación");
let edadStr = prompt("Ahora ingresa tu edad");
let edad = parseInt(edadStr); // Convertir la edad a un número entero

if (nombre.length === cantCaracteres) {
    console.log(nombre + ", tu nombre tiene 5 letras, ¡genial!");
} else {
    console.log("Tu nombre tiene mas de 5 caracteres");
}
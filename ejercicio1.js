const DIAS_ANIO = 365;

let cantCaracteres = 5;
var nombre = null;
var nombre = prompt("Bienvenido, ingresa tu nombre a continnuación");
let edadStr = prompt("Ahora ingresa tu edad");
let edad = parseInt(edadStr); // Convertir la edad a un número entero
let caracteresNombre = nombre.length < 5; // Se verifica si el nombre tiene menos de 5 caracteres
let edadEnDias = edad * DIAS_ANIO; // Aqui se calcula la edad en dias

console.log("Hola, " + nombre + "... Te dire una cosa...");
console.log("Tu edad en días es: " + edadEnDias + " días.");
console.log("Tu nombre tiene menos de 5 caracteres: " + caracteresNombre);
console.log((nombre = null));

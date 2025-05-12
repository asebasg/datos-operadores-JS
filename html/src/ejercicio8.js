/**
 * Crea un script que pida al usuario una distancia en kilómetros con prompt.
 * Convierte la entrada a un número decimal. Calcula la distancia en metros (kilómetros * 1000) y centímetros (metros * 100).
 * Verifica si la distancia es menor a 1 km. Usa const para la constante de conversión, let para la distancia
 * y los metros, y var para la comparación y una variable con valor null.
 * Muestra en la consola los metros, centímetros, si es menor a 1 km y el valor nulo.
 */

// valores de las constantes en centimetros y metros
const metros = 1000;
const centimetros = 100;

let distancia = parseFloat(prompt("Ingresa una distancia (en km)"));

// Conversiones
let distanciaMetros = distancia * metros;
let distanciaCentimetros = distancia * centimetros;

let menorUnKm = distancia < 1; // Verificacion de tamaño

// valor nulo
var nulo = null;

// Mostrando valores
console.log(`Distancia ingresada ${distancia} km`);
console.log(`Distancia en metros: ${distanciaMetros} m`);
console.log(`Distancia en centimetros: ${distanciaCentimetros} cm`);
console.log(`¿El valor ingresado es menor a 1km?: ${menorUnKm}`);
console.log(`Valor nulo: ${null}`);
/**
 *  Crea un programa que solicite al usuario el ancho y alto de un rectángulo
    con prompt. Convierte ambas entradas a números decimales. Calcula el área
    (ancho * alto). Verifica si el área es mayor a 50 (constante). Usa let
    para las entradas y la comparación, var para el ancho y una variable sin
    definir (undefined), y const para la constante. Muestra en la consola el
    área, si es mayor a 50 y el valor de la variable sin definir.
 */

const mayor = 50;

var ancho = parseFloat(prompt("Ingresa el ancho del rectangulo"));
let alto = parseFloat(prompt("Ingresa el alto del rectangulo"));

let area = ancho * alto;

let sinDefinir = undefined;
let esmayor = area > mayor;

console.log(`El area del rectangulo es ${area}`);
console.log(`¿Es mayor a 50? ${esmayor}`);
console.log(`Variable sin definir: ${sinDefinir}`);
/*
    Escribe un programa que solicite al usuario dos números con prompt.
    Convierte las entradas a números decimales. Calcula la suma y la
    diferencia de los números. Verifica si los números son estrictamente
    iguales (===). Usa let para los números y la comparación, var para las
    entradas y la suma, y const para el resultado de la comparación. Aplica un
    operador lógico || con el resultado de la comparación y false. Muestra en
    la consola la suma, diferencia, si son iguales y el resultado de la
    combinación lógica.
*/

var numStr = prompt("Ingresa un numero");
let num = parseFloat(numStr);
var numStr2 = prompt("Ingresa un segundo numero");
let num2 = parseFloat(numStr2);

let iguales = num === num2;

var suma = num + num2;

let diferencia = num - num2;

const logico = iguales || false;

console.log(`Igualdad: ${iguales}`);
console.log(`Suma: ${suma}`);
console.log(`Diferencia entre ambos numeros: ${diferencia}`);
console.log(`Logico: ${logico}`);

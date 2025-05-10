/*
Escribe un script que pida al usuario un texto con prompt. Concatena el
      texto con un saludo constante ("¡Tu texto es: "). Verifica si el texto
      tiene más de 10 caracteres. Usa const para el saludo, let para el texto y
      la comparación, y var para la concatenación y una variable con valor null.
      Aplica un operador lógico ! para negar el resultado de la comparación.
      Muestra en la consola el texto completo, si es largo, la negación y el
      valor nulo.
*/

let texto = prompt("Ingresa un texto");

const saludo = "Tu texto es: ";
var concatenación = saludo + texto;

let comparacion = texto.length > 10;
var nulo = null;

console.log(concatenación);
console.log(`Tiene mas de 10 caracteres: ${comparacion}`);
console.log(nulo);

var pesoUsuario = prompt("Ingresa tu peso en kilogramos:");

let pesoKg = parseFloat(pesoUsuario);

let pesoGramos = pesoKg * 1000;

const PESO_LIMITE = 70;

var esMayorA70 = pesoKg > PESO_LIMITE;

var resultadoLogico = esMayorA70 && true;

console.log("Peso en gramos:", pesoGramos);
console.log("¿Es mayor a 70 kg?:", esMayorA70);
console.log("Resultado de la combinación lógica (esMayorA70 && true):", resultadoLogico);

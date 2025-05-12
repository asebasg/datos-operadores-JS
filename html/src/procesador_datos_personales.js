let nombre = prompt("Ingrese su nombre: ");
let edad = Number(prompt("Ingrese su nombre: "));
let peso = parseFloat(prompt("Ingrese su nombre: "));
const edadMeses= edad*12;
const pesoGramos= peso*1000; // Convertir a gramos
const vacio = nombre === "";
const par = edad % 2 === 0;
if (vacio === ture || par === true) {
    console.log("El nombre esta vacio o la edad es par");
}
console.log(nombre);
console.log(edadMeses);
console.log(pesoGramos);
console.log("El nombre esta vacio? ", nombre === "");
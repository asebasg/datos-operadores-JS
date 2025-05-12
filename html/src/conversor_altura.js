let alturaUsuario = prompt("Ingrese tu estatura en metros:");
let altura = parseFloat(alturaUsuario);

let alturaCent = altura * 100;   
let alturaMil = altura * 1000;   

const ALTURA_MAX = 150;         
const esAlto = altura > ALTURA_MAX;

console.log(esAlto ? "Esta persona es alta.": "Esta persona no es alta.");

console.log("Esta es tu altura en cm:", alturaCent);
console.log("Esta es tu altura en mm:", alturaMil);

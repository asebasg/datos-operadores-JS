var horas = parseFloat(prompt("Ingrese la cantidad de horas:"));
const minutos = horas * 60;
const segundos = minutos * 60; // Convertir a segundos
let esMayorAUnaHora = horas > 1; // Verificar si es mayor a una hora
console.log("cantidad de horas: ", horas);
console.log("cantidad de minutos en", horas, "horas ", minutos);
console.log(horas>1);

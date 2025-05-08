var peso = Number(prompt("Ingrese su peso en kg:"));
let pesoD = peso * 1000; // Convertir a gramos
const pesoL = 70; //peso limite
console.log("El peso en gramos es: " + pesoD + " g");
console.log("El peso limite es: " + pesoL + " kg");
console.log(peso > pesoL);
if (peso > pesoL) {
    console.log("El peso es mayor al limite permitido");
} else{
    console.log("El peso es menor a 70 kg");
}

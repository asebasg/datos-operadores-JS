var precio = parseFloat(prompt("Ingrese el precio del producto:"));
const descuento = (precio*0.10); // 10% de descuento
let precioConDescuento = precio - descuento;
let precioNegacion = !precioConDescuento;
let indefinido;
console.log("el precio original es mayor a 100? : ", precio > 100);
console.log("precio con descuento: ", precioConDescuento);
console.log(precioNegacion);
console.log(indefinido);
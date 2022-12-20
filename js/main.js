//inicio nombre y lista de precios

let nombre=prompt("Ingrese su nombre: ");
let precios=prompt("Ingresa un producto para saber su precio (kg o unidad):                           escriba esc PARA OMITIR")

if (nombre=="") {
    console.log("Recargue la pagina, debe poner su nombre");
}else{
    console.log("Hola " + nombre + " Bienvenido a Quinta Laufer, Ingresó a la lista de precios. ");
}
const productos = [
    { id: 1, nombre: "toamte perita", precio: 169},
    { id: 2, nombre: "tomate redondo", precio: 199},
    { id: 3, nombre: "huevo", precio: 700},
    { id: 4, nombre: "sandia", precio: 130},
    { id: 5, nombre: "carbon", precio: 950},
    { id: 6, nombre: "papa", precio: 50},
    { id: 7, nombre: "cebolla", precio: 549},
    { id: 8, nombre: "pera", precio: 159},
    { id: 9, nombre: "naranja", precio: 139}
] 

productos.splice(7)

console.table(productos);

//Vemos cuanto gastó y si podemos, aplicar descuento (10%off)

let gasto1=parseFloat(prompt("¿Cuanto gasto en verduras? "))
let gasto2=parseFloat(prompt("¿Cuanto gasto en carbon? "))
let gasto3=parseFloat(prompt("¿Cuanto gasto en huevos? "))

function suma () {
    total= gasto1+gasto2+gasto3;
    console.log("Subtotal es: " + total);


}
suma()
let descuento=prompt("¿Abona en efectivo?")
if (descuento=="si") {
    desc=10*total/100
    pagar=total-desc
    console.log("El total con el 10%OFF es: " + pagar)
}else{
    console.log("El monto a pagar es: " + total);
}

console.log("Muchas Gracias! Que tenga buen dia.");

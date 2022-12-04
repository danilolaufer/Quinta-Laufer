nombre=prompt("Ingrese su nombre: ");
precios=prompt("Ingresa un producto para saber su precio (kg o unidad): ");

if (nombre=="") {
    console.log("Recargue la pagina, debe poner su nombre");
}else{
    console.log("Hola " + nombre + " Bienvenido a Quinta Laufer, Ingresó a consultas de precio. ");
}
precios=prompt("Ingresa un producto para saber su precio (kg o unidad): ")
while(precios!="ESC"){
    switch (precios) {
        case "tomate perita":
            console.log();("El precio es: $ 169kg");
            break;
        case "tomate redondo":
            console.log("El precio es: $ 199kg");
            break;
        case "naranja":
            console.log("El precio es: $ 99kg");
            break;
        case "sandia":
            console.log("El precio es: $ 130kg");
            break;
        case "pepino":
            console.log("El precio es: $ 110kg");
            break;
        case "papa":
            console.log("El precio es: $ 50kg");
            break;
        case "cebolla":
            console.log("El precio es: $ 549kg");
            break;
        case "pera":
            console.log("El precio es: $ 159kg");
            break;
        default:
            console.log("Vuelva a intentarlo, el producto no se encuentra");
            break;
        }
        precios=prompt("Ingresa un producto para saber su precio (kg o unidad): ");
}
let gasto1,gasto2,gasto3,total,descuento,pagar,desc
gasto1=parseFloat(prompt("¿Cuanto gasto en verduras? "))
gasto2=parseFloat(prompt("¿Cuanto gasto en carbon? "))
gasto3=parseFloat(prompt("¿Cuanto gasto en huevos? "))
total= gasto1+gasto2+gasto3
console.log("Subtotal es: " + total);

descuento=prompt("¿Abona en efectivo?")
if (descuento=="si") {
    desc=10*total/100
    pagar=total-desc
    console.log("El total con el 10%OFF es: " + pagar)
}else{
    console.log("El monto a pagar es: " + total);
}

console.log("Muchas Gracias! Que tenga buen dia.");


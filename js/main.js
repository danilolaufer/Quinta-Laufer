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
            console.log();("El precio es: 169kg");
            break;
        case "tomate redondo":
            console.log("El precio es: 199kg");
            break;
        case "naranja":
            console.log("El precio es: 99kg");
            break;
        case "sandia":
            console.log("El precio es: 130kg");
            break;
        case "pepino":
            console.log("El precio es: 110kg");
            break;
        case "papa negra":
            console.log("El precio es: 50kg");
            break;
        case "papa blanca":
            console.log("El precio es: 99kg");
            break;
        case "cebolla":
            console.log("El precio es: 549kg");
            break;
        default:
            console.log("Vuelva a intentarlo, el producto no se encuentra");
            break;
        }
        precios=prompt("Ingresa un producto para saber su precio (kg o unidad): ");
    }


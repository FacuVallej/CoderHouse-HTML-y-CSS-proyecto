let nombreIngresado = prompt("¿Cual es su nombre");
if (nombreIngresado == "") {
    alert("Por favor, ingrese su nombre")
}
else {
    alert("Bienvenida a Club de la birra " + nombreIngresado)
}

let edadIngresada = Number(prompt("¿Cual es su edad"))
if (edadIngresada == ""){
    alert("Por favor, ingrese su edad")
}
if (edadIngresada < "18") {
    alert("ingreso correctamente, en la sección bebidas, no podra agregar cervezas a su carrito")
}
if (edadIngresada > "18"); {
    alert("ingreso correctamente")
}
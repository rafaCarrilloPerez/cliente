/* EJERCICIO 5 – Arrays de interfaces */
function ej5() {
    var productos = [
        { id: 1, nombre: "M", precio: 30 },
        { id: 2, nombre: "Chocolate", precio: 5 },
        { id: 3, nombre: "sierra nevada", precio: 60 }
    ];
    var total = 0;
    productos.forEach(function (p) {
        console.log("".concat(p.nombre, " - ").concat(p.precio, " \u20AC"));
        total += p.precio;
    });
    console.log("Precio total:", total);
}

/* EJERCICIO 3 – Parámetros opcionales */
function ej3() {
    function saludar(nombre) {
        if (nombre) {
            console.log("Hola, ".concat(nombre));
        }
        else {
            console.log("Tolano te saluda");
        }
    }
    saludar("pacopepe");
    saludar();
}

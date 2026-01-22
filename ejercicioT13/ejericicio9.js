/*EJERCICIO 9 – Uso de unknown */
function ej9() {
    function toUpperSeguro(valor) {
        if (typeof valor === "string") {
            return valor.toUpperCase();
        }
        throw new Error("no es un texto vieo");
    }
    try {
        console.log(toUpperSeguro("typescript"));
        console.log(toUpperSeguro(10));
    }
    catch (error) {
        console.error(error.message);
    }
}

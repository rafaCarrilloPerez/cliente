/*EJERCICIO 8 – Manejo de errores */
function ej8() {
    function doblarPositivo(n) {
        if (n < 0) {
            throw new Error("El número no puede ser negativo");
        }
        return n * 2;
    }
    try {
        console.log(doblarPositivo(5));
        console.log(doblarPositivo(-3));
    }
    catch (error) {
        console.error(error.message);
    }
}

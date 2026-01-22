/* EJERCICIO 6 – Clases y encapsulación */
function ej6() {
    var Persona = /** @class */ (function () {
        function Persona(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
        Persona.prototype.presentarse = function () {
            console.log("Me llamo ".concat(this.nombre, " y tengo ").concat(this.edad, " tacos ya cotizados"));
        };
        return Persona;
    }());
    var persona = new Persona("Tolano", 30);
    persona.presentarse();
}

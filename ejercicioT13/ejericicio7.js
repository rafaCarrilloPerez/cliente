/* EJERCICIO 7 – Clases e interfaces */
function ej7() {
    var EmpleadoEmpresa = /** @class */ (function () {
        function EmpleadoEmpresa(id, nombre, sueldoMensual) {
            this.id = id;
            this.nombre = nombre;
            this.sueldoMensual = sueldoMensual;
        }
        EmpleadoEmpresa.prototype.calcularSueldoAnual = function () {
            return this.sueldoMensual * 12;
        };
        return EmpleadoEmpresa;
    }());
    var empleado = new EmpleadoEmpresa(1, "Bylly el niño", 2000);
    console.log("Sueldo anual:", empleado.calcularSueldoAnual());
}

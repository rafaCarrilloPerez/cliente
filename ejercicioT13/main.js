/* EJERCICIO 1 – Tipos básicos*/
function ej1() {
    var nombreAlumno = "lil dumbonejo";
    var edad = 20;
    var matriculado = true;
    var notas = [7.5, 8, 9];
    var CENTRO_EDUCATIVO = "La universidad de la calle";
    console.log("EJ1");
    console.log(nombreAlumno, edad, matriculado, notas, CENTRO_EDUCATIVO);
}
/* EJERCICIO 2 – Funciones tipadas */
function ej2() {
    function calcularMedia(a, b) {
        return (a + b) / 2;
    }
    console.log("EJ2 Media:", calcularMedia(6, 8));
}
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
/* EJERCICIO 4 – Interfaces como tipo */
function ej4() {
    var productoCorrecto = {
        id: 1,
        nombre: "gallo de pelea",
        precio: 45.99
    };
    console.log("EJ4", productoCorrecto);
}
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
/* EJERCICIO 10 – Mini proyecto: gestión de alumnos */
function ej10() {
    var AlumnoApp = /** @class */ (function () {
        function AlumnoApp(id, nombre, notas) {
            this.id = id;
            this.nombre = nombre;
            this.notas = notas;
        }
        AlumnoApp.prototype.calcularMedia = function () {
            var suma = this.notas.reduce(function (a, b) { return a + b; }, 0);
            return suma / this.notas.length;
        };
        AlumnoApp.prototype.resumen = function () {
            return "".concat(this.nombre, " - Media: ").concat(this.calcularMedia().toFixed(2));
        };
        return AlumnoApp;
    }());
    var alumnos = [
        new AlumnoApp(1, "luismi", [5, 5, 5]),
        new AlumnoApp(2, "pacopeas", [6, 6, 1]),
        new AlumnoApp(3, "Bylly el niño", [10, 10, 10])
    ];
    var mediaGlobal = 0;
    alumnos.forEach(function (alumno) {
        console.log(alumno.resumen());
        mediaGlobal += alumno.calcularMedia();
    });
    console.log("Media global:", (mediaGlobal / alumnos.length).toFixed(2));
}

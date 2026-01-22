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
function ej10() {
    var alumnos = [
        new AlumnoApp(1, "Luismi", [5, 5, 5]),
        new AlumnoApp(2, "Pacopeas", [6, 6, 1]),
        new AlumnoApp(3, "Bylly el niño", [10, 10, 10])
    ];
    var mediaGlobal = 0;
    alumnos.forEach(function (alumno) {
        console.log(alumno.resumen());
        mediaGlobal += alumno.calcularMedia();
    });
    console.log("Media global:", (mediaGlobal / alumnos.length).toFixed(2));
}
window.ej10 = ej10;

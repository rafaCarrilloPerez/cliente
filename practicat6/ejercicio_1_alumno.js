/* ===================================
   TEMA 6 - OBJETOS Y ARRAYS
   EJERCICIOS PARA ESTUDIANTES
   ===================================

   INSTRUCCIONES:
   1. Completa cada función siguiendo los comentarios TODO
   2. No modifiques los nombres de las funciones ni variables principales
   3. Usa solo JavaScript vanilla (sin librerías)
   4. Todas las salidas deben mostrarse en el DOM usando innerHTML
   5. Testea cada ejercicio antes de continuar

   RECORDATORIO DE SINTAXIS:
   - Usar function nombreFuncion() {} (NO arrow functions)
   - Usar var para declarar variables
   - Usar document.getElementById() para seleccionar elementos
   - Usar innerHTML para mostrar resultados en el DOM
*/

// ===================================
// EJERCICIO 1: CREAR OBJETO ESTUDIANTE
// ===================================

function ejercicio1() {
    var estudiante = {
        nombre: "María",
        apellidos: "García López",
        edad: 20,
        curso: "2º DAW",
        mostrarInfo: function () {
            
            return ''
                + '<h5>Información del Estudiante:</h5>'
                + '<p><strong>Nombre:</strong> ' + this.nombre + '</p>'
                + '<p><strong>Apellidos:</strong> ' + this.apellidos + '</p>'
                + '<p><strong>Edad:</strong> ' + this.edad + '</p>'
                + '<p><strong>Curso:</strong> ' + this.curso + '</p>';
                
        }
    };
    document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo();
    };


    // TODO: Crear un objeto estudiante con las siguientes propiedades:
    // - nombre: "María"
    // - apellidos: "García López"
    // - edad: 20
    // - curso: "2º DAW"
    // - mostrarInfo: function() que retorne HTML con toda la información

    
        // TODO: Completar las propiedades del objeto
// TODO: Retornar HTML con la información del estudiante
            // Sugerencia: usar template strings o concatenación
        
    // TODO: Mostrar el resultado en el DOM
    // Pista: usar document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo();


// ===================================
// EJERCICIO 2: ARRAY DE COLORES
// ===================================

// Variable global para el array de colores
var colores = ["rojo", "azul", "verde"];

function agregarColor() {
    
    // TODO: Obtener el valor del input con id "color-input"
    // TODO: Agregar el color al array usando push()
    // TODO: Limpiar el input
    // TODO: Mostrar mensaje de confirmación
    var colorInput = document.getElementById("color-input");
    var nuevoColor = colorInput.value.trim();
    if (nuevoColor !== "") {
        colores.push(nuevoColor);
        colorInput.value = "";
        document.getElementById("resultado-ej2").innerHTML =
            "<div class='alert alert-success'>Color '" + nuevoColor + "' agregado correctamente.</div>";
    } else {
        document.getElementById("resultado-ej2").innerHTML =
            "<div class='alert alert-warning'>Por favor, ingresa un color válido.</div>";
    }

}

function eliminarUltimoColor() {
    // TODO: Eliminar el último elemento del array usando pop()
    // TODO: Mostrar mensaje indicando qué color se eliminó
    // TODO: Si el array está vacío, mostrar mensaje apropiado
    if (colores.length > 0) {
        var colorEliminado = colores.pop();
        document.getElementById("resultado-ej2").innerHTML =
            "<div class='alert alert-info'>Color '" + colorEliminado + "' eliminado correctamente.</div>";
    } else {
        document.getElementById("resultado-ej2").innerHTML =
            "<div class='alert alert-warning'>No hay colores para eliminar.</div>";
    }
}

function mostrarColores() {

    // TODO: Mostrar todos los colores del array
    // TODO: Crear HTML con la lista de colores
    // Sugerencia: usar un bucle for para crear la lista

    var html = "<h5>Lista de Colores:</h5><ul>";
    // TODO: Completar el bucle para mostrar los colores
    for (var i = 0; i < colores.length; i++) {
        html += "<li>" + colores[i] + "</li>";
    }
    html += "</ul>";

    document.getElementById("resultado-ej2").innerHTML = html;
}

// ===================================
// EJERCICIO 3: CATÁLOGO DE PRODUCTOS
// ===================================
// Array que contendrá los objetos producto







var productos = [];
function cargarProductos() {
    
    
    // TODO: Crear array con al menos 5 objetos producto
    // Cada producto debe tener: nombre, precio, categoria

    productos = [
        { nombre: "Gallo", precio: 100, categoria: "gallos" },
        { nombre: "Gallo Boricua", precio: 15, categoria: "gallo" },
        { nombre: "Gallo Andalu como er gaspacho", precio: 20, categoria: "gallo" },
        { nombre: "Camaron", precio: 7000, categoria: "gallo" },
        { nombre: "Sopa de Gallo", precio: 30, categoria: "Comida" }
        // TODO: Completar con objetos producto
        // Ejemplo: { nombre: "Laptop", precio: 899, categoria: "Electrónicos" }
    ];

    mostrarProductos(productos);
}

function ordenarPorPrecio() {
    productos.sort(function(a, b) {
        return a.precio - b.precio;
    });
    mostrarProductos(filtrarProductosCaros);
}

function filtrarProductosCaros() {

var productosCaros = productos.filter(function(producto) {
    return producto.precio > 50;
});

mostrarProductos(productosCaros);



}
function mostrarProductos(arrayProductos) {


var html = "";

    arrayProductos.forEach(function(producto) {
        html += "<div class='card mb-2'><div class='card-body'>";
        html += "<h6 class='card-title'>" + producto.nombre + "</h6>";
        html += "<p class='card-text'><strong>Precio:</strong> " + producto.precio + "€</p>";
        html += "<p class='card-text'><strong>Categoría:</strong> " + producto.categoria + "</p>";
        html += "</div></div>";
    });

    document.getElementById("resultado-ej3").innerHTML = html;
}







































// ===================================
// EJERCICIO 4: ESTUDIANTE CON NOTAS
// ===================================










var estudianteNotas = {
    nombre: "Carlos Ruiz",
    notas: [],

    agregarNota: function (nota) {

        // TODO: Validar que la nota esté entre 0 y 10
        // TODO: Agregar la nota al array de notas
        // TODO: Mostrar mensaje de confirmación
        if (nota >= 0 && nota <= 10) {
            this.notas.push(nota);
            document.getElementById("resultado-ej4").innerHTML =
                "<div class='alert alert-success'>Nota " + nota + " agregada correctamente.</div>";
        } else {
            document.getElementById("resultado-ej4").innerHTML =
                "<div class='alert alert-danger'>Error: La nota debe estar entre 0 y 10.</div>";
        }
    },

    calcularPromedio: function () {
        // TODO: Calcular el promedio de todas las notas
        // TODO: Retornar el promedio redondeado a 2 decimales
        // Pista: usar reduce() o un bucle for
        if (this.notas.length === 0) {
            return 0;
        }
        var suma = 0;
        for (var i = 0; i < this.notas.length; i++) {
            suma += this.notas[i];
        }
        var promedio = suma / this.notas.length;
        return promedio.toFixed(2);

        return 0;

        return "";  



        // Cambiar esta línea





       
    },

    mostrarNotas: function () {
        // TODO: Retornar HTML con todas las notas
        // TODO: Incluir el promedio si hay notas
         // Cambiar esta línea
        if (this.notas.length === 0) {
            return "<div class='alert alert-warning'>No hay notas para mostrar.</div>";
        }
        var html = "<h5>Notas del Estudiante:</h5><ul>";
        for (var i = 0; i < this.notas.length; i++) {
            html += "<li>Nota " + (i + 1) + ": " + this.notas[i] + "</li>";
        }
        html += "</ul>";
        var promedio = this.calcularPromedio();
        html += "<p><strong>Promedio:</strong> " + promedio + "</p>";
        return html;


    }

};

function agregarNota() {
    // TODO: Obtener el valor del input de nota
    // TODO: Convertir a número
    // TODO: Llamar al método agregarNota del objeto
    // TODO: Limpiar el input
    // TODO: Actualizar la visualización
    var notaInput = document.getElementById("nota-input");
    var nuevaNota = parseFloat(notaInput.value);
    estudianteNotas.agregarNota(nuevaNota);
    notaInput.value = "";
    mostrarNotasEstudiante();

}


function calcularPromedio() {

    // TODO: Llamar al método calcularPromedio
    // TODO: Mostrar el resultado en el DOM
    var promedio = estudianteNotas.calcularPromedio();
    document.getElementById("resultado-ej4").innerHTML +=
        "<div class='alert alert-info'>El promedio de las notas es: " + promedio + "</div>";

}


function mostrarNotasEstudiante() {
    // TODO: Llamar al método mostrarNotas
    // TODO: Mostrar el resultado en el DOM
    var notasHTML = estudianteNotas.mostrarNotas();
    document.getElementById("resultado-ej4").innerHTML = notasHTML;


}











// ===================================
// EJERCICIO 5: GESTIÓN DE EMPLEADOS
// ===================================

















var empleados = [];

function cargarEmpleados() {


    // TODO: Crear array con al menos 6 objetos empleado
    // Cada empleado: nombre, departamento, salario, antiguedad
    empleados = [
        { nombre: "Miguelillo", departamento: "Ventas", salario: 3, antiguedad: 1 },
        { nombre: "tolano", departamento: "entrevistas", salario: 20, antiguedad: 1 },
        { nombre: "antuan la potash", departamento: "contable", salario: 1, antiguedad: 10 },
        { nombre: "Maradona", departamento: "sustancias ilicitas", salario: 5, antiguedad: 2 },
        { nombre: "pedro sanchez", departamento: "pagas", salario: 50000000, antiguedad: 22 },
        { nombre: "eduardito", departamento: "entrevistas", salario: 36, antiguedad: 2 },
        // TODO: Completar con datos de empleados
    ];

    mostrarEmpleados(empleados);
}

function buscarPorDepartamento() {
    

}

    // TODO: Obtener el departamento del input
    // TODO: Filtrar empleados por departamento
    // TODO: Mostrar los resultados
    


function filtrarSalarioAlto() {
    // TODO: Filtrar empleados con salario > 3000€


    empleadosAltoSalario = empleados.filter(function(empleado) {
        return empleado.salario > 3000;
    });


mostrarEmpleados(empleadosAltoSalario);
    
}

function mostrarEmpleados(arrayEmpleados) {
    // TODO: Mostrar empleados en formato HTML
    // Incluir nombre, departamento, salario


    var html = "";
    arrayEmpleados.forEach(function(empleado) {
        html += "<div class='card mb-2'><div class='card-body'>";
        html += "<h6 class='card-title'>" + empleado.nombre + "</h6>";
        html += "<p class='card-text'><strong>Departamento:</strong> " + empleado.departamento + "</p>";
        html += "<p class='card-text'><strong>Salario:</strong> " + empleado.salario + "Gramos</p>";
        html += "<p class='card-text'><strong>Antigüedad:</strong> " + empleado.antiguedad + " años</p>";
        html += "</div></div>";
    });
    // TODO: Crear HTML para cada empleado
    
    document.getElementById("resultado-ej5").innerHTML = html;
}



























// ===================================
// EJERCICIO 6: MÉTODOS AVANZADOS DE ARRAYS
// ===================================

var ciudades = [];

function crearArrayCiudades() {
    // TODO: Crear array con ciudades españolas
    ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Málaga"];

    // TODO: Mostrar el array original
    var html = "<h5>Ciudades originales:</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}


function eliminarDelMedio() {
    // TODO: Usar splice para eliminar elementos del medio
    // TODO: Mostrar qué elementos se eliminaron
    // TODO: Mostrar el array resultante
    var medio = Math.floor(ciudades.length / 2);
    var eliminados = ciudades.splice(medio, 1); 
    var html = "<h5>Elementos eliminados:</h5>" + eliminados.join(", ") + "<br>";
    html += "<h5>Array resultante:</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;

}

function extraerConSlice() {
    // TODO: Usar slice para extraer una porción del array
    // TODO: Mostrar la porción extraída
    // TODO: Mostrar que el array original no se modifica
    var porcion = ciudades.slice(1, 4);
    var html = "<h5>Porción extraída (índices 1 a 3):</h5>" + porcion.join(", ") + "<br>";
    html += "<h5>Array original (sin modificar):</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;

}

function buscarMadrid() {
    // TODO: Usar find() para buscar "Madrid"
    // TODO: Usar indexOf() para encontrar su posición
    // TODO: Mostrar los resultados
    var encontrado = ciudades.find(function(ciudad) {
        return ciudad === "Madrid";
    });
    var indice = ciudades.indexOf("Madrid");
    var html = "<h5>Resultado de find():</h5>" + (encontrado ? encontrado : "No encontrado") + "<br>";
    html += "<h5>Índice de 'Madrid' con indexOf():</h5>" + (indice !== -1 ? indice : "No encontrado");
    document.getElementById("resultado-ej6").innerHTML = html;

}

// ===================================
// EJERCICIO 7: CONSTRUCTOR DE VEHÍCULOS
// ===================================

// TODO: Crear función constructora Vehiculo
function Vehiculo(marca, modelo, año) {
    // TODO: Asignar propiedades usando this
    // TODO: Crear método acelerar() que incremente la velocidad
    // TODO: Crear método mostrarInfo() que retorne información
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.velocidad = 0;
    this.acelerar = function() {
        this.velocidad += 10;
    };
    this.mostrarInfo = function() {
        return ''
            + '<h6>Información del Vehículo:</h6>'
            + '<p><strong>Marca:</strong> ' + this.marca + '</p>'
            + '<p><strong>Modelo:</strong> ' + this.modelo + '</p>'
            + '<p><strong>Año:</strong> ' + this.año + '</p>'
            + '<p><strong>Velocidad:</strong> ' + this.velocidad + ' km/h</p>';
    };

}

var vehiculos = [];

function crearVehiculos() {
    // TODO: Crear varios objetos usando el constructor
    // TODO: Agregar al array vehiculos
    vehiculos.push(new Vehiculo("Toyota", "Corolla", 2020));
    vehiculos.push(new Vehiculo("Honda", "Civic", 2019));
    vehiculos.push(new Vehiculo("Ford", "Focus", 2018));
        
    
    mostrarInfoVehiculos();

}

function acelerarTodos() {
    // TODO: Llamar al método acelerar() de todos los vehículos
    // TODO: Actualizar la visualización
    vehiculos.forEach(function(vehiculo) {
        vehiculo.acelerar();
    });

    mostrarInfoVehiculos();

}

function mostrarInfoVehiculos() {
    // TODO: Mostrar información de todos los vehículos

    var html = "";
    // TODO: Recorrer array y mostrar info de cada vehículo
    vehiculos.forEach(function(vehiculo) {
        html += "<div class='card mb-2'><div class='card-body'>";
        html += "<h6 class='card-title'>" + vehiculo.marca + " " + vehiculo.modelo + "</h6>";
        html += "<p class='card-text'><strong>Año:</strong> " + vehiculo.año + "</p>";
        html += "<p class='card-text'><strong>Velocidad:</strong> " + vehiculo.velocidad + " km/h</p>";
        html += "</div></div>";
    });


    document.getElementById("resultado-ej7").innerHTML = html;

}

// ===================================
// EJERCICIO 8: MATRIZ DE NÚMEROS
// ===================================

var matriz = [];

function crearMatriz() {
    // TODO: Crear matriz 3x3 con números aleatorios
    // Pista: usar bucles anidados y Math.random()
    matriz = [];
    for (var i = 0; i < 3; i++) {
        var fila = [];
        for (var j = 0; j < 3; j++) {
            var numeroAleatorio = Math.floor(Math.random() * 100);
            fila.push(numeroAleatorio);
        }
        matriz.push(fila);
    }


    mostrarMatriz();

}

function sumarDiagonal() {
    // TODO: Calcular la suma de la diagonal principal
    // TODO: Mostrar el resultado
    var suma = 0;
    for (var i = 0; i < 3; i++) {
        suma += matriz[i][i];
    }
    document.getElementById("resultado-ej8").innerHTML =
        "<div class='alert alert-info'>Suma de la diagonal principal: " + suma + "</div>";

}

function mostrarMatriz() {
    // TODO: Mostrar la matriz en formato tabla HTML
    
 

    // TODO: Crear filas y celdas de la tabla
    var html = "<table class='table table-bordered'>";
    for (var i = 0; i < matriz.length; i++) {
        html += "<tr>";
        for (var j = 0; j < matriz[i].length; j++) {
            html += "<td>" + matriz[i][j] + "</td>";
        }
        html += "</tr>";
    }


    html += "</table>";


    document.getElementById("resultado-ej8").innerHTML = html;


}

// ===================================
// EJERCICIO 9: MÉTODOS FUNCIONALES
// ===================================

var numeros = [];

function crearArrayNumeros() {
    // TODO: Crear array con números del 1 al 10
    numeros = [];
    for (var i = 1; i <= 10; i++) {
        numeros.push(i);
    }

    

    mostrarArray("Array original", numeros);

}

function duplicarConMap() {
    // TODO: Usar map() para duplicar todos los números
    var duplicados = numeros.map(function(num) {
        return num * 2;
    });


    

    mostrarArray("Números duplicados", duplicados);

}

function filtrarPares() {
    // TODO: Usar filter() para obtener solo números pares
    var pares = numeros.filter(function(num) {
        return num % 2 === 0;
    });


    mostrarArray("Números pares", pares);

}

function sumarConReduce() {
    // TODO: Usar reduce() para sumar todos los números
    var suma = numeros.reduce(function(acum, num) {
        return acum + num;
    }, 0);



    document.getElementById("resultado-ej9").innerHTML +=
        "<div class='alert alert-success'>Suma total: " + suma + "</div>";

}

function mostrarArray(titulo, array) {
    var html = "<h6>" + titulo + ":</h6>" + array.join(", ") + "<br>";
    document.getElementById("resultado-ej9").innerHTML = html;

}

// ===================================
// EJERCICIO 10: BIBLIOTECA DE LIBROS
// ===================================

// Declaramos el array principal
var biblioteca = [];

// Función para agregar un libro
function agregarLibro() {
    var titulo = document.getElementById("libro-titulo").value.trim();
    var autor = document.getElementById("libro-autor").value.trim();
    var año = parseInt(document.getElementById("libro-year").value);
    var genero = document.getElementById("libro-genero").value;

    if (titulo === "" || autor === "" || isNaN(año) || genero === "") {
        document.getElementById("resultado-ej10").innerHTML =
            "<div class='alert alert-warning'>Por favor, completa todos los campos.</div>";
        return;
    }

    var nuevoLibro = {
        titulo: titulo,
        autor: autor,
        año: año,
        genero: genero
    };

    biblioteca.push(nuevoLibro);

    document.getElementById("libro-titulo").value = "";
    document.getElementById("libro-autor").value = "";
    document.getElementById("libro-year").value = "";
    document.getElementById("libro-genero").value = "";

    mostrarLibros(biblioteca);
}

// Función para mostrar toda la biblioteca
function mostrarBiblioteca() {
    mostrarLibros(biblioteca);
}

// Función para ordenar los libros por título
function ordenarPorTitulo() {
    biblioteca.sort(function (a, b) {
        return a.titulo.localeCompare(b.titulo);
    });
    mostrarLibros(biblioteca);
}

// Función para filtrar por género
function filtrarPorGenero() {
    var generoSeleccionado = document.getElementById("libro-genero").value;
    if (generoSeleccionado === "") {
        document.getElementById("resultado-ej10").innerHTML =
            "<div class='alert alert-warning'>Selecciona un género para filtrar.</div>";
        return;
    }

    var librosFiltrados = biblioteca.filter(function (libro) {
        return libro.genero === generoSeleccionado;
    });

    mostrarLibros(librosFiltrados);
}

// Función para mostrar solo los libros recientes (posteriores a 2020)
function librosRecientes() {
    var recientes = biblioteca.filter(function (libro) {
        return libro.año > 2020;
    });
    mostrarLibros(recientes);
}

// Función para eliminar un libro
function eliminarLibro(index) {
    biblioteca.splice(index, 1);
    mostrarLibros(biblioteca);
}

// Función para mostrar un conjunto de libros (general)
function mostrarLibros(arrayLibros) {
    var html = "";

    if (arrayLibros.length === 0) {
        html = "<div class='alert alert-warning'>No hay libros para mostrar</div>";
    } else {
        for (var i = 0; i < arrayLibros.length; i++) {
            html += `
                <div class="card mb-2">
                    <div class="card-body">
                        <h5 class="card-title">${arrayLibros[i].titulo}</h5>
                        <p class="card-text"><strong>Autor:</strong> ${arrayLibros[i].autor}</p>
                        <p class="card-text"><strong>Año:</strong> ${arrayLibros[i].año}</p>
                        <p class="card-text"><strong>Género:</strong> ${arrayLibros[i].genero}</p>
                        <button class="btn btn-danger btn-sm" onclick="eliminarLibro(${i})">
                            Eliminar
                        </button>
                    </div>
                </div>
            `;
        }
    }

    document.getElementById("resultado-ej10").innerHTML = html;
}


// ===================================
// EVENT LISTENERS - SOLO FALTAN LOS DEL EJERCICIO 10
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    // Ejercicio 1
    document.getElementById("btn-ej1").addEventListener("click", ejercicio1);

    // Ejercicio 2
    document.getElementById("btn-agregar-color").addEventListener("click", agregarColor);
    document.getElementById("btn-eliminar-ultimo").addEventListener("click", eliminarUltimoColor);
    document.getElementById("btn-mostrar-colores").addEventListener("click", mostrarColores);

    // Ejercicio 3
    document.getElementById("btn-cargar-productos").addEventListener("click", cargarProductos);
    document.getElementById("btn-ordenar-precio").addEventListener("click", ordenarPorPrecio);
    document.getElementById("btn-filtrar-caros").addEventListener("click", filtrarProductosCaros);

    // Ejercicio 4
    document.getElementById("btn-agregar-nota").addEventListener("click", agregarNota);
    document.getElementById("btn-calcular-promedio").addEventListener("click", calcularPromedio);
    document.getElementById("btn-mostrar-notas").addEventListener("click", mostrarNotasEstudiante);

    // Ejercicio 5
    document.getElementById("btn-cargar-empleados").addEventListener("click", cargarEmpleados);
    document.getElementById("btn-buscar-depto").addEventListener("click", buscarPorDepartamento);
    document.getElementById("btn-salario-alto").addEventListener("click", filtrarSalarioAlto);

    // Ejercicio 6
    document.getElementById("btn-crear-ciudades").addEventListener("click", crearArrayCiudades);
    document.getElementById("btn-eliminar-medio").addEventListener("click", eliminarDelMedio);
    document.getElementById("btn-extraer-slice").addEventListener("click", extraerConSlice);
    document.getElementById("btn-buscar-ciudad").addEventListener("click", buscarMadrid);

    // Ejercicio 7
    document.getElementById("btn-crear-vehiculos").addEventListener("click", crearVehiculos);
    document.getElementById("btn-acelerar-todos").addEventListener("click", acelerarTodos);
    document.getElementById("btn-info-vehiculos").addEventListener("click", mostrarInfoVehiculos);

    // Ejercicio 8
    document.getElementById("btn-crear-matriz").addEventListener("click", crearMatriz);
    document.getElementById("btn-sumar-diagonal").addEventListener("click", sumarDiagonal);
    document.getElementById("btn-mostrar-matriz").addEventListener("click", mostrarMatriz);

    // Ejercicio 9
    document.getElementById("btn-crear-numeros").addEventListener("click", crearArrayNumeros);
    document.getElementById("btn-duplicar-map").addEventListener("click", duplicarConMap);
    document.getElementById("btn-filtrar-pares").addEventListener("click", filtrarPares);
    document.getElementById("btn-sumar-reduce").addEventListener("click", sumarConReduce);

    // Ejercicio 10
    
    // TODO: Añadir event listeners para los botones del ejercicio 10
    document.getElementById("btn-agregar-libro").addEventListener("click", agregarLibro);
    document.getElementById("btn-mostrar-biblioteca").addEventListener("click", mostrarBiblioteca);
    document.getElementById("btn-ordenar-titulo").addEventListener("click", ordenarPorTitulo);
    document.getElementById("btn-filtrar-genero").addEventListener("click", filtrarPorGenero);
    document.getElementById("btn-libros-recientes").addEventListener("click", librosRecientes);

});

/* ===================================
   FIN DEL ARCHIVO
   
   RECORDATORIO FINAL:
   - Completa cada TODO siguiendo las instrucciones
   - Usa sintaxis tradicional de JavaScript (no ES6+)
   - Testea cada función antes de continuar
   - Todas las salidas deben ir al DOM, no a la consola
   - ¡Practica y diviértete programando!
   ===================================
*/
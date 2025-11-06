// Plantilla para alumnos - Tema07 Ejercicio 1
// Completa las funciones marcadas con TODO y ejecuta desde el navegador.

// Ejercicio 1 - raizCuadrada (plantilla)
document.getElementById('run-e1').addEventListener('click', function () {

  const v = parseFloat(document.getElementById('a-e1').value);
  const out = document.getElementById('out-e1');
  // TODO: implementar raizCuadrada(numero) 
  function raizCuadrada(numero) {
    return Math.sqrt(numero);

  }
  const res = raizCuadrada(v);



  out.textContent = `Resultado: ${res}`;


});

// Ejercicio 2 - alerta (plantilla)
document.getElementById('run-e2').addEventListener('click', function () {

  const msg = document.getElementById('a-e2').value || 'Mensaje de ejemplo';

  document.getElementById('out-e2').textContent = alert(msg);
alert(msg)

});

// Ejercicio 3 - new Function (plantilla)
document.getElementById('run-e3').addEventListener('click', function () {

  // TODO: usa new Function para construir y ejecutar una función que sume a y b
  const a = parseFloat(document.getElementById('a-e3a').value);
  const b = parseFloat(document.getElementById('a-e3b').value);
  const out = document.getElementById('out-e3');
    const suma = new Function('a', 'b', 'return a + b;');
    const resultado = suma(a, b);
    out.textContent = `Resultado: ${resultado}`;



});



// Ejercicio 4 - Hoisting con var (plantilla)
document.getElementById('run-e4').addEventListener('click', function () {
  // TODO: reproduce el ejemplo en el código editando esta función.
    fuera = document.getElementById('out-e4');
    fuera.textContent = `Resultado: ${miFuncion()}`;
    function miFuncion() {
      return 'Hola';
    }

});

// Ejercicio 5 - IIFE (plantilla)
document.getElementById('run-e5').addEventListener('click', function () {

  // TODO: crea una IIFE que haga console.log y devuelva un valor. Luego muestra el resultado aquí.
    const fuera1 = document.getElementById('out-e5');
    const resultado = (function() {
      console.log('Hola probando');
      return 69;
    })();
    fuera1.textContent = `Resultado: ${resultado}`;


});

// Ejercicio 6 - Función anónima dividir (plantilla)
//no fufa 


document.getElementById('run-e6').addEventListener('click', function () {

  // TODO: define y usa esa función para devolver el resultado
    const a = parseFloat(document.getElementById('a-e6a').value);
    const b = parseFloat(document.getElementById('a-e6b').value);
    const out = document.getElementById('run-e6');
    const dividir = function(a, b) {
      return a / b;
    };
    const resultado = dividir(a, b);
    out.textContent = `Resultado: ${resultado}`;


});


// Ejercicio 7 - Función flecha multiplicar (plantilla)
document.getElementById('run-e7').addEventListener('click', function () {

  // TODO: implementa una función flecha multiplicar = 
  const a = parseFloat(document.getElementById('a-e7a').value);
    const b = parseFloat(document.getElementById('a-e7b').value);
    const out = document.getElementById('out-e7');
    const dividir = function(a, b) {
      return a * b;
    };
    const resultado = dividir(a, b);
    out.textContent = `Resultado: ${resultado}`;


});





// Ejercicio 8 - Parámetros por defecto (plantilla)
document.getElementById('run-e8').addEventListener('click', function () {

  // TODO: implementar function saludar 
    const invitado = 'invitado';

  
    function saludar(nombre = invitado) {
      return `Hola ${nombre}`;
    }   
    const nombreInput = document.getElementById('a-e8').value;
    const out = document.getElementById('out-e8');
    const resultado = saludar(nombreInput || undefined);
    out.textContent = `Resultado: ${resultado}`;


});



// Ejercicio 9 - Funciones anidadas (plantilla)


  let contador = 0; 

document.getElementById('run-e9').addEventListener('click', function () {

    // TODO: implementar función externa e interna
    const out = document.getElementById('out-e9');

    function externa() {
        contador++; // aumenta en 1 cada vez
        function interna() {
            return `interno: ${contador}`;
        }
        return interna();
    }

    out.textContent = externa();
});



// Ejercicio 10 - Métodos nativos (plantilla)
document.getElementById('run-e10').addEventListener('click', function () {
    const out = document.getElementById('out-e10');

    // TODO: usa los métodos nativos vistos (length, toUpperCase, trim, indexOf, Math.random, Date.now)
    const texto = document.getElementById('a-e10').value; // ← el texto introducido por el usuario

   

    const longitud = texto.length;
    const mayusculas = texto.toUpperCase();
    const recortado = texto.trim();
    const indiceMundo = texto.indexOf("Mundo");
    const numeroAleatorio = Math.random().toFixed(4);
    const tiempoActual = Date.now();

    out.innerHTML = `
        Longitud: ${longitud}<br>
        Mayúsculas: ${mayusculas}<br>
        Recortado: '${recortado}'<br>
        Índice de 'Mundo': ${indiceMundo}<br>
        Número aleatorio: ${numeroAleatorio}<br>
        Tiempo actual (ms desde 1970): ${tiempoActual}
    `;
});
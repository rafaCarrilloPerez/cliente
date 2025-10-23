

// 1. Seleccionamos los elementos que vamos a usar
const contenido = document.getElementById('contenido');
const btnEj1 = document.getElementById('btn-ej1');

// 2. Añadimos el evento click al botón
btnEj1.addEventListener('click', function () {
   // Cambiar el texto del primer párrafo
   const primerParrafo = contenido.querySelector('p');
   primerParrafo.textContent = 'Este texto ha sido modificado con JavaScript';

   // Cambiar el color del segundo párrafo
   const segundoParrafo = contenido.querySelectorAll('p')[1];
   if (segundoParrafo) {
      segundoParrafo.style.color = 'blue';
   }

   // Añadir clase "resaltado" a todos los párrafos
   const todosLosParrafos = contenido.querySelectorAll('p');
   for (let i = 0; i < todosLosParrafos.length; i++) {
      todosLosParrafos[i].classList.add('resaltado');
   }
});









































/* ============================================================
   TODO: Ejercicio 2 – Crear y eliminar elementos del DOM
   ============================================================ */

// TODO: 1. Seleccionar los botones con IDs: btn-add y btn-remove

// TODO: 2. Crear función para el botón "Añadir párrafo"
//         - Crear un nuevo elemento <p>
//         - Asignar texto: "Nuevo párrafo añadido"
//         - Añadir clase Bootstrap: "mb-2"
//         - Agregarlo al contenedor #contenido
//         - Aplicar eventos hover (función del ejercicio 3)

// TODO: 3. Crear función para el botón "Eliminar párrafo"
//         - Buscar todos los párrafos en #contenido
//         - Si hay párrafos, eliminar el último

document.getElementById('boton2').onclick = function () {

   const prf = document.createElement('p');
   prf.textContent = 'Parrafo nuevo';
   document.getElementById('contenido').appendChild(prf);




}

document.getElementById('boton3').onclick = function () {
   const contenido2 = document.getElementById('contenido');
   const parrafos = contenido2.querySelectorAll('p')
   if (parrafos.length > 0) {
      contenido2.removeChild(parrafos[parrafos.length - 1]);
   }



}







/* ==========================================
   TODO: Ejercicio 3 – Eventos de ratón (hover)
   ========================================== */




// intento fallido

//parrafos.addEventListener('mouseenter', () => {

//linea.style.display = 'block'




// intento fallido
//parrafos.addEventListener('mouseenter', function(){


//linea.style.display = 'block'






// intento exitoso

function hover(elemento) {
   elemento.addEventListener('mouseenter', function() {
      elemento.style.backgroundColor = '#e7f5ff';
   });

   elemento.addEventListener('mouseleave', () => {
      elemento.style.backgroundColor = '';
   });
}
// coge los elementos del array
let elementos = document.querySelectorAll('#contenido p');
// reccore el array y le aplica duncion hover
elementos.forEach( function(elemento) {
   hover(elemento);
});












// TODO: 1. Crear función para cuando entra el ratón
//         - Cambiar backgroundColor a '#e7f5ff'

// TODO: 2.do sale el ratón
//         - Restaurar backgroundColor a ''

// TODO: 3. Crear función para aplicar eventos hover a un párrafo
//         - Usar addEventListener para 'mouseover' y 'mouseout'

// TODO: 4. Aplicar hover a todos los párrafos existentes inicialmente


/* ======================================================
   TODO: Ejercicio 4 – Trabajar con inputs y formularios
   ====================================================== */


document.getElementById('boton4').onclick = function(){
   const contenido3 = document.getElementById('testo').value;
   const contenido = document.getElementById('contenido');

   const primerParrafo = contenido.querySelector('p');
   primerParrafo.textContent = contenido3;




if(contenido3 = 0){

alert('no as metido nada');


}

}










// TODO: 1. Seleccionar elementos: input (#nuevoTexto), botón (#btn-cambiar), mensaje error (#msg-ej4)

// TODO: 2. Crear función para el botón "Cambiar texto"
//         - Obtener valor del input (usar .trim())
//         - Si está vacío: mostrar mensaje error, enfocar input
//         - Si tiene texto: ocultar error, cambiar texto del primer párrafo


/* ===================================================
   TODO: Ejercicio 5 – Lista de tareas (To-Do List)
   =================================================== */

// TODO: 1. Seleccionar elementos: input (#tareaInput), botones (#btn-tarea, #btn-borrar-completadas), lista (#listaTareas)

// TODO: 2. Función para añadir tarea
//         - Obtener texto del input
//         - Si no está vacío: crear <li>, añadir texto, agregar evento click para toggle clase 'completada'
//         - Limpiar input y enfocar

// TODO: 3. Función para borrar tareas completadas
//         - Buscar todos los <li> con clase 'completada'
//         - Eliminar cada uno de la lista


/* ===================================================
   CONSEJOS PARA LOS ALUMNOS:
   
   - Usa console.log() para depurar tu código
   - Prueba cada función por separado antes de continuar
   - Recuerda usar IDs únicos para cada elemento
   - Las clases CSS ya están definidas en custom.css
   - Si algo no funciona, revisa la consola del navegador
   =================================================== */
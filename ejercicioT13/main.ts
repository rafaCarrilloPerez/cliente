/* EJERCICIO 1 – Tipos básicos*/
function ej1(): void {
  let nombreAlumno: string = "lil dumbonejo";
  let edad: number = 20;
  let matriculado: boolean = true;
  let notas: number[] = [7.5, 8, 9];

  const CENTRO_EDUCATIVO: string = "La universidad de la calle";

  console.log("EJ1");
  console.log(nombreAlumno, edad, matriculado, notas, CENTRO_EDUCATIVO);
}


/* EJERCICIO 2 – Funciones tipadas */
function ej2(): void {

  function calcularMedia(a: number, b: number): number {

    return (a + b) / 2;
  }

  console.log("EJ2 Media:", calcularMedia(6, 8));

  
}


/* EJERCICIO 3 – Parámetros opcionales */
function ej3(): void {

  function saludar(nombre?: string): void {

    if (nombre) {

      console.log(`Hola, ${nombre}`);
    } else {

      console.log("Tolano te saluda");
    }
  }

  saludar("pacopepe");
  saludar();
}


/* EJERCICIO 4 – Interfaces como tipo */
function ej4(): void {

  interface Producto {

    id: number;
    nombre: string;
    precio: number;
  }

  const productoCorrecto: Producto = {

    id: 1,
    nombre: "gallo de pelea",
    precio: 45.99
  };

  console.log("EJ4", productoCorrecto);

  
}


/* EJERCICIO 5 – Arrays de interfaces */

function ej5(): void {

  interface Producto {

    id: number;
    nombre: string;
    precio: number;
  }

  const productos: Producto[] = [
    { id: 1, nombre: "M", precio: 30 },
    { id: 2, nombre: "Chocolate", precio: 5 },
    { id: 3, nombre: "sierra nevada", precio: 60 }
  ];

  let total = 0;

  productos.forEach(p => {

    console.log(`${p.nombre} - ${p.precio} €`);
    total += p.precio;
  });

  console.log("Precio total:", total);
}


/* EJERCICIO 6 – Clases y encapsulación */

function ej6(): void {

  class Persona {

    public nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {

      this.nombre = nombre;
      this.edad = edad;
    }

    presentarse(): void {

      console.log(`Me llamo ${this.nombre} y tengo ${this.edad} tacos ya cotizados`);
    }
  }

  const persona = new Persona("Tolano", 30);
  persona.presentarse();


}


/* EJERCICIO 7 – Clases e interfaces */


function ej7(): void {
  
  interface Empleado {

    id: number;
    nombre: string;
    sueldoMensual: number;
  }

  class EmpleadoEmpresa implements Empleado {

    constructor(
      public id: number,
      public nombre: string,
      public sueldoMensual: number
    ) {}

    calcularSueldoAnual(): number {

      return this.sueldoMensual * 12;

    }
  }

  const empleado = new EmpleadoEmpresa(1, "Bylly el niño", 2000);
  console.log("Sueldo anual:", empleado.calcularSueldoAnual());

}


/*EJERCICIO 8 – Manejo de errores */

function ej8(): void {

  function doblarPositivo(n: number): number {

    if (n < 0) {

      throw new Error("El número no puede ser negativo");

    }
    return n * 2;

  }

  try {

    console.log(doblarPositivo(5));
    console.log(doblarPositivo(-3));

  } catch (error) {

    console.error((error as Error).message);

  }
}


/*EJERCICIO 9 – Uso de unknown */

function ej9(): void {

  function toUpperSeguro(valor: unknown): string {

    if (typeof valor === "string") {

      return valor.toUpperCase();
    }
    throw new Error("no es un texto vieo");
  }

  try {

    console.log(toUpperSeguro("typescript"));
    console.log(toUpperSeguro(10));
  } catch (error) {

    console.error((error as Error).message);
  }
}


/* EJERCICIO 10 – Mini proyecto: gestión de alumnos */

function ej10(): void {

  interface Alumno {

    id: number;
    nombre: string;
    notas: number[];
  }

  class AlumnoApp implements Alumno {

    constructor(

      public id: number,
      public nombre: string,
      public notas: number[]
    ) {}

    calcularMedia(): number {

      const suma = this.notas.reduce((a, b) => a + b, 0);
      return suma / this.notas.length;

    }

    resumen(): string {

      return `${this.nombre} - Media: ${this.calcularMedia().toFixed(2)}`;

    }
  }

  const alumnos: AlumnoApp[] = [
    new AlumnoApp(1, "luismi", [5, 5, 5]),
    new AlumnoApp(2, "pacopeas", [6, 6, 1]),
    new AlumnoApp(3, "Bylly el niño", [10, 10, 10])
  ];

  let mediaGlobal = 0;

  alumnos.forEach(alumno => {

    console.log(alumno.resumen());
    mediaGlobal += alumno.calcularMedia();

  });

  console.log(
    "Media global:",
    (mediaGlobal / alumnos.length).toFixed(2)
  );
}

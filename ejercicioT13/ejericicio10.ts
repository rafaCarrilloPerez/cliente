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

function ej10(): void {
  const alumnos: AlumnoApp[] = [
    new AlumnoApp(1, "Luismi", [5, 5, 5]),
    new AlumnoApp(2, "Pacopeas", [6, 6, 1]),
    new AlumnoApp(3, "Bylly el niño", [10, 10, 10])
  ];

  let mediaGlobal = 0;

  alumnos.forEach(alumno => {
    console.log(alumno.resumen());
    mediaGlobal += alumno.calcularMedia();
  });

  console.log("Media global:", (mediaGlobal / alumnos.length).toFixed(2));
}

(window as any).ej10 = ej10;

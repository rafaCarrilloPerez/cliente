function ej1(): void {
  let nombreAlumno: string = "lil dumbonejo";
  let edad: number = 20;
  let matriculado: boolean = true;
  let notas: number[] = [7.5, 8, 9];

  const CENTRO_EDUCATIVO: string = "La universidad de la calle";

  console.log("EJ1");
  console.log(nombreAlumno, edad, matriculado, notas, CENTRO_EDUCATIVO);
}

(window as any).ej1 = ej1;

function ej2(): void {
  function calcularMedia(a: number, b: number): number {
    return (a + b) / 2;
  }

  console.log("EJ2 Media:", calcularMedia(6, 8));
  // console.log(calcularMedia(6, "8")); // ejemplo de error, comentar
}

(window as any).ej2 = ej2;

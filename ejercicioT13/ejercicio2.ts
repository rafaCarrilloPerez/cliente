function ej2(): void {
  function calcularMedia(a: number, b: number): number {
    return (a + b) / 2;
  }

  console.log("EJ2 Media:", calcularMedia(6, 8));
 
}

(window as any).ej2 = ej2;

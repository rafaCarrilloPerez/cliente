function doblarPositivo(n: number): number {
  if (n < 0) {
    throw new Error("El número no puede ser negativo");
  }
  return n * 2;
}

function ej8(): void {
  try {
    console.log(doblarPositivo(5));
    console.log(doblarPositivo(-3));
  } catch (error) {
    console.error((error as Error).message);
  }
}

(window as any).ej8 = ej8;

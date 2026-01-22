function toUpperSeguro(valor: unknown): string {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }
  throw new Error("No es un texto");
}

function ej9(): void {
  try {
    console.log(toUpperSeguro("typescript"));
    console.log(toUpperSeguro(10));
  } catch (error) {
    console.error((error as Error).message);
  }
}

(window as any).ej9 = ej9;

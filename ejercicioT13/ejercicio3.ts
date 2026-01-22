function ej3(): void {
  function saludar(nombre?: string): void {
    if (nombre) {
      console.log(`Hola, ${nombre}`);
    } else {
      console.log("Hola, invitado");
    }
  }

  saludar("pacopepe");
  saludar();
}

(window as any).ej3 = ej3;

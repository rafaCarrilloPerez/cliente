class Persona {
  public nombre: string;
  private edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse(): void {
    console.log(`Me llamo ${this.nombre} y tengo ${this.edad} años`);
  }
}

function ej6(): void {
  const persona = new Persona("Tolano", 30);
  persona.presentarse();

}

(window as any).ej6 = ej6;

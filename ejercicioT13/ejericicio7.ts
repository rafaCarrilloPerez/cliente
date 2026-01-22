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

function ej7(): void {
  const empleado = new EmpleadoEmpresa(1, "Bylly el niño", 2000);
  console.log("Sueldo anual:", empleado.calcularSueldoAnual());
}

(window as any).ej7 = ej7;

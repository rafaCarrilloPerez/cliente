interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

function ej5(): void {
  const productos: Producto[] = [
    { id: 1, nombre: "M", precio: 30 },
    { id: 2, nombre: "Chocolate", precio: 5 },
    { id: 3, nombre: "Sierra Nevada", precio: 60 }
  ];

  let total = 0;

  productos.forEach(p => {
    console.log(`${p.nombre} - ${p.precio} €`);
    total += p.precio;
  });

  console.log("Precio total:", total);
}

(window as any).ej5 = ej5;

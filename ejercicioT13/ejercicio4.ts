interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

function ej4(): void {
  const productoCorrecto: Producto = {
    id: 1,
    nombre: "gallo de pelea",
    precio: 45.99
  };

  console.log("EJ4", productoCorrecto);
  // const productoIncorrecto: Producto = { id: 2, nombre: "X" }; // error, comentar
}

(window as any).ej4 = ej4;

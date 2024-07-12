export interface Producto {
  id: number;
  nombre_producto: string;
  nombre_categoria: string;
  imagen: string;
  stock: number;
  stock_minimo: number;
  stock_maximo: number;
  precio_unitario: number;
  precio_venta: number;
  igv: number;
  subtotal: number;
  total: number;
  fecha_ingreso: string;
  fecha_vencimiento: string;
  nombre_almacen: string;
  direccion_almacen: string;
  telefono_almacen: string;
}

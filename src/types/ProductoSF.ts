export interface ProductoSF {
  id: number;
  id_producto_proveedor: number;
  id_categoria: number;
  stock: number;
  stock_minimo: number;
  stock_maximo: number;
  precio_unitario: string;
  precio_venta: string;
  igv: string;
  subtotal: string;
  total: string;
  fecha_ingreso: string;
  fecha_vencimiento: string;
  id_almacen: number;
}

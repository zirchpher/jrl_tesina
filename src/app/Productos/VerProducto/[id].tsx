import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { RowTarget } from '@/components/RowTarget';
import { Producto } from '@/types/Product';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const [producto, setProducto] = useState<Producto>({} as Producto);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(
          `http://192.168.8.100:3000/api/productos/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setProducto(data);
        } else {
          console.error('Error al obtener empleado:', response.statusText);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchProducto();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header__top}>
        <View>
          <Text style={styles.header__title}>{producto.nombre_producto}</Text>
        </View>
        <View>
          <Image source={require('@/assets/papaslays.png')} />
        </View>
      </View>

      <ScrollView style={styles.header__body}>
        <RowTarget label="Producto" text={producto.nombre_producto} key={1} />
        <RowTarget label="Imagen" text={producto.imagen} key={2} />
        <RowTarget label="Stock" text={producto.stock?.toString()} key={3} />
        <RowTarget
          label="Stock Mínimo"
          text={producto.stock_minimo?.toString()}
          key={4}
        />
        <RowTarget
          label="Stock Máximo"
          text={producto.stock_maximo?.toString()}
          key={5}
        />
        <RowTarget
          label="Precio Unitario"
          text={`S/. ${producto.precio_unitario?.toString()}`}
          key={6}
        />
        <RowTarget
          label="Precio Venta"
          text={`S/. ${producto.precio_venta?.toString()}`}
          key={7}
        />
        <RowTarget
          label="IGV"
          text={`S/. ${producto.igv?.toString()}`}
          key={8}
        />
        <RowTarget
          label="Subtotal"
          text={`S/. ${producto.subtotal?.toString()}`}
          key={9}
        />
        <RowTarget
          label="Total"
          text={`S/. ${producto.total?.toString()}`}
          key={10}
        />
        <RowTarget
          label="Fecha Ingreso"
          text={producto.fecha_ingreso?.slice(0, 10)}
          key={11}
        />
        <RowTarget
          label="Fecha Vencimiento"
          text={producto.fecha_vencimiento?.slice(0, 10)}
          key={12}
        />
        <RowTarget
          label="Nombre Categoría"
          text={producto.nombre_categoria}
          key={13}
        />
        <RowTarget
          label="nombre Almacén"
          text={producto.nombre_almacen}
          key={14}
        />
        <RowTarget
          label="Direccion Almacén"
          text={producto.direccion_almacen}
          key={15}
        />
        <RowTarget
          label="Telefono Almacén"
          text={producto.telefono_almacen}
          key={16}
        />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },

  header__top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  header__title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  header__body: {
    marginTop: 24,
    marginBottom: 60,
  },
});

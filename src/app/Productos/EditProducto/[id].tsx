import { router, useLocalSearchParams } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import { RowTarget } from '@/components/RowTarget';
import { useEffect, useState } from 'react';
import { ProductoSF } from '@/types/ProductoSF';

export default function EditProductoScreen() {
  const { id } = useLocalSearchParams();
  const [producto, setProducto] = useState<ProductoSF>({} as ProductoSF);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(
          `http://192.168.8.100:3000/api/productos/sf/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setProducto(data);
        } else {
          console.error('Error al obtener producto:', response.statusText);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchProducto();
  }, [id]);

  const handleInputChange = (
    field: keyof ProductoSF,
    value: string | number
  ) => {
    // Si el campo es numérico, convierte el valor a número
    const numericFields = [
      'id_producto_proveedor',
      'id_categoria',
      'stock',
      'stock_minimo',
      'stock_maximo',
      'id_almacen',
    ];
    if (numericFields.includes(field as string)) {
      setProducto({ ...producto, [field]: parseInt(value as string, 10) || 0 });
    } else {
      setProducto({ ...producto, [field]: value });
    }
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://192.168.8.100:3000/api/productos/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(producto),
        }
      );

      if (response.ok) {
        Alert.alert('Producto actualizado exitosamente');
        router.back();
      } else {
        const errorResponse = await response.json();
        console.error('Error al actualizar producto:', errorResponse);
        Alert.alert('Error al actualizar producto');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      Alert.alert('Error en la solicitud');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Producto</Text>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <RowTarget
          label="ID Producto Proveedor:"
          value={producto.id_producto_proveedor?.toString()}
          onChangeText={(text) =>
            handleInputChange('id_producto_proveedor', parseInt(text))
          }
        />
        <RowTarget
          label="ID Categoría:"
          value={producto.id_categoria?.toString()}
          onChangeText={(text) =>
            handleInputChange('id_categoria', parseInt(text))
          }
        />
        <RowTarget
          label="Stock:"
          value={producto.stock?.toString()}
          onChangeText={(text) => handleInputChange('stock', parseInt(text))}
        />
        <RowTarget
          label="Stock Mínimo:"
          value={producto.stock_minimo?.toString()}
          onChangeText={(text) =>
            handleInputChange('stock_minimo', parseInt(text))
          }
        />
        <RowTarget
          label="Stock Máximo:"
          value={producto.stock_maximo?.toString()}
          onChangeText={(text) =>
            handleInputChange('stock_maximo', parseInt(text))
          }
        />
        <RowTarget
          label="Precio Unitario:"
          value={producto.precio_unitario}
          onChangeText={(text) => handleInputChange('precio_unitario', text)}
        />
        <RowTarget
          label="Precio de Venta:"
          value={producto.precio_venta}
          onChangeText={(text) => handleInputChange('precio_venta', text)}
        />
        <RowTarget
          label="Fecha de Ingreso:"
          value={producto.fecha_ingreso}
          onChangeText={(text) => handleInputChange('fecha_ingreso', text)}
        />
        <RowTarget
          label="Fecha de Vencimiento:"
          value={producto.fecha_vencimiento}
          onChangeText={(text) => handleInputChange('fecha_vencimiento', text)}
        />
        <RowTarget
          label="Almacén:"
          value={producto.id_almacen?.toString()}
          onChangeText={(text) => handleInputChange('id_almacen', text)}
        />

        <Button title="Guardar" onPress={handleSave} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  scrollViewContent: {
    marginBottom: 16,
  },

  title: {
    marginBottom: 24,
    fontWeight: 'bold',
    fontSize: 24,
  },
});

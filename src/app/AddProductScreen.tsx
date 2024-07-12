import { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Button,
} from 'react-native';
import { DropDown } from '@/components/DropDown';
import { RowTarget } from '@/components/RowTarget';
import { Proveedor } from '@/types/Supplier';
import useFetch from '@/hooks/useFetch';
import { ProductoProveedor } from '@/types/ProductoProveedor';

// const productos = [{ label: 'Papas Lays Clásicas', value: 'papas lays' }];

export default function AddProductScreen() {
  const { data, loading, error } = useFetch<Proveedor[]>(
    `http://192.168.8.100:3000/api/Proveedores`
  );

  const [selectedProveedor, setSelectedProveedor] = useState<string | number>(
    '1'
  );

  const {
    data: dataProducto,
    loading: loadingProducto,
    error: errorProducto,
  } = useFetch<ProductoProveedor>(
    `http://192.168.8.100:3000/api/productosProveedor/${selectedProveedor}`
  );

  const [selectedProducto, setSelectedProducto] = useState<string | number>('');

  const categoria = 1;

  const proveedores = data?.map((proveedor) => ({
    label: proveedor.nombre_proveedor,
    value: proveedor.id,
  }));

  const productos = [
    {
      label: dataProducto?.nombre_producto,
      value: dataProducto?.id_proveedor,
    },
  ];

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  console.log(dataProducto);

  return (
    <View style={styles.container}>
      <View>
        <View style={{ ...styles.dropDownContainer, marginTop: 24 }}>
          <DropDown
            label="Selecciona un Proveedor:"
            items={proveedores!}
            selectedValue={selectedProveedor}
            onValueChange={(value) => setSelectedProveedor(value)}
          />
        </View>

        <View style={styles.dropDownContainer}>
          <DropDown
            label="Selecciona un Producto:"
            items={productos!}
            selectedValue={selectedProducto}
            onValueChange={(value) => setSelectedProducto(value)}
          />
        </View>
      </View>

      <View style={{ marginTop: 24 }}>
        <RowTarget label="Cant." />

        <Button title="Guardar" />
        {/* <PrimaryButton title="Guardar" onPress={() => console.log(`Proveedor: ${selectedProveedor}, Producto: ${selectedProducto}`)} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  dropDownContainer: {},
});

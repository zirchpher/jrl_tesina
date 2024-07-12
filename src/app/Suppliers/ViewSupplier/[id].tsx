import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { RowTarget } from '@/components/RowTarget';
import { Proveedor } from '@/types/Supplier';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const [proveedor, setProveedor] = useState<Proveedor>({} as Proveedor);

  useEffect(() => {
    const fetchProveedores = async () => {
      try {
        const response = await fetch(
          `http://192.168.8.100:3000/api/proveedores/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setProveedor(data);
        } else {
          console.error('Error al obtener proveedores:', response.statusText);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchProveedores();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header__top}>
        <Text style={styles.header__title}>{proveedor.nombre_proveedor}</Text>
      </View>

      <View style={styles.header__body}>
        <RowTarget label="Nombre" text={proveedor.nombre_proveedor} key={1} />
        <RowTarget
          label="Contacto"
          text={proveedor.contacto_proveedor}
          key={2}
        />
        <RowTarget
          label="Dirección"
          text={proveedor.direccion_proveedor}
          key={3}
        />
        <RowTarget
          label="Condiciones de Pago"
          text={proveedor.condiciones_pago}
          key={4}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },

  scrollViewContent: {
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
  },
});

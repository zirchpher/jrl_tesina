import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Text,
} from 'react-native';
import { SearchInput } from '@/components/SearchInput';
import { CardInfo } from '@/components/CardInfo';
import { ModalInfo } from '@/types/Modal';
import { Link } from 'expo-router';
import { Proveedor } from '@/types/Supplier';

const modalInfo: ModalInfo[] = [
  {
    title: 'Ver Proveedor',
    image: require('../assets/eye_icon.png'),
    goToPage: (id: string) => `/Suppliers/ViewSupplier/${id}`,
  },
  {
    title: 'Editar Proveedor',
    image: require('../assets/edit_icon.png'),
    goToPage: (id: string) => `/Suppliers/EditSupplier/${id}`,
  },
  {
    title: 'Ver Productos del Proveedor',
    image: require('../assets/eye_icon.png'),
    goToPage: (id: string) => `/Suppliers/VerProductosProveedor/${id}`,
  },
];

export default function SuppliersScreen() {
  const [proveedores, setProveedores] = useState<Proveedor[]>([]);

  useEffect(() => {
    const fetchProveedores = async () => {
      try {
        const response = await fetch(
          'http://192.168.8.100:3000/api/proveedores'
        );
        if (response.ok) {
          const data = await response.json();
          setProveedores(data);
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
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.hero}>
          <View style={styles.searchInputContainer}>
            <SearchInput />
          </View>

          <Link href="/AddSupplierScreen" asChild>
            <Pressable>
              <Image source={require('../assets/add_button.png')} />
            </Pressable>
          </Link>
        </View>

        {proveedores.map((proveedor) => (
          <CardInfo
            key={proveedor.id}
            title={proveedor.nombre_proveedor}
            subtitle={`${proveedor.direccion_proveedor}`}
            modalInfo={modalInfo}
            supplierId={proveedor.id}
          />
        ))}

        {proveedores.length === 0 && (
          <Text>No hay proveedores disponibles</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollViewContent: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },

  hero: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  searchInputContainer: {
    width: '80%',
  },
});

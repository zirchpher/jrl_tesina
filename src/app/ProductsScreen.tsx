import { View, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { SearchInput } from '@/components/SearchInput';
import { CardInfo } from '@/components/CardInfo';
import { ModalInfo } from '@/types/Modal';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { Producto } from '@/types/Product';

const modalInfo: ModalInfo[] = [
  {
    title: 'Ver Producto',
    image: require('../assets/eye_icon.png'),
    goToPage: (id: string) => `/Productos/VerProducto/${id}`,
  },
  {
    title: 'Editar Producto',
    image: require('../assets/edit_icon.png'),
    goToPage: (id: string) => `/Productos/EditProducto/${id}`,
  },
];

export default function ProductsScreen() {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('http://192.168.8.100:3000/api/productos');
        if (response.ok) {
          const data = await response.json();
          setProductos(data);
        } else {
          console.error('Error al obtener proveedores:', response.statusText);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.hero}>
          <View style={styles.searchInputContainer}>
            <SearchInput />
          </View>

          <Link key="1" href="/AddProductScreen" asChild>
            <Pressable>
              <Image source={require('../assets/add_button.png')} />
            </Pressable>
          </Link>
        </View>

        {productos.map((producto) => (
          <CardInfo
            key={producto.id}
            title={producto.nombre_producto}
            subtitle={`${producto.stock} en stock`}
            supplierId={producto.id}
            modalInfo={modalInfo}
            imageSource={require('../assets/papaslays.png')}
          />
        ))}
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

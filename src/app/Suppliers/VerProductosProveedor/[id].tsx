import { Link, useLocalSearchParams } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  Image,
} from 'react-native';
import { ProductoProveedor } from '@/types/ProductoProveedor';
import { CardInfo } from '@/components/CardInfo';
import { ModalInfo } from '@/types/Modal';
import useFetch from '@/hooks/useFetch';
import { SearchInput } from '@/components/SearchInput';

const modalInfo: ModalInfo[] = [
  {
    title: 'Ver Proveedor',
    image: require('../../../assets/eye_icon.png'),
    goToPage: (id: string) => `/Suppliers/ViewSupplier/${id}`,
  },
  {
    title: 'Editar Proveedor',
    image: require('../../../assets/edit_icon.png'),
    goToPage: (id: string) => `/Suppliers/EditSupplier/${id}`,
  },
];

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const {
    data: productosProveedor,
    loading,
    error,
  } = useFetch<ProductoProveedor>(
    `http://192.168.8.100:3000/api/productosProveedor/${id}`
  );

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

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.searchInputContainer}>
          <SearchInput />
        </View>

        <Link href="/AddSupplierScreen" asChild>
          <Pressable>
            <Image source={require('../../../assets/add_button.png')} />
          </Pressable>
        </Link>
      </View>

      <View style={styles.header__top}>
        <Text style={styles.header__title}>
          {productosProveedor?.nombre_proveedor}
        </Text>
      </View>

      <View style={styles.header__body}>
        {productosProveedor && (
          <CardInfo
            key={productosProveedor.id}
            title={productosProveedor.nombre_producto}
            subtitle={productosProveedor.categoria}
            modalInfo={modalInfo}
            supplierId={productosProveedor.id}
            imageSource={require('../../../assets/papaslays.png')}
          />
        )}
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

  hero: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },

  searchInputContainer: {
    width: '80%',
  },
});

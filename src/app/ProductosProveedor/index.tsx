import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { ModalInfo } from '@/types/Modal';
import { SearchInput } from '@/components/SearchInput';
import { CardInfo } from '@/components/CardInfo';

const modalInfo: ModalInfo[] = [
  {
    title: 'Ver Producto Proveedor',
    image: require('../../assets/eye_icon.png'),
    goToPage: '/ProductosProveedor/ViewProductProveedor',
  },
  {
    title: 'Editar Producto Proveedor',
    image: require('../../assets/edit_icon.png'),
    goToPage: '/ProductosProveedor/EditProductProveedor',
  },
];

export default function index() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.hero}>
          <View style={styles.searchInputContainer}>
            <SearchInput />
          </View>

          <Link key="1" href="/ProductosProveedor/AddProductoProveedor" asChild>
            <Pressable>
              <Image source={require('../../assets/add_button.png')} />
            </Pressable>
          </Link>
        </View>

        <CardInfo
          title="Papas Lays Clásicas"
          subtitle="Papas"
          modalInfo={modalInfo}
          imageSource={require('../../assets/papaslays.png')}
        />

        <CardInfo
          title="Papas Lays Clásicas"
          subtitle="Papas"
          modalInfo={modalInfo}
          imageSource={require('../../assets/papaslays.png')}
        />
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

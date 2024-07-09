import React from 'react';
import { View, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { SearchInput } from '@/components/SearchInput';
import { CardInfo } from '@/components/CardInfo';
import { ModalInfo } from '@/types/Modal';
import { Link } from 'expo-router';

const modalInfo: ModalInfo[] = [
  {
    title: 'Ver Proveedor',
    image: require('../assets/eye_icon.png'),
    goToPage: '/ViewSupplierScreen',
  },
  {
    title: 'Editar Proveedor',
    image: require('../assets/edit_icon.png'),
    goToPage: '/EditSupplierScreen',
  },
];

export default function SuppliersScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.hero}>
          <View style={styles.searchInputContainer}>
            <SearchInput />
          </View>

          <Link key="1" href="/AddSupplierScreen" asChild>
            <Pressable>
              <Image source={require('../assets/add_button.png')} />
            </Pressable>
          </Link>
        </View>

        <CardInfo
          title="Snacks América"
          subtitle="6 Productos"
          modalInfo={modalInfo}
        />

        <CardInfo
          title="Juan Manuel Sánchez Rey"
          subtitle="6 Productos"
          modalInfo={modalInfo}
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

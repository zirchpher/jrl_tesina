import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { AddCardRow } from '@/components/AddCardRow';
import { GoToIcon } from '@/components/GoToIcon';

export default function ProductDetailsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <AddCardRow
          title="Nombre del Producto"
          placeholder="Papas Lays Clásicas"
          imageSource={require('../assets/product.png')}
        />

        <AddCardRow
          title="Imagen del Producto"
          placeholder="papaslays.png"
          imageSource={require('../assets/upload.png')}
        />

        <AddCardRow
          title="Categoría"
          placeholder="Papas"
          imageSource={require('../assets/category.png')}
        />

        <AddCardRow
          title="Categoría"
          placeholder="Papas"
          imageSource={require('../assets/category.png')}
        />

        <AddCardRow
          title="Categoría"
          placeholder="Papas"
          imageSource={require('../assets/category.png')}
        />

        <AddCardRow
          title="Categoría"
          placeholder="Papas"
          imageSource={require('../assets/category.png')}
        />
      </ScrollView>

      <GoToIcon
        goToScreen="/ProductsScreen"
        imageSource={require('../assets/confirm_icon.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});

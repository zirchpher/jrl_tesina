import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { AddCardRow } from '@/components/AddCardRow';
import { GoToIcon } from '@/components/GoToIcon';

export default function AddCategoriesScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <AddCardRow
          title="Categoría"
          placeholder="Escribe una categoría"
          imageSource={require('../assets/category.png')}
        />
      </ScrollView>

      <GoToIcon
        goToScreen="/CategoriesScreen"
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

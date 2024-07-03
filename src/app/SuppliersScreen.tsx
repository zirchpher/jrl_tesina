import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SearchInput } from '@/components/SearchInput';
import { CardInfo } from '@/components/CardInfo';
import { GoToIcon } from '@/components/GoToIcon';

const data = [
  {
    key: 'Proovedor',
    value: 'Juan Miguel Suarez Mendoza',
  },
  {
    key: 'Dirección',
    value: 'Av. 28 de Julio SENATI',
  },
  {
    key: 'Teléfono',
    value: '123-456-789',
  },
];

export default function SuppliersScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <SearchInput />

        <CardInfo data={data} ctaSecondaryButton="/SupplierDetailsScreen" />

        <CardInfo data={data} ctaSecondaryButton="/SupplierDetailsScreen" />
      </ScrollView>

      <GoToIcon
        goToScreen="/AddSuppliersScreen"
        imageSource={require('../assets/add.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollViewContent: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
});

import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { RowTarget } from '@/components/RowTarget';
import { PrimaryButton } from '@/components/PrimaryButton';

export default function AddProductoProveedor() {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 24, fontWeight: 'bold', fontSize: 24 }}>
        Agrega un Producto de Proveedor
      </Text>

      <RowTarget />
      <RowTarget />
      <RowTarget />
      <RowTarget />

      <PrimaryButton title="Guardar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
});

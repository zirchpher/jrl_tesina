import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { RowTarget } from '@/components/RowTarget';
import { PrimaryButton } from '@/components/PrimaryButton';

export default function EditProductScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <RowTarget />

        <RowTarget />

        <PrimaryButton title="Guardar" />
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
});

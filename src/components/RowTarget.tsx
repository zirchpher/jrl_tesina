import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

export function RowTarget() {
  return (
    <View>
      <View style={styles.body__row}>
        <Text style={styles.body__title}>Proveedor</Text>
        <TextInput style={styles.body__subtitle}>Texto Demo</TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body__row: {
    flexDirection: 'row',
    height: 24,
    borderBottomWidth: 1,
    borderColor: '#CFCECE',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  body__title: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  body__subtitle: {
    fontSize: 14,
    fontWeight: 'light',
    color: '#ADADAD',
  },
});

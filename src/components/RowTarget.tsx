import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface RowTargetProps {
  label: string;
  onChangeText?: (text: string) => void;
  text?: string;
  value?: string;
}

export function RowTarget({
  label,
  onChangeText,
  text,
  value,
}: RowTargetProps) {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.label}>{label}</Text>
      {onChangeText ? (
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
        />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  },
});

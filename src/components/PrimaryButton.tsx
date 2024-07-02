import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface PrimaryButtonProps {
  title: string;
  height?: number;
  backgroundColor?: string;
}

export function PrimaryButton({
  title,
  height = 60,
  backgroundColor = '#0D4B80',
}: PrimaryButtonProps) {
  return (
    <View>
      <TouchableOpacity
        style={{
          ...styles.button,
          height: height,
          backgroundColor: backgroundColor,
        }}
        onPress={() => {}}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

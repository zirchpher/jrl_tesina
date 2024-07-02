import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface SecondaryButtonProps {
  title: string;
  height?: number;
  color?: string;
}

export function SecondaryButton({
  title,
  height = 60,
  color = '#0D4B80',
}: SecondaryButtonProps) {
  return (
    <View>
      <View
        style={{
          ...styles.button,
          height: height,
          borderColor: color,
        }}
      >
        <Text
          style={{
            ...styles.buttonText,
            color: color,
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

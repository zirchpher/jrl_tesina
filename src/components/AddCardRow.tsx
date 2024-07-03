import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TextInput,
} from 'react-native';
import React from 'react';

interface AddCardRowProps {
  title: string;
  placeholder: string;
  imageSource: ImageSourcePropType;
}

export function AddCardRow({
  title,
  placeholder,
  imageSource,
}: AddCardRowProps) {
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.title}>{title}</Text>

        <TextInput placeholder={placeholder} style={styles.input} />
      </View>

      <View>
        <Image source={imageSource} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingLeft: 16,
    paddingRight: 24,

    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#333333',

    marginBottom: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  input: {
    fontSize: 14,
    fontWeight: 'light',
  },
});

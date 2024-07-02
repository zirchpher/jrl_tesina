import {
  View,
  StyleSheet,
  Image,
  TextInput,
  ImageSourcePropType,
} from 'react-native';

interface LoginInputCardProps {
  placeholder: string;
  imageSource: ImageSourcePropType;
}

export function LoginInputCard({
  placeholder,
  imageSource,
}: LoginInputCardProps) {
  return (
    <View style={styles.loginInputCard}>
      <Image source={imageSource} style={styles.icon} />

      <TextInput
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="email"
        style={styles.input}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  loginInputCard: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F2F4',
    borderRadius: 8,
    marginBottom: 24,
  },

  icon: {
    width: 36,
    height: 36,
    marginLeft: 16,
    marginRight: 16,
  },

  input: {
    flex: 1,
    fontSize: 16,
  },
});

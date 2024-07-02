import { PrimaryButton } from '@/components/PrimaryButton';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function LoginScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>INICIAR SESIÓN</Text>
      </View>

      <View style={styles.loginInputContainer}>
        <View style={styles.loginInputCard}>
          <Image source={require('../assets/user.png')} style={styles.icon} />

          <TextInput
            placeholder="Email o usuario"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            style={styles.input}
          />
        </View>

        <View style={styles.loginInputCard}>
          <Image source={require('../assets/pass.png')} style={styles.icon} />

          <TextInput
            placeholder="Contraseña"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>¿Olvidó su contraseña?</Text>
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton title="Iniciar sesión" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
  },

  logoContainer: {
    width: 88,
    height: 68,
    marginTop: 100,
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  titleContainer: {
    marginTop: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  loginInputContainer: {
    width: '100%',
    marginTop: 32,
  },

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

  forgotPasswordContainer: {
    marginTop: 8,
    alignSelf: 'flex-end',
    marginBottom: 32,
  },

  forgotPasswordText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#344757',
  },

  buttonContainer: {
    width: '100%',
  },
});

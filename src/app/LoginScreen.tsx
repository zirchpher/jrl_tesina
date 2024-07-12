import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Alert,
  Button,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { router } from 'expo-router';

const LoginScreen = () => {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.8.100:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo, clave }),
      });

      if (response.ok) {
        const jsonValue = JSON.stringify(true);
        await AsyncStorage.setItem('userToken', jsonValue);

        Alert.alert('Login Exitoso', 'Credenciales correctas.');
        router.navigate('HomeScreen');
      } else {
        const errorText = await response.text();
        Alert.alert('Error', 'Correo o contraseña incorrectas.');
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      Alert.alert('Error', 'Ocurrió un error al intentar iniciar sesión');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>INICIAR SESIÓN</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/user.png')}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Correo electrónico o usuario"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            value={correo}
            onChangeText={setCorreo}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/pass.png')}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Contraseña"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            style={styles.input}
            value={clave}
            onChangeText={setClave}
          />
        </View>

        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>¿Olvidó su contraseña?</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Iniciar sesión" onPress={handleLogin} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: 'center',
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 120,
    height: 120,
  },
  titleContainer: {
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F2F4',
    borderRadius: 8,
    marginBottom: 24,
  },
  inputIcon: {
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

export default LoginScreen;

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import { RowTarget } from '@/components/RowTarget';
import { router } from 'expo-router';
import { DropDown } from '@/components/DropDown'; // Importar DropDown desde su ubicación correcta

const roles = [
  { label: 'Administrador', value: '1' },
  { label: 'Jefe de Almacén', value: '2' },
  { label: 'Asistente de Almacén', value: '3' },
  { label: 'Jefe de Empaque', value: '4' },
];

export default function AddUserScreen() {
  const [username, setUsername] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [idRol, setIdRol] = useState('1'); // Valor por defecto es '1'

  const handleGuardar = async () => {
    try {
      const response = await fetch('http://192.168.8.100:3000/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          correo,
          clave,
          id_rol: parseInt(idRol), // Convertir idRol a entero si es necesario
        }),
      });

      if (response.ok) {
        Alert.alert('Usuario añadido correctamente');
        router.back();
      } else {
        Alert.alert(
          'Error al añadir usuario',
          'Hubo un problema al añadir el usuario'
        );
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      Alert.alert('Error', 'Hubo un problema al procesar la solicitud');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={{ marginBottom: 24, fontWeight: 'bold', fontSize: 24 }}>
        Agrega un Usuario
      </Text>

      <RowTarget label="Nombre de usuario" onChangeText={setUsername} />
      <RowTarget label="Correo" onChangeText={setCorreo} />
      <RowTarget label="Clave" onChangeText={setClave} />

      <Text style={styles.label}>Rol:</Text>
      <DropDown
        label="Selecciona un Rol:"
        items={roles}
        selectedValue={idRol}
        onValueChange={setIdRol}
      />

      <Button title="Guardar" onPress={handleGuardar} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

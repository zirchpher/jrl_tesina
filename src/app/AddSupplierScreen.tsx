import { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { RowTarget } from '@/components/RowTarget';
import { router } from 'expo-router';

export default function AddSupplierScreen() {
  const [nombreProveedor, setNombreProveedor] = useState('');
  const [contactoProveedor, setContactoProveedor] = useState('');
  const [direccionProveedor, setDireccionProveedor] = useState('');
  const [condicionesPago, setCondicionesPago] = useState('');

  const handleGuardar = async () => {
    try {
      const response = await fetch(
        'http://192.168.8.100:3000/api/proveedores',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre_proveedor: nombreProveedor,
            contacto_proveedor: contactoProveedor,
            direccion_proveedor: direccionProveedor,
            condiciones_pago: condicionesPago,
          }),
        }
      );

      if (response.ok) {
        Alert.alert('Proveedor añadido correctamente');
        router.back();
      } else {
        Alert.alert(
          'Error al añadir proveedor',
          'Hubo un problema al añadir el proveedor'
        );
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      Alert.alert('Error', 'Hubo un problema al procesar la solicitud');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 24, fontWeight: 'bold', fontSize: 24 }}>
        Agrega un Proveedor
      </Text>

      <RowTarget
        label="Nombre del proveedor"
        onChangeText={setNombreProveedor}
      />
      <RowTarget
        label="Contacto del proveedor"
        onChangeText={setContactoProveedor}
      />
      <RowTarget
        label="Dirección del proveedor"
        onChangeText={setDireccionProveedor}
      />
      <RowTarget
        label="Condiciones de pago"
        onChangeText={setCondicionesPago}
      />

      <Button title="Guardar" onPress={handleGuardar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
});

import { router, useLocalSearchParams } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import { RowTarget } from '@/components/RowTarget';
import { useEffect, useState } from 'react';
import { Proveedor } from '@/types/Supplier';

export default function EditSupplierScreen() {
  const { id } = useLocalSearchParams();
  const [proveedor, setProveedor] = useState<Proveedor>({
    nombre_proveedor: '',
    contacto_proveedor: '',
    direccion_proveedor: '',
    condiciones_pago: '',
    calificacion_proveedor: '',
  } as Proveedor);

  useEffect(() => {
    const fetchProveedor = async () => {
      try {
        const response = await fetch(
          `http://192.168.8.100:3000/api/proveedores/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setProveedor(data);
        } else {
          console.error('Error al obtener proveedor:', response.statusText);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchProveedor();
  }, [id]);

  const handleInputChange = (field: keyof Proveedor, value: string) => {
    setProveedor({ ...proveedor, [field]: value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://192.168.8.100:3000/api/proveedores/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(proveedor),
        }
      );

      if (response.ok) {
        Alert.alert('Proveedor actualizado exitosamente');
        router.back();
      } else {
        console.error('Error al actualizar proveedor:', response.statusText);
        Alert.alert('Error al actualizar proveedor');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      Alert.alert('Error en la solicitud');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{proveedor.nombre_proveedor}</Text>

      <RowTarget
        label="Nombre del proveedor:"
        value={proveedor.nombre_proveedor}
        onChangeText={(text) => handleInputChange('nombre_proveedor', text)}
      />
      <RowTarget
        label="Contacto del proveedor:"
        value={proveedor.contacto_proveedor}
        onChangeText={(text) => handleInputChange('contacto_proveedor', text)}
      />
      <RowTarget
        label="Dirección del proveedor:"
        value={proveedor.direccion_proveedor}
        onChangeText={(text) => handleInputChange('direccion_proveedor', text)}
      />
      <RowTarget
        label="Condiciones de pago:"
        value={proveedor.condiciones_pago}
        onChangeText={(text) => handleInputChange('condiciones_pago', text)}
      />
      <RowTarget
        label="Calificación del proveedor:"
        value={proveedor.calificacion_proveedor}
        onChangeText={(text) =>
          handleInputChange('calificacion_proveedor', text)
        }
      />

      <Button title="Guardar" onPress={handleSave} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginBottom: 24,
    fontWeight: 'bold',
    fontSize: 24,
  },
});

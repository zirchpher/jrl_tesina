import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { RowTarget } from '@/components/RowTarget';
import { useEffect, useState } from 'react';
import { Empleado } from '@/types/Empleado';

export default function EditEmpleadoScreen() {
  const { id } = useLocalSearchParams();
  const [empleado, setEmpleado] = useState<Omit<Empleado, 'id' | 'nombre_rol'>>(
    {
      username: '',
      correo: '',
      clave: '',
    }
  );

  useEffect(() => {
    const fetchEmpleado = async () => {
      try {
        const response = await fetch(
          `http://192.168.8.100:3000/api/usuarios/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setEmpleado(data);
        } else {
          console.error('Error al obtener empleado:', response.statusText);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchEmpleado();
  }, [id]);

  const handleInputChange = (
    field: keyof Omit<Empleado, 'id' | 'nombre_rol'>,
    value: string
  ) => {
    setEmpleado({ ...empleado, [field]: value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://192.168.8.100:3000/api/usuarios/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(empleado),
        }
      );

      if (response.ok) {
        Alert.alert('Empleado actualizado exitosamente');
        router.back();
      } else {
        console.error('Error al actualizar empleado:', response.statusText);
        Alert.alert('Error al actualizar empleado');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      Alert.alert('Error en la solicitud');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{empleado.username}</Text>

      <RowTarget
        label="Nombre de usuario:"
        value={empleado.username}
        onChangeText={(text) => handleInputChange('username', text)}
      />
      <RowTarget
        label="Correo:"
        value={empleado.correo}
        onChangeText={(text) => handleInputChange('correo', text)}
      />
      <RowTarget
        label="Clave:"
        value={empleado.clave}
        onChangeText={(text) => handleInputChange('clave', text)}
      />

      <Button title="Guardar" onPress={handleSave} />
    </View>
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

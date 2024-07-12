import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { RowTarget } from '@/components/RowTarget';
import { Empleado } from '@/types/Empleado';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const [empleado, setEmpleado] = useState<Empleado>({} as Empleado);

  useEffect(() => {
    const fetchProveedores = async () => {
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

    fetchProveedores();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header__top}>
        <Text style={styles.header__title}>{empleado.username}</Text>
      </View>

      <View style={styles.header__body}>
        <RowTarget label="Username" text={empleado.username} key={1} />
        <RowTarget label="Correo" text={empleado.correo} key={2} />
        <RowTarget label="Clave" text={empleado.clave} key={3} />
        <RowTarget label="Rol" text={empleado.nombre_rol} key={4} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },

  scrollViewContent: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },

  header__top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  header__title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  header__body: {
    marginTop: 24,
  },
});

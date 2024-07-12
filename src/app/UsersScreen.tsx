import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ModalInfo } from '@/types/Modal';
import { Link } from 'expo-router';
import { SearchInput } from '@/components/SearchInput';
import { CardInfo } from '@/components/CardInfo';
import { Empleado } from '@/types/Empleado';

const modalInfo: ModalInfo[] = [
  {
    title: 'Ver Empleado',
    image: require('../assets/eye_icon.png'),
    goToPage: (id: string) => `/Empleados/VerEmpleado/${id}`,
  },
  {
    title: 'Editar Empleado',
    image: require('../assets/edit_icon.png'),
    goToPage: (id: string) => `/Empleados/EditEmpleado/${id}`,
  },
];

export default function UsersScreen() {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);

  useEffect(() => {
    const fetchEmpleados = async () => {
      try {
        const response = await fetch('http://192.168.8.100:3000/api/usuarios');
        if (response.ok) {
          const data = await response.json();
          setEmpleados(data);
        } else {
          console.error('Error al obtener proveedores:', response.statusText);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchEmpleados();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.hero}>
          <View style={styles.searchInputContainer}>
            <SearchInput />
          </View>

          <Link key="1" href="/AddUserScreen" asChild>
            <Pressable>
              <Image source={require('../assets/add_button.png')} />
            </Pressable>
          </Link>
        </View>

        {empleados.map((empleado) => (
          <CardInfo
            key={empleado.id}
            title={empleado.username}
            subtitle={`${empleado.nombre_rol}`}
            modalInfo={modalInfo}
            supplierId={empleado.id}
          />
        ))}

        {empleados.length === 0 && <Text>No hay empleados disponibles</Text>}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollViewContent: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },

  hero: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  searchInputContainer: {
    width: '80%',
  },
});

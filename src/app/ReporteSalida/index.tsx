import { View, Pressable, Image, StyleSheet, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { ModalInfo } from '@/types/Modal';
import { SearchInput } from '@/components/SearchInput';
import { CardInfo } from '@/components/CardInfo';
import { ReporteSalida } from '@/types/ReporteSalida';

const modalInfo: ModalInfo[] = [
  {
    title: 'Ver Empleado',
    image: require('../../assets/eye_icon.png'),
    goToPage: (id: string) => `/Empleados/VerEmpleado/${id}`,
  },
  {
    title: 'Editar Empleado',
    image: require('../../assets/edit_icon.png'),
    goToPage: (id: string) => `/Empleados/EditEmpleado/${id}`,
  },
];

export default function index() {
  const [reporteSalida, setReporteSalida] = useState<ReporteSalida[]>([]);

  useEffect(() => {
    const fetchReporteSalida = async () => {
      try {
        const response = await fetch(
          'http://192.168.8.100:3000/api/salidaProducto'
        );
        if (response.ok) {
          const data = await response.json();
          setReporteSalida(data);
        } else {
          console.error('Error al obtener proveedores:', response.statusText);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchReporteSalida();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.hero}>
          <View style={styles.searchInputContainer}>
            <SearchInput />
          </View>

          <Link key="1" href="/ProductosProveedor/AddProductoProveedor" asChild>
            <Pressable>
              <Image source={require('../../assets/add_button.png')} />
            </Pressable>
          </Link>
        </View>

        {reporteSalida.map((reporte, index) => (
          <CardInfo
            key={reporte.id}
            title={reporte.nombre_salida}
            subtitle={`${reporte.estado_salida}`}
            modalInfo={modalInfo}
            supplierId={reporte.id}
          />
        ))}
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

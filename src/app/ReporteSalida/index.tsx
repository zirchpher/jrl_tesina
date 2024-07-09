import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { ModalInfo } from '@/types/Modal';
import { SearchInput } from '@/components/SearchInput';
import { CardInfo } from '@/components/CardInfo';

const modalInfo: ModalInfo[] = [
  {
    title: 'Ver Productos de Salida',
    image: require('../../assets/eye_icon.png'),
    goToPage: '/ReporteSalida/ProductosReporteSalida',
  },
];

export default function index() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.hero}>
          <View style={styles.searchInputContainer}>
            <SearchInput />
          </View>

          <Link key="1" href="/ReporteSalida/AgregarProductoSalida" asChild>
            <Pressable>
              <Image source={require('../../assets/add_button.png')} />
            </Pressable>
          </Link>
        </View>

        <CardInfo
          title="Reporte Salida 01"
          subtitle="Enviado"
          modalInfo={modalInfo}
        />

        <CardInfo
          title="Reporte Salida 02"
          subtitle="Enviado"
          modalInfo={modalInfo}
        />
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

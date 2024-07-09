import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { RowTarget } from '@/components/RowTarget';
import { useState } from 'react';
import { PrimaryButton } from '@/components/PrimaryButton';

export default function EditarProductoSalida() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <View style={styles.header__top}>
            <Text style={styles.header__title}>Papas Lays Clásica</Text>
          </View>

          <View style={styles.header__body}>
            <Image source={require('../../assets/papaslays_gigant.png')} />
          </View>
        </View>

        <View style={styles.body}>
          <RowTarget />

          <PrimaryButton title="Guardar" />
        </View>
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

  header: {},

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
    alignItems: 'center',
  },

  body: {
    marginTop: 60,
  },

  body__row: {
    flexDirection: 'row',
    height: 24,
    borderBottomWidth: 1,
    borderColor: '#CFCECE',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  body__title: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  body__subtitle: {
    fontSize: 14,
    fontWeight: 'light',
    color: '#ADADAD',
  },
});

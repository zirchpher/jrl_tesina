import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { RowTarget } from '@/components/RowTarget';
import BottomSheet from '@/components/BottomSheet';
import { useState } from 'react';
import { ModalInfo } from '@/types/Modal';

const modalInfo: ModalInfo[] = [
  {
    title: 'Editar Producto',
    image: require('../assets/edit_icon.png'),
    goToPage: '/EditProductScreen',
  },
];

export default function ViewProductScreen() {
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
            <TouchableOpacity onPress={toggleModal}>
              <Image
                source={require('../assets/options_icon.png')}
                style={{ width: 32, height: 32 }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.header__body}>
            <Image source={require('../assets/papaslays_gigant.png')} />
          </View>
        </View>

        <View style={styles.body}>
          <RowTarget />

          <RowTarget />
        </View>
      </ScrollView>

      <BottomSheet
        isVisible={isModalVisible}
        onClose={toggleModal}
        modalInfo={modalInfo}
      />
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

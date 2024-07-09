import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { RowTarget } from '@/components/RowTarget';
import BottomSheet from '@/components/BottomSheet';
import { ModalInfo } from '@/types/Modal';

const modalInfo: ModalInfo[] = [
  {
    title: 'Editar Usuario',
    image: require('../assets/edit_icon.png'),
    goToPage: '/EditUserScreen',
  },
];

export default function ViewUserScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header__top}>
        <Text style={styles.header__title}>Jorge Romero</Text>
        <TouchableOpacity onPress={toggleModal}>
          <Image
            source={require('../assets/options_icon.png')}
            style={{ width: 32, height: 32 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.header__body}>
        <RowTarget />
        <RowTarget />
        <RowTarget />
        <RowTarget />
      </View>

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

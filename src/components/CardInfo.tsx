import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import { ModalInfo } from '@/types/Modal';

import BottomSheet from './BottomSheet';

interface CardInfoProps {
  title: string;
  subtitle: string;
  imageSource?: ImageSourcePropType;
  modalInfo: ModalInfo[];
}

export function CardInfo({
  title,
  subtitle,
  imageSource,
  modalInfo,
}: CardInfoProps) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <View style={styles.cardsContainer}>
        {imageSource && (
          <View style={styles.icon}>
            <Image source={imageSource} />
          </View>
        )}

        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <Image
            source={require('../assets/options_icon.png')}
            style={{ width: 32, height: 32 }}
          />
        </TouchableOpacity>
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
  cardsContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 24,
    height: 72,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },

  icon: {
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
  },

  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 14,
    fontWeight: '300',
  },

  button: {
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

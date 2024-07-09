import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { Link } from 'expo-router';
import { ModalInfo } from '@/types/Modal';

interface BottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
  modalInfo: ModalInfo[];
}

const BottomSheet = ({ isVisible, onClose, modalInfo }: BottomSheetProps) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.bottomModal}
    >
      <View style={styles.modalContent}>
        {modalInfo.map((item, index) => (
          <Link key={index} href={item.goToPage} asChild>
            <Pressable onPress={onClose}>
              <View style={styles.modalRow}>
                <Image source={item.image} />
                <Text style={styles.modalText}>{item.title}</Text>
              </View>
            </Pressable>
          </Link>
        ))}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  modalContent: {
    backgroundColor: 'white',
    height: 300,
    padding: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },

  modalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#ADADAD',
    marginBottom: 8,
  },

  modalText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#344757',
  },
});

export default BottomSheet;

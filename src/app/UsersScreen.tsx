import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import { ModalInfo } from '@/types/Modal';
import { Link } from 'expo-router';
import { SearchInput } from '@/components/SearchInput';
import { CardInfo } from '@/components/CardInfo';

const modalInfo: ModalInfo[] = [
  {
    title: 'Ver Usuario',
    image: require('../assets/eye_icon.png'),
    goToPage: '/ViewUserScreen',
  },
  {
    title: 'Editar Usuario',
    image: require('../assets/edit_icon.png'),
    goToPage: '/EditUserScreen',
  },
];

export default function UsersScreen() {
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

        <CardInfo
          title="Remmian"
          subtitle="Administrador"
          modalInfo={modalInfo}
        />

        <CardInfo
          title="Jorge Romero"
          subtitle="Jefe de almacén"
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

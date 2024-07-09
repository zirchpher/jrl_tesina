import { View, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { SearchInput } from '@/components/SearchInput';
import { CardInfo } from '@/components/CardInfo';
import { ModalInfo } from '@/types/Modal';
import { Link } from 'expo-router';

const modalInfo: ModalInfo[] = [
  {
    title: 'Ver producto',
    image: require('../assets/eye_icon.png'),
    goToPage: '/ViewProductScreen',
  },
  {
    title: 'Editar',
    image: require('../assets/edit_icon.png'),
    goToPage: '/EditProductScreen',
  },
  {
    title: 'Agregar Producto',
    image: require('../assets/add.png'),
    goToPage: '/AddProductScreen',
  },
];

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.hero}>
          <View style={styles.searchInputContainer}>
            <SearchInput />
          </View>

          <Link key="1" href="/AddProductScreen" asChild>
            <Pressable>
              <Image source={require('../assets/add_button.png')} />
            </Pressable>
          </Link>
        </View>

        <CardInfo
          title="Papas Lays Clásicas"
          subtitle="Papas"
          modalInfo={modalInfo}
          imageSource={require('../assets/papaslays.png')}
        />

        <CardInfo
          title="Papas Lays Clásicas"
          subtitle="Papas"
          modalInfo={modalInfo}
          imageSource={require('../assets/papaslays.png')}
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

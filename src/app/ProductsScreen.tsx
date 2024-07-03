import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { SearchInput } from '@/components/SearchInput';
import { CardInfo } from '@/components/CardInfo';
import { GoToIcon } from '@/components/GoToIcon';

const data = [
  {
    key: 'Cantidad',
    value: '70',
  },
  {
    key: 'Precio',
    value: '$1.00',
  },
  {
    key: 'Stock',
    value: '10',
  },
  {
    key: 'Marca',
    value: 'Lays',
  },
  {
    key: 'Fecha',
    value: '2022-01-01',
  },
  {
    key: 'Categoría',
    value: 'Papas',
  },
  {
    key: 'Proovedor',
    value: 'Rosa Fiorella Catilla Nuñez',
  },
];

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <SearchInput />

        <View style={styles.cardInfo}>
          <View style={styles.cardInfoHeader}>
            <Text style={styles.cardInfoTitle}>Papas Lays Clásicas</Text>
            <Image source={require('../assets/papaslays.png')} />
          </View>

          <CardInfo
            data={data}
            ctaSecondaryButton="/ProductDetailsScreen"
            borderWidth={0}
          />
        </View>
      </ScrollView>

      <GoToIcon
        goToScreen="/AddProductsScreen"
        imageSource={require('../assets/add.png')}
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

  cardInfoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  cardInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  cardInfo: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 16,
  },
});

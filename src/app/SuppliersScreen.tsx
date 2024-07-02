import { View, StyleSheet } from 'react-native';
import { SearchInput } from '@/components/SearchInput';
import { CardInfo } from '@/components/CardInfo';

const data = [
  {
    key: 'Proovedor',
    value: 'Juan Miguel Suarez Mendoza',
  },
  {
    key: 'Dirección',
    value: 'Av. 28 de Julio',
  },
  {
    key: 'Teléfono',
    value: '123-456-789',
  },
];

export default function SuppliersScreen() {
  return (
    <View style={styles.container}>
      <SearchInput />

      <CardInfo data={data} ctaSecondaryButton="/SupplierDetailsScreen" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
});

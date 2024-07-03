import { CardInfo } from '@/components/CardInfo';
import { GoToIcon } from '@/components/GoToIcon';
import { SearchInput } from '@/components/SearchInput';
import { View, StyleSheet, ScrollView } from 'react-native';

const data = [
  {
    key: 'Categoría',
    value: 'Normal',
  },
];

const data2 = [
  {
    key: 'Categoría',
    value: 'Mediano',
  },
];

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <SearchInput />

        <CardInfo data={data} ctaSecondaryButton="/CategoryDetailsScreen" />

        <CardInfo data={data2} ctaSecondaryButton="/CategoryDetailsScreen" />
      </ScrollView>

      <GoToIcon
        goToScreen="/AddCategoriesScreen"
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
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
});

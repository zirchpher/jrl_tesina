import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { AddCardRow } from '@/components/AddCardRow';
import { GoToIcon } from '@/components/GoToIcon';

export default function SupplierDetailsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <AddCardRow
          title="Proveedor"
          placeholder="Rosa Fiorella Catilla Nuñez"
          imageSource={require('../assets/person.png')}
        />
        <AddCardRow
          title="Dirección"
          placeholder="Av. 28 de Julio"
          imageSource={require('../assets/location.png')}
        />
      </ScrollView>

      <GoToIcon
        goToScreen="/SuppliersScreen"
        imageSource={require('../assets/confirm_icon.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});

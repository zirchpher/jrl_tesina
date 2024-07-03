import { View, StyleSheet, ScrollView } from 'react-native';
import { CardInfo } from '@/components/CardInfo';
import { GoToIcon } from '@/components/GoToIcon';
import { SearchInput } from '@/components/SearchInput';

const data = [
  {
    key: 'Usuario',
    value: 'Juan Perez',
  },
  {
    key: 'contraseña',
    value: '********',
  },
  {
    key: 'Rol',
    value: 'Administrador',
  },
];

export default function UsersScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <SearchInput />

        <CardInfo data={data} ctaSecondaryButton="/UserDatailScreen" />

        <CardInfo data={data} ctaSecondaryButton="/UserDatailScreen" />
      </ScrollView>

      <GoToIcon
        goToScreen="/AddUserScreen"
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

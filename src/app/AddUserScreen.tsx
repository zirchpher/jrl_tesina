import { AddCardRow } from '@/components/AddCardRow';
import { GoToIcon } from '@/components/GoToIcon';
import { View, StyleSheet, ScrollView } from 'react-native';

export default function AddUserScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <AddCardRow
          title="Usuario"
          placeholder="Agregar usuario"
          imageSource={require('../assets/person.png')}
        />

        <AddCardRow
          title="Contraseña"
          placeholder="********"
          imageSource={require('../assets/pass.png')}
        />

        <AddCardRow
          title="Rol"
          placeholder="Administrador"
          imageSource={require('../assets/person.png')}
        />
      </ScrollView>

      <GoToIcon
        goToScreen="/UsersScreen"
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

import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { AddCardRow } from '@/components/AddCardRow';
import { GoToIcon } from '@/components/GoToIcon';

export default function UserDatailScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <AddCardRow
          title="Usuario"
          placeholder="Juan Perez"
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

import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/notifications_logo.png')} />
      <Text style={styles.title}>No tienes notificaciones</Text>
      <Text style={styles.subtitle}>
        Vuelve a revisar luego para nuevas notificaciones
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 14,
  },
});

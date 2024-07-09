import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <Link style={styles.link} href="/LoginScreen" asChild>
        <Pressable>
          <Text style={styles.link__text}>IR A LA PANTALLA INICIAR SESIÓN</Text>
        </Pressable>
      </Link>

      <Link style={styles.link} href="/HomeScreen" asChild>
        <Pressable>
          <Text style={styles.link__text}>IR A LA PANTALLA HOME</Text>
        </Pressable>
      </Link>

      <Link style={styles.link} href="/NotificationScreen" asChild>
        <Pressable>
          <Text style={styles.link__text}>IR A LA PANTALLA NOTIFICACIONES</Text>
        </Pressable>
      </Link>

      <Link style={styles.link} href="/SuppliersScreen" asChild>
        <Pressable>
          <Text style={styles.link__text}>IR A LA PANTALLA PROVEEDORES</Text>
        </Pressable>
      </Link>

      <Link style={styles.link} href="/ProductsScreen" asChild>
        <Pressable>
          <Text style={styles.link__text}>IR A LA PANTALLA PRODUCTOS</Text>
        </Pressable>
      </Link>

      <Link style={styles.link} href="/UsersScreen" asChild>
        <Pressable>
          <Text style={styles.link__text}>IR A LA PANTALLA USUARIOS</Text>
        </Pressable>
      </Link>

      <Link style={styles.link} href="/ProductosProveedor" asChild>
        <Pressable>
          <Text style={styles.link__text}>
            IR A LA PANTALLA PRODUCTOS-PROVEEDOR
          </Text>
        </Pressable>
      </Link>

      <Link style={styles.link} href="/ReporteSalida" asChild>
        <Pressable>
          <Text style={styles.link__text}>
            IR A LA PANTALLA REPORTE SALIDA PRODUCTOS
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  link: {
    marginTop: 10,
    backgroundColor: '#0D4B80',
    padding: 10,
    borderRadius: 5,
  },

  link__text: {
    color: '#fff',
  },
});

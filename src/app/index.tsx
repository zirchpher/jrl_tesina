import { View, Text, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Text>Home</Text>

      <Image source={require('../assets/logo_header.png')} />

      <Link href="/LoginScreen" asChild>
        <Pressable>
          <Text>Go to Login</Text>
        </Pressable>
      </Link>

      <Link href="/HomeScreen" asChild>
        <Pressable>
          <Text>Go to Home</Text>
        </Pressable>
      </Link>

      <Link href="/NotificationScreen" asChild>
        <Pressable>
          <Text>IR A LA PANTALLA NOTIFICACIONES</Text>
        </Pressable>
      </Link>

      <Link href="/SuppliersScreen" asChild>
        <Pressable>
          <Text>IR A LA PANTALLA PROVEEDORES</Text>
        </Pressable>
      </Link>
    </View>
  );
}

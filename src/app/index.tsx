// import { View, Text, Pressable, StyleSheet } from 'react-native';
// import { Link } from 'expo-router';

// export default function Page() {
//   return (
//     <View style={styles.container}>
//       <Link style={styles.link} href="/LoginScreen" asChild>
//         <Pressable>
//           <Text style={styles.link__text}>IR A LA PANTALLA INICIAR SESIÓN</Text>
//         </Pressable>
//       </Link>

//       <Link style={styles.link} href="/HomeScreen" asChild>
//         <Pressable>
//           <Text style={styles.link__text}>IR A LA PANTALLA HOME</Text>
//         </Pressable>
//       </Link>

//       <Link style={styles.link} href="/NotificationScreen" asChild>
//         <Pressable>
//           <Text style={styles.link__text}>IR A LA PANTALLA NOTIFICACIONES</Text>
//         </Pressable>
//       </Link>

//       <Link style={styles.link} href="/SuppliersScreen" asChild>
//         <Pressable>
//           <Text style={styles.link__text}>IR A LA PANTALLA PROVEEDORES</Text>
//         </Pressable>
//       </Link>

//       <Link style={styles.link} href="/ProductsScreen" asChild>
//         <Pressable>
//           <Text style={styles.link__text}>IR A LA PANTALLA PRODUCTOS</Text>
//         </Pressable>
//       </Link>

//       <Link style={styles.link} href="/UsersScreen" asChild>
//         <Pressable>
//           <Text style={styles.link__text}>IR A LA PANTALLA USUARIOS</Text>
//         </Pressable>
//       </Link>

//       <Link style={styles.link} href="/ProductosProveedor" asChild>
//         <Pressable>
//           <Text style={styles.link__text}>
//             IR A LA PANTALLA PRODUCTOS-PROVEEDOR
//           </Text>
//         </Pressable>
//       </Link>

//       <Link style={styles.link} href="/ReporteSalida" asChild>
//         <Pressable>
//           <Text style={styles.link__text}>
//             IR A LA PANTALLA REPORTE SALIDA PRODUCTOS
//           </Text>
//         </Pressable>
//       </Link>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   link: {
//     marginTop: 10,
//     backgroundColor: '#0D4B80',
//     padding: 10,
//     borderRadius: 5,
//   },

//   link__text: {
//     color: '#fff',
//   },
// });

import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');

        if (token) {
          router.navigate('/HomeScreen');
        } else {
          router.navigate('/LoginScreen');
        }
      } catch (error) {
        console.error('Error retrieving user token:', error);
        // Handle error or navigate to a default screen
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* You can render any additional content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Page;

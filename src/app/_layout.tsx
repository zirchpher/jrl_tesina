import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Image, Pressable, View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          header: ({ navigation }) => (
            <View style={styles.headerContainer}>
              <View style={styles.leftside}>
                <Pressable onPress={() => navigation.openDrawer()}>
                  <Image
                    source={require('../assets/logo_header.png')}
                    style={styles.logo}
                  />
                </Pressable>
                <Text style={styles.headerText}>Texto Descriptivo</Text>
              </View>

              <View style={styles.rightside}>
                <Link href="/NotificationScreen" asChild>
                  <Pressable>
                    <Image
                      source={require('../assets/notification.png')}
                      style={styles.icon}
                    />
                  </Pressable>
                </Link>

                <Image
                  source={require('../assets/search.png')}
                  style={styles.icon}
                />
              </View>
            </View>
          ),
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Drawer.Screen
          name="HomeScreen"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="SuppliersScreen"
          options={{
            drawerLabel: 'Suppliers',
            title: 'Suppliers',
          }}
        />
        <Drawer.Screen
          name="ProductsScreen"
          options={{
            drawerLabel: 'Products',
            title: 'Products',
          }}
        />
        <Drawer.Screen
          name="UsersScreen"
          options={{
            drawerLabel: 'Users',
            title: 'Users',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 12,
    backgroundColor: '#0D4B80',
  },
  leftside: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  rightside: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

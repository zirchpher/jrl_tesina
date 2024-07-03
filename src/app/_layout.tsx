import { Link, Stack } from 'expo-router';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => (
          <View style={styles.headerContainer}>
            <View style={styles.leftside}>
              <Image
                source={require('../assets/logo_header.png')}
                style={styles.logo}
              />

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
    ></Stack>
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

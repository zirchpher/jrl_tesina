import { View, TextInput, StyleSheet, Image } from 'react-native';

export function SearchInput() {
  return (
    <View style={styles.inputSearchContainer}>
      <Image
        source={require('../assets/search_tenue.png')}
        style={styles.icon}
      />

      <TextInput placeholder="Search" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 56,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
    marginLeft: 16,
  },

  input: {
    fontSize: 16,
    width: '50%',
  },
});

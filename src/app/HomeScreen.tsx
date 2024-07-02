import { View, StyleSheet } from 'react-native';
import DashboardCard from '../components/DashboardCard';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <DashboardCard
          title="120"
          subtitle="Pedidos"
          imageSource={require('../assets/pedidos.png')}
        />

        <DashboardCard
          title="90"
          subtitle="Pre-Ventas"
          imageSource={require('../assets/preventas.png')}
        />

        <DashboardCard
          title="15"
          subtitle="Ventas - Almacén"
          imageSource={require('../assets/almacen.png')}
        />

        <DashboardCard
          title="$. 4320"
          subtitle="Soles ingresados"
          imageSource={require('../assets/ingreso_dinero.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    rowGap: 16,
  },
});

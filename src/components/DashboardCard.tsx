import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface DashboardCardProps {
  title: string;
  subtitle: string;
  imageSource: ImageSourcePropType;
}

export default function DashboardCard({
  title,
  subtitle,
  imageSource,
}: DashboardCardProps) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topSide}>
        <Text style={styles.cardTitle}>{title}</Text>

        <View style={styles.iconContainer}>
          <Image source={imageSource} style={styles.icon} />
        </View>
      </View>

      <View style={styles.bottomSide}>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#F1F2F4',
    borderRadius: 16,
    width: 156,
    height: 112,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: 24,
    height: 24.5,
    resizeMode: 'contain',
  },

  cardSubtitle: {
    fontSize: 16,
    fontWeight: '400',
  },

  topSide: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 17,
  },

  bottomSide: {
    alignItems: 'center',
    marginTop: 12,
  },
});

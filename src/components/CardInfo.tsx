import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SecondaryButton } from './SecondaryButton';
import { PrimaryButton } from './PrimaryButton';
import { Link } from 'expo-router';

interface DataItem {
  key: string;
  value: string;
}

interface CardInfoProps {
  data: DataItem[];
  ctaSecondaryButton?: string;
}

export function CardInfo({ data, ctaSecondaryButton }: CardInfoProps) {
  return (
    <View style={styles.cardInfoContainer}>
      <View style={styles.cardInfo}>
        {data.map((item, index) => (
          <View style={styles.card} key={index}>
            <Text style={styles.cardKey}>{item.key}</Text>
            <Text style={styles.cardValue}>{item.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.cardButtonContainer}>
        <View style={{ width: 140 }}>
          <Link href={ctaSecondaryButton} asChild>
            <Pressable>
              <SecondaryButton title="Editar" height={38} />
            </Pressable>
          </Link>
        </View>

        <View style={{ width: 140 }}>
          <PrimaryButton title="Eliminar" height={38} backgroundColor="red" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardInfoContainer: {
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#333333',
    marginTop: 24,
  },

  cardInfo: {
    marginBottom: 16,
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  cardKey: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  cardValue: {
    fontSize: 14,
    color: '#333333',
  },

  cardButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

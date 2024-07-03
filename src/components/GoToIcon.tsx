import {
  Pressable,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import { Link } from 'expo-router';

interface GoToIconProps {
  goToScreen: string;
  imageSource: ImageSourcePropType;
}

export function GoToIcon({ goToScreen, imageSource }: GoToIconProps) {
  return (
    <Link href={goToScreen} asChild>
      <Pressable>
        <Image source={imageSource} style={styles.GoToIcon} />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  GoToIcon: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
  },
});

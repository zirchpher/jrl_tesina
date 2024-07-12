import { ImageSourcePropType } from 'react-native';

export interface ModalInfo {
  title: string;
  image: ImageSourcePropType;
  goToPage: (id: string) => string;
}

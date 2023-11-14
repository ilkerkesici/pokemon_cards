import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PokemonCard} from 'types/models';

export type RootStackParamList = {
  SPLASH: undefined;
  HOME: undefined;
  CARD_DETAIL: {card: PokemonCard};
};

export type RootNavigation = NativeStackNavigationProp<RootStackParamList>;

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  SPLASH: undefined;
  HOME: undefined;
  ACCOUNT: undefined;
};

export type RootNavigation = NativeStackNavigationProp<RootStackParamList>;

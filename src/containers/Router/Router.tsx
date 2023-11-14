import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {RootStackParamList} from './Router.type';
import {Account, Home, Splash} from 'screens';

const MainNavigator = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: 'white',
  },
  animationTypeForReplace: 'push',
};

export default function Router() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator initialRouteName="SPLASH">
        <MainNavigator.Screen
          options={screenOptions}
          name="SPLASH"
          component={Splash}
        />
        <MainNavigator.Screen
          options={screenOptions}
          name="HOME"
          component={Home}
        />
        <MainNavigator.Screen
          options={screenOptions}
          name="ACCOUNT"
          component={Account}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes/routes.js';
import BottomTabs from './routes/bottomTabs.routes';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent barStyle="dark-content" />
      <BottomTabs />
    </NavigationContainer>
  );
}

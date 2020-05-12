import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Image} from 'react-native';

const Tab = createBottomTabNavigator();

import Home from '../pages/Home';
import Perfil from '../pages/Perfil';

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name == ' ') {
            return (
              <Image
                source={
                  focused
                    ? require('../assets/home-orange.png')
                    : require('../assets/home-orange-outline.png')
                }
                style={{
                  marginTop: 20,
                  width: 30,
                  height: 30,
                }}
              />
            );
          } else if (route.name == '  ') {
            return (
              <Image
                source={
                  focused
                    ? require('../assets/person-orange.png')
                    : require('../assets/person-orange-outline.png')
                }
                style={{
                  marginTop: 20,
                  width: 30,
                  height: 30,
                }}
              />
            );
          }
          // You can return any component that you like here!
        },
      })}
      tabBarOptions={{
        style: {backgroundColor: '#fff'},
      }}>
      <Tab.Screen key={0} name=" " component={Home} />
      <Tab.Screen key={1} name="  " component={Perfil} />
    </Tab.Navigator>
  );
}

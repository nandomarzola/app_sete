import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainStack from './MainStack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="MainStack"
          component={MainStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

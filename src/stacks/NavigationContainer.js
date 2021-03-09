import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ServerDrawer from './ServerDrawer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="ServerDrawer"
          component={ServerDrawer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

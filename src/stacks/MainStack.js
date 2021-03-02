import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Prelaod from '../pages/Preload';
import SignIn from '../pages/SignIn';
import ResetPassword from '../pages/ResetPassword';
import Register from '../pages/Register';
import MainDrawer from '../stacks/MainDrawer';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator 
      initialRouteName="Preload"
      screenOptions={{
        headerShown:false
      }}
    >
       <Stack.Screen name="Preload" component={Prelaod} />
        <Stack.Screen name="SignIn" component={SignIn} />
         <Stack.Screen name="ResetPassword" component={ResetPassword} />
         <Stack.Screen name="Register" component={Register} />
         <Stack.Screen name="MainDrawer" component={MainDrawer} />
    </Stack.Navigator>
)
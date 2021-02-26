import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Prelaod from '../pages/Preload';
import SignIn from '../pages/SignIn';
import About from '../pages/About';
import Subscription from '../pages/Subscription';
import TermsAndConditions from '../pages/TermsAndConditions';
import ListServers from '../pages/ListServers';
import ResetPassword from '../pages/ResetPassword';
import Register from '../pages/Register';

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
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Subscription" component={Subscription} />
        <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
        <Stack.Screen name="ListServers" component={ListServers} />
         <Stack.Screen name="ResetPassword" component={ResetPassword} />
         <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
)
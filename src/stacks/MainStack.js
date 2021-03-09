import React from 'react';

import {useDispatch} from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import {Text, TouchableOpacity} from 'react-native';

import {AppConfigActions} from '../redux/actions';


import Prelaod from '../pages/Preload';
import SignIn from '../pages/SignIn';
import ResetPassword from '../pages/ResetPassword';
import Register from '../pages/Register';
import ListServers from '../pages/ListServers';
import ForgotPasswordEmail from '../pages/ForgotPasswordEmail';
import ResetPasswordEmail from '../pages/ResetPasswordEmail';
import Dashboard from '../pages/Dashboard';
import MainDrawer from './MainDrawer';

const Stack = createStackNavigator();

export default () => {
  return (
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
         <Stack.Screen name="ListServers" component={ListServers} />
         <Stack.Screen name="ForgotPasswordEmail" component={ForgotPasswordEmail} />
         <Stack.Screen name="ResetPasswordEmail" component={ResetPasswordEmail} />
         <Stack.Screen name="MainDrawer" component={MainDrawer} />
    </Stack.Navigator>
  );
};

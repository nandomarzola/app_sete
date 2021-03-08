import React from 'react';

import {useDispatch} from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import {Text, TouchableOpacity} from 'react-native';

import {AppConfigActions} from '../redux/actions';


import Prelaod from '../pages/Preload';
import SignIn from '../pages/SignIn';
import ResetPassword from '../pages/ResetPassword';
import Register from '../pages/Register';

const Stack = createStackNavigator();

export default ({navigation}) => {
  const dispatch = useDispatch();

  const options = {
    headerLeft: () => (
      <TouchableOpacity onPress={navigation.openDrawer}>
        <Text style={{margin: 8}}>Esquerdo</Text>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        onPress={() => dispatch(AppConfigActions.toggleRightDrawer())}>
        <Text style={{margin: 8}}>Direito</Text>
      </TouchableOpacity>
    ),
  };

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
    </Stack.Navigator>
  );
};

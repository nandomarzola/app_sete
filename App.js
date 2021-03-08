import 'react-native-gesture-handler';

enableScreens();

import React from 'react';
import { enableScreens } from 'react-native-screens';

import { Provider } from 'react-redux';

import NavigationContainer from './src/stacks/NavigationContainer';

export default function App() {
  return (
    <NavigationContainer />
  );
}

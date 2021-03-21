import 'react-native-gesture-handler';
import 'localstorage-polyfill';

enableScreens();

import React from 'react';
import { enableScreens } from 'react-native-screens';

import { Provider } from 'react-redux';

import NavigationContainer from './src/stacks/NavigationContainer';
import {store} from './src/redux/configureStore';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}

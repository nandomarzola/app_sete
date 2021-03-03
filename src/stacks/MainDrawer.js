import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import TermsAndConditions from '../pages/TermsAndConditions';
import ListServers from '../pages/ListServers';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';

const Drawer = createDrawerNavigator();

export default () => {
  return(
    <Drawer.Navigator 
         edgeWidth={0}
         drawerContent={props => CustomDrawer(props)}
         >
        <Drawer.Screen name="ListServers" component={ListServers} />
        <Drawer.Screen name="TermsAndConditions" component={TermsAndConditions} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  )
}
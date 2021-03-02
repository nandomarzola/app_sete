import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import TermsAndConditions from '../pages/TermsAndConditions';

const Drawer = createDrawerNavigator();

export default () => {
  return(
    <Drawer.Navigator 
         edgeWidth={0}
         drawerContent={props => CustomDrawer(props)}
         >
       <Drawer.Screen name="TermsAndConditions" component={TermsAndConditions} />
    </Drawer.Navigator>
  )
}
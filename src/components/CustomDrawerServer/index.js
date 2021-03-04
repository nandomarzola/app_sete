import React, { useContext } from 'react';

import { DrawerNavigator } from 'react-navigation';

import {
  DrawerArea, 
  DrawerItem,
  DrawerHeader,
} from './styles';

export default ({ state, navigation}) => {

  const closeDrawer = () =>{
    navigation.closeDrawer();
  }
  const goTo =  (screenName) => {
      navigation.navigate(screenName)
  }

  return(
    <DrawerArea>

        <DrawerHeader>
            
        </DrawerHeader>

        <DrawerMenuArea>
        
        </DrawerMenuArea>
        
    </DrawerArea>
  );
}

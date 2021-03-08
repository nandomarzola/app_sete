import React, {useEffect} from 'react';

import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
 } from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';
import {useDispatch, useSelector, Provider} from 'react-redux';
import { DrawerActions } from '@react-navigation/native';

import { AppConfigActions } from '../redux/actions';

import MainDrawer from './MainDrawer';

const Drawer = createDrawerNavigator();

export default ({navigation}) => {

  const {rightDrawerState} = useSelector((state) => state.appConfig);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rightDrawerState === 'toggle') {
      navigation.dispatch(DrawerActions.openDrawer());
      dispatch(AppConfigActions.resetRightDrawer());
    }
  }, [rightDrawerState === 'toggle']);

  return(
    <Drawer.Navigator 
        drawerPosition="right"
         drawerContent={props => CustomDrawer(props)}
         >
        <Drawer.Screen name="MainDrawer" component={MainDrawer} />
    </Drawer.Navigator>
  )
}
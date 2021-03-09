import React, {useEffect} from 'react';

import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
 } from '@react-navigation/drawer';

import CustomDrawerServer from '../components/CustomDrawerServer';
import {useDispatch, useSelector} from 'react-redux';
import {DrawerActions} from '@react-navigation/native';

import { AppConfigActions } from '../redux/actions';

import MainStack from './MainStack';

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
        edgeWidth={0}
         drawerContent={props => CustomDrawerServer(props)}
         >
        <Drawer.Screen name="MainStack" component={MainStack} />
    </Drawer.Navigator>
  )
}
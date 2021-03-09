import React from 'react';

import {useDispatch} from 'react-redux';

import {
  Container,
  HeaderItems,
  OpenMenuButton
  } from './styles';

  import {AppConfigActions} from '../../redux/actions';

  import HamburguerIcon from '../../assets/icons/hamburguer.svg';
  import BellIcon from '../../assets/icons/bell.svg';

  import { useNavigation } from '@react-navigation/native';

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function iconHamburguer() {
    navigation.openDrawer()
  }

  function iconBell() {
    dispatch(AppConfigActions.toggleRightDrawer())
  }
  
  return(
    <Container>
          <HeaderItems>
              <OpenMenuButton>
                  <HamburguerIcon   width="24" heigth="24" fill="#A7DCFE" onPress ={iconHamburguer}/>
              </OpenMenuButton>
              <OpenMenuButton>
                  <BellIcon  width="24" heigth="24"  onPress={iconBell}/>
              </OpenMenuButton>
          </HeaderItems>
    </Container>
  )
}

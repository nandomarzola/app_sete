import React from 'react';

import {
  Container,
  HeaderItems,
  OpenMenuButton
  } from './styles';

  import HamburguerIcon from '../../assets/icons/hamburguer.svg';
  import BellIcon from '../../assets/icons/bell.svg';

  import { useNavigation } from '@react-navigation/native';

export default () => {

  const navigation = useNavigation();

  function iconHamburguer() {
    navigation.openDrawer()
  }

  function iconBell() {
    alert('open notifications');
  }
  
  return(
    <Container>
          <HeaderItems>
              <OpenMenuButton>
                  <HamburguerIcon   width="24" heigth="24" fill="#A7DCFE" onPress ={iconHamburguer}/>
              </OpenMenuButton>
              <BellIcon  width="24" heigth="24"  onPress={iconBell}/>
          </HeaderItems>
    </Container>
  )
}

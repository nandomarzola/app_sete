import React from 'react';

import {
  Container,
  HeaderItems
  } from './styles';

  import HamburguerIcon from '../../assets/icons/hamburguer.svg';
  import BellIcon from '../../assets/icons/bell.svg';

export default () => {

  function iconHamburguer() {
    alert('open menu');
  }

  function iconBell() {
    alert('open notifications');
  }
  return(
    <Container>
          <HeaderItems>
              <HamburguerIcon  width="24" heigth="24" fill="#A7DCFE" onPress={iconHamburguer}/>
              <BellIcon  width="24" heigth="24"  onPress={iconBell}/>
          </HeaderItems>
    </Container>
  )
}

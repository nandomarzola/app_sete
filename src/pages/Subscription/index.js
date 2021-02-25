import React from 'react';

import {
  Container,
  SubscriptionTitle,
  SubscriptionBox
  } from './styles';

import Ads from '../../components/Ads';
import Header from '../../components/Header';

export default() => {

return(
  <Container>
    <Header />
    <SubscriptionTitle>Subscription</SubscriptionTitle>
    <SubscriptionBox />
    <Ads route="TermsAndConditions" />
  </Container>
)

}
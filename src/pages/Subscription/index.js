import React from 'react';

import {
  Container,
  SubscriptionTitle,
  SubscriptionBox
  } from './styles';

import Ads from '../../components/Ads';

export default() => {

return(
  <Container>
    <SubscriptionTitle>Subscription</SubscriptionTitle>
    <SubscriptionBox />
    <Ads route="TermsAndConditions" />
  </Container>
)

}
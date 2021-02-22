import React from 'react';

import {
   Container,
   Logo,
   AboutTitle,
   AboutTextBottom
  } from './styles';

  import Ads from '../../components/Ads';

export default() => {

return(
  <Container>
        <Logo source={require('../../assets/images/logo-p.png')}
            resizeMode="contain"
        />
      <AboutTitle>Security Insights</AboutTitle>
      <AboutTitle  style={{fontWeight:'normal', fontSize:16}}>V 1.0.0.1</AboutTitle>
      <AboutTextBottom>{`
                By ShieldsUpⓇ
      Produced by CyberBitz LLC.
        `} 
        </AboutTextBottom>
      <Ads route={"Subscription"}/>
  </Container>
)

}
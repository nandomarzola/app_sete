import React from 'react';

import {
  Container,
  Title,
  BodyText,
  } from './styles';

import Ads from '../../components/Ads';

export default() => {

return(
  <Container>
    <Title>Terms and Conditions</Title>
    <BodyText>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type
     specimen.{"\n"}{"\n"}{"\n"}

    Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever since the
       1500s, when an unknown printer took a galley of type and scrambled it to make 
       a type specimen. {"\n"}{"\n"}{"\n"}
       
    ook.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
        ever since the 1500s, when an unknown printer took a galley of type and scrambled
         it to make a type specimen. {"\n"}{"\n"}{"\n"}
         
    .Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard dummy
           text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
    </BodyText>
    <Ads route="" />
  </Container>
)

}
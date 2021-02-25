import React from 'react';
import { 
  Container,
  ServerHeader,
  ServerBox,
  BoxTitle,
  TextTile,
  TextBoxDescription,
  ServerBoxItem
} from './styles';

import Ads from '../../components/Ads';
import Header from '../../components/Header';

export default() => {
return(
  <Container>
    <Header />
    <ServerHeader>Server</ServerHeader>
    <ServerBox>
        <ServerBoxItem>
            <BoxTitle>
                <TextTile>Server A</TextTile>
                <TextTile style={{
                  textAlign:'center', 
                  width:30,
                  height:30,
                  fontSize:15, 
                  backgroundColor:'#A7DCFE',
                  padding:5,
                  borderRadius:100,
                  color:'black'
                  }}>2</TextTile>
            </BoxTitle>
            <TextBoxDescription>192.168.0.1</TextBoxDescription>
        </ServerBoxItem>
    </ServerBox>
    <Ads route="About" />
  </Container>
)
}
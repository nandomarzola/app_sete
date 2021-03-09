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

export default() => {

return(
  <Container>
    <ServerHeader>Notifications</ServerHeader>
    <ServerBox>
        <ServerBoxItem>
            <BoxTitle>
                <TextTile>Server A</TextTile>
                <TextTile style={{
                  textAlign:'center', 
                  fontSize:15, 
                  padding:5,
                  color:'#FFFFFF'
                  }}>Now</TextTile>
            </BoxTitle>
            <TextBoxDescription>192.168.0.1</TextBoxDescription>
        </ServerBoxItem>
    </ServerBox>
  </Container>
)
}
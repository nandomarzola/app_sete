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

import { useNavigation } from '@react-navigation/native';

import Ads from '../../components/Ads';
import Header from '../../components/Header';

export default() => {

  const navigation = useNavigation();

  const viewDashboard = (screenName) => {
    navigation.navigate(screenName)
  }
return(
  <Container>
    <Header />
    <ServerHeader>Server</ServerHeader>
    <ServerBox>
        <ServerBoxItem onPress={() => viewDashboard('Dashboard')}>
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
    <Ads />
  </Container>
)
}
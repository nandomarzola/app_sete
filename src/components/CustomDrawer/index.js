import React, { useContext } from 'react';

import { Avatar } from 'react-native-paper';

import {
  DrawerArea, 
  DrawerItem,
  DrawerHeader,
  CloseMenuButton,
  UserInfo,
  UserLogo,
  UserName,
  UserShowProfile,
  BoxText,
  TitleLink,
  DrawerMenuArea
} from './styles';

import HamburguerIcon from '../../assets/icons/hamburguer.svg';
import ServerIcon from '../../assets/icons/servers.svg';
import TermsIcon from '../../assets/icons/terms.svg';
import PersonIcon from '../../assets/icons/person.svg';

export default ({ state, navigation}) => {

  const closeDrawer = () =>{
    navigation.closeDrawer();
  }
  const goTo =  (screenName) => {
      navigation.navigate(screenName)
  }

  return(
    <DrawerArea>

        <DrawerHeader>
            <CloseMenuButton>
                <HamburguerIcon   width="24" heigth="24" fill="#A7DCFE" onPress={closeDrawer}/>
            </CloseMenuButton>
            <UserInfo>
               <Avatar.Image size={70} style={{backgroundColor:'white'}} source={require('../../assets/images/Tony.png')} />
               <BoxText>
                  <UserName>Mason Bennet</UserName>
                  <UserShowProfile>Show profile</UserShowProfile>
                </BoxText>
            </UserInfo>
        </DrawerHeader>

        <DrawerMenuArea>
          <DrawerItem onPress={() => goTo('Home')}>
              <ServerIcon width="24"  height="24" fill="#A7DCFE"/>
              <TitleLink style={{color:'#A7DCFE'}}>Server</TitleLink>
          </DrawerItem>
          <DrawerItem onPress={() => goTo('Home')}>
              <TermsIcon width="24"  height="24" fill="#A7DCFE"/>
              <TitleLink>Terms and Conditions</TitleLink>
          </DrawerItem>
          <DrawerItem onPress={() => goTo('Home')}>
              <PersonIcon width="24"  height="24" fill="#A7DCFE"/>
              <TitleLink>About</TitleLink>
          </DrawerItem>
        </DrawerMenuArea>
        
    </DrawerArea>
  );
}

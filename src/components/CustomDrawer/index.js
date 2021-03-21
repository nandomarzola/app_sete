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
import SecurityandPolicy from '../../assets/icons/security.svg';

export default ({ state, navigation}) => {

  const closeDrawer = () =>{
    navigation.closeDrawer();
  }
  const goTo =  (screenName) => {
      navigation.navigate(screenName)
  }

  let userName = localStorage.getItem('app@userName');

  return(
    <DrawerArea>

        <DrawerHeader>
            <CloseMenuButton>
                <HamburguerIcon   width="24" heigth="24" fill="#A7DCFE" onPress={closeDrawer}/>
            </CloseMenuButton>
            <UserInfo>
               <Avatar.Image size={70} style={{backgroundColor:'white'}} source={require('../../assets/images/Tony.png')} />
               <BoxText>
                  <UserName>{userName}</UserName>
                  <UserShowProfile onPress={() => goTo('ResetPasswordEmail')}>Show profile</UserShowProfile>
                </BoxText>
            </UserInfo>
        </DrawerHeader>

        <DrawerMenuArea>
          <DrawerItem onPress={() => goTo('ListServers')}>
              <ServerIcon width="24"  height="24" fill="#A7DCFE"/>
              <TitleLink style={{color: state.index===0?  '#A7DCFE' : '#FFF'}}>Servers</TitleLink>
          </DrawerItem>
          <DrawerItem onPress={() => goTo('TermsAndConditions')}>
              <TermsIcon width="24"  height="24" fill="#A7DCFE"/>
              <TitleLink  style={{color: state.index===1?  '#A7DCFE' : '#FFF'}}>Terms and Conditions</TitleLink>
          </DrawerItem>
          <DrawerItem onPress={() => goTo('SecurityAndPolicy')}>
              <SecurityandPolicy width="24"  height="24" fill="#A7DCFE"/>
              <TitleLink  style={{color: state.index===2?  '#A7DCFE' : '#FFF'}}>Security and Policy</TitleLink>
          </DrawerItem>
          <DrawerItem onPress={() => goTo('About')}>
              <PersonIcon width="24"  height="24" fill="#A7DCFE"/>
              <TitleLink  style={{color: state.index===3?  '#A7DCFE' : '#FFF'}}>About</TitleLink>
          </DrawerItem>
        </DrawerMenuArea>
        
    </DrawerArea>
  );
}

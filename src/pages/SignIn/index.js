import React, { useState } from 'react';

import {
  Container,
  HeaderArea,
  HeaderLogo,
  HeaderTitle,
  HeaderText,
  InputArea,
  TextLabel,
  CustomButon,
  CustomButonText
} from './styles.js';

import { useNavigation } from '@react-navigation/native';

import Inputs from '../../components/Inputs';

export default() => {

  const navigation = useNavigation();
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const viewHome = () => {
      navigation.navigate('About')
  }

  return(
    <Container>
      <HeaderArea>
        <HeaderLogo  source={require('../../assets/images/logo-p.png')}
              resizeMode="center"
          />
        <HeaderTitle>Login</HeaderTitle>
        <HeaderText>Sing Up</HeaderText>
      </HeaderArea>
      <InputArea>
    
      <TextLabel>E-mail</TextLabel>
      <Inputs 
          placeholder="Digite seu email"
          value={emailField}
          label="E-mail"
          onChangeText={t=>setEmailField(t)}
        />

    <TextLabel>Password</TextLabel>
    <Inputs 
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={t=>setPasswordField(t)}
          password={true}
        />

      <CustomButon onPress={viewHome}>
          <CustomButonText>Sing In</CustomButonText>
      </CustomButon>

      </InputArea>
    </Container>
  )
}
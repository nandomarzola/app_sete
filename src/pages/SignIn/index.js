import React, { useState } from 'react';

import { Switch } from 'react-native';

import {
  Container,
  HeaderArea,
  HeaderLogo,
  HeaderTitle,
  HeaderText,
  InputArea,
  TextLabel,
  CustomButon,
  CustomButonText,
  SwitchRadioButton,
  StaySignedOn,
  ForgotPasswordText
} from './styles.js';

import { useNavigation } from '@react-navigation/native';

import Inputs from '../../components/Inputs';
import SingInGoogleButton from '../../components/SingInGoogleButton';

export default() => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const navigation = useNavigation();
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const viewHome = () => {
      navigation.navigate('ListServers')
  }

  const viewResetPassword = () => {
    navigation.navigate('ResetPassword')
  };

  const viewRegister = () => {
    navigation.navigate('Register')
  };

  return(
    <Container>
      <HeaderArea>
        <HeaderLogo  source={require('../../assets/images/logo-p.png')}
              resizeMode="center"
          />
        <HeaderTitle>Login</HeaderTitle>
        <HeaderText onPress={viewRegister}>Sing Up</HeaderText>
      </HeaderArea>
      <InputArea>
    
      <TextLabel>E-mail</TextLabel>
      <Inputs 
          placeholder="Type your e-mail"
          value={emailField}
          label="E-mail"
          onChangeText={t=>setEmailField(t)}
        />

    <TextLabel>Password</TextLabel>
    <Inputs 
          placeholder="Type your password"
          value={passwordField}
          onChangeText={t=>setPasswordField(t)}
          password={true}
        />

        <ForgotPasswordText onPress={viewResetPassword}>
            Forgot the password
        </ForgotPasswordText>

        <SwitchRadioButton>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
        <StaySignedOn>Stay signed in</StaySignedOn>
        </SwitchRadioButton>

      <CustomButon onPress={viewHome}>
          <CustomButonText>Sing In</CustomButonText>
      </CustomButon>

      <SingInGoogleButton />

      </InputArea>
    </Container>
  )
}
import React, { useState } from 'react';
import { 
  Container,
  RegisterArea,
  Logo,
  TitleRegister,
  InputArea,
  TextLabel,
  CustomButton,
  CustomButonText,
  SignInTexte
} from './styles';

import { useNavigation } from '@react-navigation/native';

import Inputs from '../../components/Inputs';
import Header from '../../components/Header';

export default() => {

  const navigation = useNavigation();

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [confirmPasswordField, setConfirmPasswordField] = useState('');

  const viewLogin = () => {
    navigation.navigate('SignIn');
  };

return(
  <Container>
    <RegisterArea>

        <Logo
            source={require('../../assets/images/logo-p.png')} 
            resizeMode="contain"
          />

        <TitleRegister>Register</TitleRegister>
        <SignInTexte onPress={viewLogin}>Sing In</SignInTexte>

        <InputArea>
          <TextLabel>Name</TextLabel>
          <Inputs 
            placeholder="Type your name"
            value={nameField}
            label="E-mail"
            onChangeText={t=>setNameField(t)}
          />

          <TextLabel>E-mail</TextLabel>
          <Inputs 
            placeholder="Type your e-mail"
            value={nameField}
            label="E-mail"
            onChangeText={t=>setEmailField(t)}
          />

      <TextLabel>Password</TextLabel>
          <Inputs 
          style={{marginBottom:0}}
          placeholder="Type your password"
          value={passwordField}
          onChangeText={t=>setPasswordField(t)}
          password={true}
        />

      <TextLabel>Confirm Password</TextLabel>
        <Inputs 
          placeholder="Confirm your password"
          value={confirmPasswordField}
          onChangeText={t=>setConfirmPasswordField(t)}
          password={true}
        />

          <CustomButton>
            <CustomButonText>Register</CustomButonText>
        </CustomButton>

        </InputArea>  
    </RegisterArea>
  </Container>
)
}
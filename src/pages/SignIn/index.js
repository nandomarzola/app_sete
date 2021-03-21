import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { successLogin } from '../../actions/user';

import { Switch, AsyncStorage } from 'react-native';

import { ScrollView } from 'react-native';

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

import userService from '../../services/user';

const SignIn = ({ successLogin }) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const navigation = useNavigation();

  const [redirectTo, setRedirectTo] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const signIn = async (emailField, passwordField) => {
  const user = await userService.signIn(emailField, passwordField);
    
  if (user.error) {
    alert(user.message);
  }else{

    const userToken = async() => {
      try{
        let token = await AsyncStorage.getItem('app@token');
        if(!token){
          alert('Usuário não autenticado');
        }else{
          successLogin();
          navigation.navigate('MainDrawer');
        }

      }catch(error){
        alert(error)
      }
    }

    userToken();
    
  }
 }

  const viewResetPassword = () => {
    navigation.navigate('ResetPassword')
  };

  const viewRegister = () => {
    navigation.navigate('Register')
  };

  return(
      <ScrollView style={{backgroundColor:'#13162A'}}>
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

            <CustomButon 
                onPress={() => signIn(emailField, passwordField)}
            >
                <CustomButonText>Sing In</CustomButonText>
            </CustomButon>

            <SingInGoogleButton />

            </InputArea>
          </Container>
      </ScrollView>
  )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  successLogin: () => dispatch(successLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
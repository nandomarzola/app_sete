import React, { useState } from 'react';
import { 
  Container,
  HeaderArea,
  HeaderLogo,
  HeaderTitle,
  HeaderText,
  HeaderTextTwo,
  ResetPasswordArea,
  ImageUser,
  NameUser,
  InputArea,
  TextLabel,
  CustomButton,
  CustomButonText
} from './styles';

import { useNavigation } from '@react-navigation/native';

import Inputs from '../../components/Inputs';

export default() => {

  const navigation = useNavigation();

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');

 const SingIn = () => {
    navigation.navigate('SignIn')
  };

return(
  <Container>
        <HeaderArea>
          <HeaderLogo style={{ marginLeft: '35%'}} source={require('../../assets/images/logo-p.png')}
            resizeMode="center"
            />
          <HeaderTitle>Forgot Password?</HeaderTitle>
          <HeaderText onPress={SingIn}>Sing In</HeaderText>
        
          <HeaderTextTwo>Enter your e-mail and we'll send you a link to reset your password.</HeaderTextTwo>
        </HeaderArea>
    <ResetPasswordArea>

        <InputArea>

          <TextLabel>E-mail</TextLabel>
          <Inputs 
            placeholder="Type your e-mail"
            value={nameField}
            label="E-mail"
            onChangeText={t=>setEmailField(t)}
          />

          <CustomButton>
            <CustomButonText>Send Email</CustomButonText>
        </CustomButton>

        </InputArea>  
    </ResetPasswordArea>
  </Container>
)
}
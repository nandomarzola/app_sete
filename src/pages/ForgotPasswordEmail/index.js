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

import Inputs from '../../components/Inputs';
import SignIn from '../SignIn';

export default() => {

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');

return(
  <Container>
        <HeaderArea>
          <HeaderLogo style={{ marginLeft: '35%'}} source={require('../../assets/images/logo-p.png')}
            resizeMode="center"
            />
          <HeaderTitle>Forgot Password?</HeaderTitle>
          <HeaderText onPress={SignIn}>Sing In</HeaderText>
        
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
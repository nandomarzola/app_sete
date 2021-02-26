import React, { useState } from 'react';
import { 
  Container,
  ResetPasswordArea,
  ImageUser,
  NameUser,
  InputArea,
  TextLabel,
  CustomButton,
  CustomButonText
} from './styles';

import Inputs from '../../components/Inputs';
import Header from '../../components/Header';

export default() => {

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');

return(
  <Container>
    <Header />
    <ResetPasswordArea>

        <ImageUser
            source={require('../../assets/images/user.png')} 
            resizeMode="contain"
          />

        <NameUser>Mason Bennet</NameUser>

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

          <CustomButton>
            <CustomButonText>Reset Password</CustomButonText>
        </CustomButton>

        </InputArea>  
    </ResetPasswordArea>
  </Container>
)
}
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

import { useNavigation } from '@react-navigation/native';

export default() => {

  const navigation = useNavigation();
  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');

  const passwordSaved = () => {
    alert('password saved')
  };

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
          <TextLabel>Current password</TextLabel>
          <Inputs 
            placeholder="Type your Current Password"
            value={nameField}
            label="E-mail"
            onChangeText={t=>setNameField(t)}
          />

          <TextLabel>New Password</TextLabel>
          <Inputs 
            placeholder="Type your new password"
            value={nameField}
            label="E-mail"
            onChangeText={t=>setEmailField(t)}
        />
        
          <TextLabel>Confirm New Password</TextLabel>
          <Inputs 
            placeholder="Confirm your new password"
            value={nameField}
            label="E-mail"
            onChangeText={t=>setEmailField(t)}
          />

          <CustomButton onPress={passwordSaved}>
            <CustomButonText>Reset Password</CustomButonText>
        </CustomButton>

        </InputArea>  
    </ResetPasswordArea>
  </Container>
)
}
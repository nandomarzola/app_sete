import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Container, AppLogo, LoadingIcon} from './styles';

export default() => {

  const navigation = useNavigation();

  useEffect(( ) => {
    const checkToken = async () => {

      const token = await null;

      if(token){
          //Cai aqui
      }else{
          navigation.navigate('SignIn')
      }
    }
checkToken();
}, []);

return(
  <Container>
    <AppLogo source={require('../../assets/images/logo-p.png')}
            resizeMode="contain"
         />
    <LoadingIcon size="large" color="#73B7E6" />
    <StatusBar backgroundColor="#13162A" color="black" />
  </Container>
)

}
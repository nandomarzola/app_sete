import React from 'react';

import {
  Button,
   TextButton
  } from './styles';

  import { useNavigation } from '@react-navigation/native';

export default(props) => {

  const navigation = useNavigation();

  const Route = () => {
    navigation.navigate(props.route)
}

return(
  <Button onPress={Route}>
        <TextButton>Ads</TextButton>
  </Button>
)

}
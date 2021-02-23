import React from 'react';

import {ButtonArea, Button} from './styles.js';
import GoogleIcon  from '../../assets/icons/google.svg';

export default () => {
  return(
    <ButtonArea>
      <GoogleIcon width="24" heigth="24" style={{marginLeft:10, marginRight:20}} />
      <Button>Sign in with Google</Button>
    </ButtonArea>
  )
}
import React from 'react';

import {InputArea, Input, Label } from './styles';

export default ({placeholder, value, onChangeText, password}) => {
  return(
    <InputArea>
      <Input 
        placeholder={placeholder}
        placeholderTextColor="#b2c1e4"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  )
}
import React from 'react';
import styled from 'styled-components/native';

export const ButtonArea = styled.TouchableOpacity`
  width:60%;
  height:45px;
  background-color:#FFF;
  flex-direction: row;
  align-items:center;
  margin:10px auto;
  border-radius: 100px;
`;

export const Button = styled.Text`
  font-size:14px;
  color:black;
  font-weight:bold;
`;
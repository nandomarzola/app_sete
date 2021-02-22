import React from 'react';
import styled from 'styled-components/native';

export const InputArea = styled.View`
  width:100%;
  height:45px;
  flex-direction: row;
  border:1px solid white;
  border-radius:10px;
  padding-left:15px;
  align-items:center;
  margin-bottom:10px;
`;

export const Input = styled.TextInput`
  flex:1;
  font-size:16px;
  color:white;
  margin-left:10px;
`;

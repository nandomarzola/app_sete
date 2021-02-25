import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex:1;
  background-color: #13162A;
`;

export const ServerHeader = styled.Text`
  font-size:22px;
  font-weight:bold;
  color:#FFF;
  margin:70px 0 0 20px;
`;

export const ServerBox = styled.ScrollView``;

export const ServerBoxItem = styled.View`
  width:90%;
  height:120px;
  margin:15px auto;
  border-radius:10px;
  background-color:#262E48;
  padding:20px;
`;

export const BoxTitle = styled.View`
  flex-direction:row;
  justify-content: space-between;
  align-items:center;
 
`;

export const TextTile = styled.Text`
  font-size:22px;
  font-weight:bold;
  color:#FFF;
`;

export const TextBoxDescription = styled.Text`
  font-size:14px;
  margin-top:20px;
  color:#FFF;
`;

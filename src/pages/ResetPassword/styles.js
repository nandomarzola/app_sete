import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex:1;
  background-color: #13162A;
  align-items:center;
  justify-content:center;
`;

export const ResetPasswordArea = styled.View`
  background-color: #13162A;
  justify-content:center;
  align-items:center
`;

export const ImageUser = styled.Image`
  width:130px;
  height:130px;
  padding:10px;
  overflow:hidden;
  border-radius:100px;
`;

export const InputArea = styled.View`
  padding:10px;
  width:90%;
`;

export const CustomButton = styled.TouchableOpacity`
  height:50px;
  padding:10px;
  width:60%;
  margin:0 auto;
  padding:0 30px 0 30px;
  background-color: #73B7E6;
  border-radius: 100px;
  justify-content: center;
  align-items:center;
  margin-top:20px;
`;

export const CustomButonText = styled.Text`
  font-size:14px;
  color:black;
`; 

export const NameUser = styled.Text`
  font-size:22px;
  font-weight:bold;
  margin-top:10px;
  color:#FFF;
`;

export const TextLabel = styled.Text`
  font-size:16px;
  margin-left:5px;
  margin-top:5px;
  color:white;
  margin-bottom:10px;
  margin-top:20px;
`;
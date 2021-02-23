import React from 'react';
import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex:1;
  justify-content:center;
  align-items:center;
  background-color:#13162A;
`;

export const HeaderArea = styled.View`
padding:10px;
`;

export const HeaderLogo = styled.Image`
  width:100px;
  height:100px;
`;

export const InputArea = styled.View`
  padding:10px;
  width:100%;
`;

export const HeaderTitle = styled.Text`
  font-size:22px;
  margin-top:20px;
  text-align:center;
  font-weight:bold;
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

export const CustomButon = styled.TouchableOpacity`
  height:45px;
  padding:10px;
  width:60%;
  margin:0 auto;
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

export const HeaderText = styled.Text`
  font-size:14px;
   text-align:center;
  margin-top:5px;
  text-decoration:underline;
  color:#73B7E6;
`;

export const ForgotPassword = styled.Text`
  font-size:14px;
   text-align:right;
  text-decoration:underline;
  color:#73B7E6;
`;

export const SwitchRadioButton = styled.View`
  margin:10px;
  flex-direction:row;
`;

export const StaySignedOn = styled.Text`
  font-size:16px;
   text-align:right;
  color:#73B7E6;
`;





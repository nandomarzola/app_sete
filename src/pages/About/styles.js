import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex:1;
  justify-content:center;
  align-items:center;
  background-color: #13162A;
`;

export const Logo = styled.Image`
  width:100px;
  height:100px;
  margin-bottom:25px;
`;

export const AboutTitle = styled.Text`
  font-size:20px;
  color:#FFF;
  font-weight:bold;
`; 

export const AboutTextBottom = styled.Text`
  font-size:12px;
  position:absolute;
  bottom:80px;
  color:#FFF;
`; 


import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex:1;
  justify-content:center;
  align-items:center;
  background-color: #13162A;
`;

export const AppLogo = styled.Image`
  width:300px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top:50px;
`;
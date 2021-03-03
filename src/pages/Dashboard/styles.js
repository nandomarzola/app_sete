import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex:1;
  background-color: #13162A;
`;

export const HeaderDashboard = styled.View`
  flex-direction:row;
  justify-content: space-between;
  margin:70px 0 20px 20px;
`;

export const AreaSelect = styled.SafeAreaView`
  background-color:#2b2d40;
  border-radius:10px;
  margin-right:20px;
  width:170px;
`;

export const HeaderSelectDay = styled.Picker`
  color:#FFF;
  margin:0 auto;
`;

export const HeaderTitle = styled.Text`
  font-size:22px;
  color:#FFF;
  font-weight:bold;
`;
import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex:1;
  background-color: #13162A;
`;

export const DashboardArea = styled.View`
  padding:20px;
`;

export const HeaderDashboard = styled.View`
  flex-direction:row;
  justify-content: space-between;
  margin:60px 0 20px 20px;
`;

export const AreaSelect = styled.SafeAreaView`
  background-color:#2b2d40;
  align-items:center;
  flex-direction:row;
  border-radius:10px;
  margin-right:20px;
  width:170px;
`;

export const AreaIcon = styled.View`
  margin-right:20px;
`;

export const AreaDays = styled.View`
  width:100%;
  margin:5px 0 0 0;
  height:60px;
`;

export const ScrollerItens = styled.View`
   flex-direction:row;
   align-items:center;
`;

export const LoginsAndErrorsArea = styled.View`
   flex-direction:row;
   width:88%;
   height:125px;
   margin:20px 20px 0 20px;
   justify-content:space-between;
`;

export const Logins = styled.View`
  width:47%;
  padding:20px;
  height:125px;
  background-color:#2b2d40;
  border-radius:15px;
`;

export const Errors = styled.View`
  width:47%;
  height:125px;
  background-color:#2b2d40;
  border-radius:15px;
  padding:20px;
`;

export const Title = styled.Text`
  font-size:18px;
  color:#FFF;
`;

export const Total = styled.Text`
  font-size:24px;
  color:#FFF;
  margin-top:35px;
  font-weight:bold;
`;

export const VisitorsArea = styled.View`
   width:88%;
   height:200px;
   margin:20px;
   padding:20px;
   border-radius:15px;
   background-color:#2b2d40;
`;

export const ListVisits = styled.View`
   flex-direction:row;
   justify-content:space-between;
   margin-bottom:10px;
`;

export const IpVisits = styled.Text`
  font-size:16px;
  color:#FFF;
  font-weight:bold;
`;

export const TotalVisits = styled.Text`
  font-size:15px;
  color:#FFF;
`;

export const Scroller = styled.ScrollView``;

export const HeaderTitle = styled.Text`
  font-size:22px;
  color:#FFF;
  font-weight:bold;
`;

export const ScrollItem = styled.TouchableOpacity`
  flex-direction:column;
  align-items:center;
  margin-left:25px;
`;

export const Day = styled.Text`
  font-size:18px;
  font-weight:bold;
  color:#FFF;
`;

export const Month = styled.Text`
  font-size:14px;
  color:#403d3d;
`;
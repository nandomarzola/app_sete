import styled from 'styled-components/native';

export const DrawerArea = styled.View`
  height:100%;
  background-color: #181C34;
  opacity:0.95;
`;

export const DrawerHeader = styled.View`
  height:30%;
  background-color: #181C34;
`;

export const UserInfo = styled.View`
  margin:50px auto;
  width:60%;
  flex-direction:row;
  justify-content:center;
`;

export const BoxText = styled.View`
  margin:10px 0 0 10px;
  flex-direction:column;
`;

export const DrawerMenuArea = styled.View`
  flex-direction:column;
  padding:20px;
`;

export const UserLogo = styled.Image`
  width:75px;
  height:75px;
  border-radius: 100px;
`;

export const DrawerItem = styled.TouchableOpacity`
  flex-direction:row;
  align-items:center;
  margin-bottom:35px;
`;

export const CloseMenuButton = styled.TouchableOpacity`
  margin:20px 0 0 20px;
`;

export const UserName = styled.Text`
  font-size:18px;
  font-weight:bold;
  color:#FFF;
`;

export const UserShowProfile = styled.Text`
  font-size:14px;
  color:#73B7E6;
`;

export const TitleLink = styled.Text`
  font-size:16px;
  margin-left:10px;
  color:#FFF;
  font-weight:bold;
`;
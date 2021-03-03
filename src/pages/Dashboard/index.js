import React, { useState } from 'react';

import { Picker} from '@react-native-community/picker';

import {
   Container,
   DashboardArea,
   HeaderDashboard,
   HeaderTitle,
   AreaIcon,
   AreaDays,
   AreaSelect,
   Scroller,
   ScrollItem,
   ScrollerItens,
   Day,
   Month,
   LoginsAndErrorsArea,
   Logins,
   Errors,
   Title,
   Total,
   VisitorsArea,
   ListVisits,
   IpVisits,
   TotalVisits
  } from './styles';

  import Ads from '../../components/Ads';
  import Header from '../../components/Header';

  import IconDrop from '../../assets/icons/expand.svg';

export default() => {

  const [selectDay, setSelectDay] = useState('');

return(
  <Container>
         <Header />
          <DashboardArea>

            <HeaderDashboard>
              <HeaderTitle>Dashboad</HeaderTitle>

              <AreaSelect>
                <Picker 
                  selectedValue={selectDay}
                  style={{height:25, width:150, color:"#FFFFFF", backgroundColor:'transparent'}}
                  dropdownIcon={false}
                  onValueChange={(itemValue, itemIndex) => setSelectDay(itemValue)}
                >
                  <Picker.Item label="Today" value="1" />
                  <Picker.Item label="A day ago" value="2" />
                  <Picker.Item label="Two days ago" value="3" />
                  <Picker.Item label="Three days ago" value="4" />
                  <Picker.Item label="Four days ago" value="5" />
                  <Picker.Item label="Five days ago" value="6" />
                </Picker>
                  <AreaIcon>
                    <IconDrop width="20" height="20" fill="#FFF"  />
                  </AreaIcon>
              </AreaSelect>

          </HeaderDashboard>

          <AreaDays>
              <Scroller
                horizontal={true}
                showsHorizontalScrollIndicator={false} 
                style={{marginHorizontal:15}} >

                <ScrollerItens>

                  <ScrollItem  style={{marginLeft:0}}>
                    <Day>1</Day>
                    <Month>July</Month>  
                  </ScrollItem>

                  <ScrollItem>
                    <Day>2</Day>
                    <Month>July</Month>  
                  </ScrollItem> 

                  <ScrollItem>
                    <Day>3</Day>
                    <Month>July</Month>  
                  </ScrollItem> 

                  <ScrollItem>
                    <Day  style={{fontSize:25, color:'#A7DCFE'}}>4</Day>
                    <Month  style={{fontSize:16, fontWeight:'bold', color:'#A7DCFE'}}>July</Month>  
                  </ScrollItem> 

                  <ScrollItem>
                    <Day>5</Day>
                    <Month>July</Month>  
                  </ScrollItem> 

                  <ScrollItem>
                    <Day>6</Day>
                    <Month>July</Month>  
                  </ScrollItem> 

                  <ScrollItem>
                    <Day>7</Day>
                    <Month>July</Month>  
                  </ScrollItem> 

                  <ScrollItem>
                    <Day>8</Day>
                    <Month>July</Month>  
                  </ScrollItem> 

                </ScrollerItens>

              </Scroller>
            </AreaDays>

            <LoginsAndErrorsArea>
                    <Logins>
                        <Title>Logins</Title>
                        <Total>50</Total>
                    </Logins>
                    <Errors>
                        <Title>Errors</Title>
                        <Total>7100</Total>
                    </Errors>
            </LoginsAndErrorsArea>

            <VisitorsArea>

               <Title style={{marginBottom:15}}>Top visits</Title>

               <ListVisits>
                  <IpVisits>192.168.0.1</IpVisits>
                  <TotalVisits>250.242 visits</TotalVisits>
               </ListVisits>

               <ListVisits>
                  <IpVisits>192.168.0.1</IpVisits>
                  <TotalVisits>20.467 visits</TotalVisits>
               </ListVisits>

               <ListVisits>
                  <IpVisits>192.168.0.1</IpVisits>
                  <TotalVisits>10.451 visits</TotalVisits>
               </ListVisits>

               <ListVisits>
                  <IpVisits>192.168.0.1</IpVisits>
                  <TotalVisits>345.125 visits</TotalVisits>
               </ListVisits>

            </VisitorsArea>

          </DashboardArea>
         <Ads />
  </Container>
)
}

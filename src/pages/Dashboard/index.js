import React, { useState } from 'react';

import {
   Container,
   HeaderDashboard,
   HeaderTitle,
   HeaderSelectDay,
   AreaSelect
  } from './styles';

  import Ads from '../../components/Ads';
  import Header from '../../components/Header';

export default() => {

  const [selectDay, setSelectDay] = useState('');

return(
  <Container>
         <Header />
         <HeaderDashboard>
            <HeaderTitle>Dashboad</HeaderTitle>

            <AreaSelect>
              <HeaderSelectDay
                selectedValue={selectDay}
                useNativeAndroidPickerStyle={false}
                style={{ height: 27, width: 150}}
                Icon={() => (
                  <IconContainer>
                    <Entypo
                      name="chevron-down"
                      color={colors.PRIMARY_BLUE}
                      size={20}
                    />
                  </IconContainer>
                )}
                onValueChange={(itemValue, itemIndex) => setSelectDay(itemValue)}
              >
                  <HeaderSelectDay.Item label="Today" value="1"/>
              </HeaderSelectDay>
            </AreaSelect>

         </HeaderDashboard>
         
         <Ads />
  </Container>
)
}
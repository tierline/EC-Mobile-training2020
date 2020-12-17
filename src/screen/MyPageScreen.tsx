import React from 'react';
import {Container, Content} from 'native-base';
import NavBarBottom from '../components/nav/NavBarBottom';
import OrderList from '../components/list/OrderList';

const MyPageScreen = () => {
  return (
    <Container>
      {/* <Content>
        <Body>
          <Text>登録情報</Text>
        </Body>
      </Content> */}
      <Content>
        <OrderList />
      </Content>
      <NavBarBottom />
    </Container>
  );
};
export default MyPageScreen;

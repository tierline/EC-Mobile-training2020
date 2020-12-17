import React from 'react';
import {Body, Container, Content, Text} from 'native-base';
import NavBarBottom from '../components/nav/NavBarBottom';

const MyPageScreen = () => {
  return (
    <Container>
      <Content>
        <Body>
          <Text>登録情報</Text>
        </Body>
      </Content>
      <NavBarBottom />
    </Container>
  );
};
export default MyPageScreen;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Body} from 'native-base';
import NavBarBottom from '../components/nav/NavBarBottom';
import OrderList from '../components/list/OrderList';

const MyPageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemList}>
        <Body>
          <Text>注文履歴</Text>
        </Body>
        <OrderList />
      </View>
      <NavBarBottom />
    </View>
    // <Container>
    //   {/* <Content>
    //     <Body>
    //       <Text>登録情報</Text>
    //     </Body>
    //   </Content> */}
    //   <Content>
    //     <OrderList />
    //   </Content>
    //   <NavBarBottom />
    // </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemList: {
    flex: 8,
  },
});
export default MyPageScreen;

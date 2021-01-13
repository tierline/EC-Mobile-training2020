import React from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Alert, StyleSheet } from 'react-native';
import Api from '../../api/Api';
import Icon from 'react-native-vector-icons/FontAwesome';

const NavBarBottom = () => {
  const navigation = useNavigation();

  const logoutConfirmation = () => {
    Alert.alert('ログアウトしますか？', '', [
      { text: 'ログアウトする', onPress: () => logout() },
      { text: 'やめる', onPress: () => console.log() },
    ]);
  };
  const logout = () => {
    Api.logout('/member/logout');
    Alert.alert('ログアウトしました');
    navigation.navigate('Login');
  };

  return (
    <Footer>
      <FooterTab>
        <Button dark onPress={() => navigation.navigate('Home')}>
          <Text>ホーム</Text>
          <Icon name="home" size={30} style={styles.icon} />
        </Button>
        <Button dark onPress={() => navigation.navigate('Cart')}>
          <Text>カート</Text>
          <Icon name="shopping-cart" size={30} style={styles.icon} />
        </Button>
        <Button dark onPress={() => navigation.navigate('MyPage')}>
          <Text>購入履歴</Text>
          <Icon name="history" size={30} style={styles.icon} />
        </Button>
        <Button dark onPress={() => logoutConfirmation()}>
          <Text>ログアウト</Text>
          <Icon name="share" size={30} style={styles.icon} />
        </Button>
      </FooterTab>
    </Footer>
  );
};
const styles = StyleSheet.create({
  icon: {
    color: 'white',
  },
});
export default NavBarBottom;

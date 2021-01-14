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
      <FooterTab style={styles.footer}>
        <Button onPress={() => navigation.navigate('Home')}>
          <Text style={styles.text}>ホーム</Text>
          <Icon name="home" size={30} style={styles.icon} />
        </Button>
        <Button onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.text}>カート</Text>
          <Icon name="shopping-cart" size={30} style={styles.icon} />
        </Button>
        <Button onPress={() => navigation.navigate('MyPage')}>
          <Text style={styles.text}>購入履歴</Text>
          <Icon name="history" size={30} style={styles.icon} />
        </Button>
        <Button onPress={() => logoutConfirmation()}>
          <Text style={styles.text}>ログアウト</Text>
          <Icon name="share" size={30} style={styles.icon} />
        </Button>
      </FooterTab>
    </Footer>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#dc5f36',
  },
  text: {
    color: '#fff',
  },
  icon: {
    color: '#fff',
  },
});

export default NavBarBottom;

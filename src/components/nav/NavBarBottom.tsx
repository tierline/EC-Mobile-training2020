import React from 'react';
import { Footer, FooterTab, Button } from 'native-base';
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
      <FooterTab style={{ backgroundColor: 'black' }}>
        <Button onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={20} style={styles.icon} />
        </Button>
        <Button onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-cart" size={20} style={styles.icon} />
        </Button>
        <Button onPress={() => navigation.navigate('MyPage')}>
          <Icon name="history" size={20} style={styles.icon} />
        </Button>
        <Button onPress={() => logoutConfirmation()}>
          <Icon name="share" size={20} style={styles.icon} />
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

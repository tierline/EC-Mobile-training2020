import React from 'react';
import { Container, Content, H1 } from 'native-base';
import AuthenticationForm from '../../components/form/AuthenticationForm';
import { StyleSheet } from 'react-native';

/**
 * 会員ログイン画面
 */
const LoginScreen = () => {
  return (
    <Container>
      <H1 style={styles.h1}>T＆Kスーパーショップ</H1>
      <Content style={styles.content}>
        <AuthenticationForm
          apiUrl={'/api/member/login'}
          errorMessage={'ログインに失敗しました。'}
          description={'メールアドレス、パスワードを確認してください。'}
          buttonText1={'ログイン'}
          buttonText2={'新規会員登録へ'}
          navDestination={'MemberApplicate'}
        />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  h1: {
    paddingTop: 15,
    paddingLeft: 15,
  },
  content: {
    paddingTop: 50,
  },
});

export default LoginScreen;
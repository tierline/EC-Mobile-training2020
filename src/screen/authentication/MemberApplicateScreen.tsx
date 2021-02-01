import React from 'react';
import { Container, Content, H1 } from 'native-base';
import { StyleSheet } from 'react-native';
import AuthenticationForm from '../../components/form/AuthenticationForm';

/**
 * 新規会員登録画面
 */
const ApplicateScreen = () => {
  return (
    <Container>
      <H1 style={styles.h1}>T＆Kスーパーショップ</H1>
      <Content style={styles.content}>
        <AuthenticationForm
          apiUrl={'/api/member/applicate'}
          errorMessage={'新規登録に失敗しました。'}
          description={'既に登録されたメールアドレスです。'}
          buttonText1={'新規会員登録'}
          buttonText2={'戻る'}
          navDestination={'Login'}
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
    marginTop: 50,
  },
});

export default ApplicateScreen;
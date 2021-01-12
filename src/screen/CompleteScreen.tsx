import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Container, Content, Text, H2, Body, H3 } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const CompleteScreen = ({ route }: RouteForOrderId) => {
  const navigation = useNavigation();
  const orderId = route.params.orderId;

  return (
    <Container>
      <Content>
        <Content style={styles.text}>
          <Body>
            <H2>ご注文ありがとうございました。</H2>
          </Body>
        </Content>
        <Content style={styles.text}>
          <Body>
            <H3>注文番号:{orderId}</H3>
          </Body>
        </Content>
        <Content style={styles.button}>
          <Body>
            <Button onPress={() => navigation.navigate('Home')}>
              <Text>ホームに戻る</Text>
            </Button>
          </Body>
        </Content>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: '20%',
  },
  button: {
    marginTop: '30%',
  },
});

export default CompleteScreen;

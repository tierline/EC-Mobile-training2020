import React from 'react';
import {Image} from 'react-native';
import {
  Container,
  Left,
  Button,
  Icon,
  Body,
  Text,
  Content,
  CardItem,
  Card,
  Right,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import NavBarBottom from '../components/NavBarBottom';
import BackButton from '../components/BackButton';

const DetailsScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>商品名</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                style={{height: 300, width: '100%', flex: 1}}
                source={{
                  uri:
                    'https://i.gzn.jp/img/2020/06/05/instagram-threw-embedding-api-copyright/00.jpg',
                }}
              />
              <Text>商品説明</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button rounded danger>
                <Icon name="logo-github" />
                <Text>カートに入れる</Text>
                
              </Button>
            </Left>
            <Right>
              <BackButton/>
            </Right>
          </CardItem>
        </Card>
      </Content>
      <NavBarBottom />
    </Container>
  );
};

export default DetailsScreen;

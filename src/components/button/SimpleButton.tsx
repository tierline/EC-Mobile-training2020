import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const SimpleButton = (props: any) => {
  const { text, onPress } = props;

  return (
    <Button rounded block onPress={onPress} style={styles.button}>
      <Text>{text}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#dc5f36',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default SimpleButton;

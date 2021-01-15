import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const LargeButton = (props: any) => {
  const { text, onPress } = props;

  return (
    <Button style={styles.button} full large onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#70372c',
  },
  text: {
    fontSize: 18,
  },
});

export default LargeButton;

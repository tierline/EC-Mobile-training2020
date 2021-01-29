import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

/**
 * ボタンの共通コンポーネント
 *
 * @param props
 */
const SimpleButton = (props: PropForButton) => {
  const { text, onPress } = props;

  return (
    <Button rounded block onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#70372c',
  },
  text: {
    fontSize: 18,
  },
});

export default SimpleButton;

import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

/**
 * ボタン（大）の共通コンポーネント
 *
 * @param props
 */
const LargeButton = (props: PropForButton) => {
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

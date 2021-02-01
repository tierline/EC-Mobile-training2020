import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * アイコンボタン（小）の共通コンポーネント
 *
 * @param props
 */
const SmallIconButton = (props: PropForIconButton) => {
  const { text, onPress, iconName } = props;

  return (
    <Button style={styles.button} onPress={onPress}>
      <Icon style={styles.icon} name={iconName} size={20} />
      <Text style={styles.text}>{text}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#70372c',
  },
  text: {
    fontSize: 17,
    color: '#fff',
  },
  icon: {
    color: '#fff',
    marginLeft: 10,
  },
});

export default SmallIconButton;

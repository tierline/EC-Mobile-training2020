import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const SmallIconButton = (props: PropForIconButton) => {
  const { text, onPress, iconName } = props;

  return (
    <Button rounded style={styles.button} onPress={onPress}>
      <Icon style={styles.icon} name={iconName} size={20} />
      <Text style={styles.text}>{text}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    // TOREVIEW : rounded か radius か
    // borderRadius: 10,
    padding: 5,
    backgroundColor: '#70372c',
  },
  text: {
    fontSize: 17,
    color: '#fff',
  },
  icon: {
    color: '#fff',
    margin: 10,
  },
});

export default SmallIconButton;

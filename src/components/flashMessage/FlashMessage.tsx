import {StyleSheet} from 'react-native';
import {showMessage} from 'react-native-flash-message';

export const flashMessage = (
  message: string,
  description: string,
  duration: number,
  backgroundColor: string,
) => {
  showMessage({
    message: message,
    description: description,
    duration: duration,
    style: styles.card,
    titleStyle: styles.message,
    textStyle: styles.description,
    backgroundColor: backgroundColor,
  });
};

const styles = StyleSheet.create({
  card: {
    height: 100,
  },
  message: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  description: {
    fontWeight: 'bold',
  },
});

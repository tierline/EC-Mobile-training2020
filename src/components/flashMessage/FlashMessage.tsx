import { StyleSheet } from 'react-native';
import { showMessage } from 'react-native-flash-message';

// cartFlashMessage... etc...
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
    animationDuration: 100,
    style: styles.card,
    titleStyle: styles.message,
    textStyle: styles.description,
    backgroundColor: backgroundColor,
  });
};

const styles = StyleSheet.create({
  card: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontWeight: 'bold',
  },
  description: {
    fontWeight: 'bold',
  },
});

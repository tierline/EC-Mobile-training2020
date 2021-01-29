import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Item, Text, View } from 'native-base';
import { Controller } from 'react-hook-form';

const SimpleInput = (props: PropForSimpleInput) => {
  const {
    errors,
    errorType,
    control,
    name,
    rules,
    secureTextEntry,
    defaultValue,
    placeholder,
  } = props;

  return (
    <View style={styles.view}>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Item>
            <Input
              secureTextEntry={secureTextEntry}
              onBlur={onBlur}
              placeholder={placeholder}
              onChangeText={(textValue) => onChange(textValue)}
              value={value}
            />
          </Item>
        )}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
      />
      {errorType.map((v) => {
        return (
          errors[name] &&
          errors[name].type === v.type && (
            <Text style={styles.error}>{v.errorMessage}</Text>
          )
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
  },
  error: {
    color: 'red',
    marginLeft: 20,
  },
});

export default SimpleInput;

import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Item, Text, View } from 'native-base';
import { Controller } from 'react-hook-form';

const FormComponent = (props: any) => {
  const {
    label,
    errors,
    errorMessage,
    control,
    name,
    rules,
    secureTextEntry,
    defaultValue,
    placeholder,
  } = props;

  return (
    <View style={styles.view}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <Item>
            <Input
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          </Item>
        )}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
      />
      {errors[name] && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginLeft: 20,
    marginRight: 20,
  },
  label: {
    marginLeft: 5,
  },
  error: {
    color: 'red',
    marginLeft: 20,
  },
});

export default FormComponent;

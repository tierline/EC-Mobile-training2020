import React from 'react';
import { Input, Item } from 'native-base';
import { Controller } from 'react-hook-form';

const FormController = (props: any) => {
  const {
    control,
    name,
    rules,
    secureTextEntry,
    defaultValue,
    placeholder,
  } = props;

  return (
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
  );
};
export default FormController;

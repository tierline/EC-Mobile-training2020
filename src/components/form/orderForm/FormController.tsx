import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

type OrderFormProp = {
  name: string;
  maxLength: number;
};
const FormController = (prop: OrderFormProp) => {
  const { control, errors } = useForm();
  const { name, maxLength } = prop;
  return (
    <View>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(inputValue) => onChange(inputValue)}
            value={value}
          />
        )}
        defaultValue=""
        name={name}
        rules={{
          required: true,
          maxLength: 10,
        }}
      />
      {errors.lastName && errors.name.type === 'required' && (
        <Text style={styles.error}>姓は必須です。</Text>
      )}
      {errors.lastName && errors.name.type === 'maxLength' && (
        <Text style={styles.error}>姓は６文字以内で入力してください。</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '80%',
    fontSize: 20,
    margin: '4%',
  },
  error: {
    color: 'red',
  },
});

export default FormController;

/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {Text, View} from 'native-base';
import {useForm, Controller} from 'react-hook-form';
import {StyleSheet, TextInput} from 'react-native';
import {Label} from '../OrderForm';

const InputFirstName = () => {
  const {control, errors} = useForm();
  const label = useContext(Label);

  return (
    <View style={styles.view}>
      <View style={{flex: 0.2, alignItems: 'flex-end'}}>
        <Text>{label}</Text>
      </View>
      <View style={{flex: 0.8}}>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={styles.textInput}
              placeholder=""
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="name"
          rules={{
            required: true,
            maxLength: 6,
          }}
          defaultValue=""
        />
        {errors.name && errors.name.type === 'required' && (
          <Text style={styles.errorMeesage}>姓は必須です。</Text>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
          <Text style={styles.errorMeesage}>
            姓は6文字以内で入力してください。
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '80%',
    fontSize: 20,
    margin: '4%',
  },
  errorMeesage: {
    color: 'black',
  },
});

export default InputFirstName;

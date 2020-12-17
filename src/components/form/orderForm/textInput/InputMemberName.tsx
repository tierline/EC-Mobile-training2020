/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {Text, View} from 'native-base';
import {useForm, Controller} from 'react-hook-form';
import {StyleSheet, TextInput} from 'react-native';
import {FormContext} from '../OrderForm';

const InputMemberName = () => {
  const {control, errors} = useForm();
  const formContext = useContext(FormContext);
  return (
    <View style={styles.view}>
      <View style={{flex: 0.2, alignItems: 'flex-end'}}>
        <Text>名前</Text>
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
          name={formContext.label}
          rules={{
            required: true,
            maxLength: 10,
          }}
          defaultValue=""
        />
        {errors.name && errors.name.type === 'required' && (
          <Text style={{color: 'red'}}>Nameは必須です。</Text>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
          <Text style={{color: 'red'}}>
            Nameは10文字以内で入力してください。
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
});

export default InputMemberName;

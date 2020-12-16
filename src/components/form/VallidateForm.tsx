// import React, {useState} from 'react';
// import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
// import {useForm, Controller} from 'react-hook-form';

// const VallidateForm = () => {
<Text style={styles.label}>メールアドレス</Text>
      {errors.email && <Text style={styles.error}>正しく入力してください</Text>}
      <Controller
        control={control}
        render={({onChange, value}) => (
          <TextInput
            style={styles.input}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="email"
        rules={{
          required: true,
          pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        }}
        defaultValue="abc@example.com"
      />

      <Text style={styles.label}>パスワード</Text>

      {errors.password && (
        <Text style={styles.error}>文字数が少なすぎます</Text>
      )}
      <Controller
        control={control}
        render={({onChange, value}) => (
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="password"
        rules={{required: true, minLength: 4}}
        defaultValue="1234"
      />
      <View style={styles.button}>
        <Button title="新規登録" onPress={handleSubmit(onSubmit)} />
      </View>

// export default VallidateForm;

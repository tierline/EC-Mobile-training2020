// import React, {useState} from 'react';
// import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
// import {useForm, Controller} from 'react-hook-form';

// const VallidateForm = () => {
//   const {control, handleSubmit, errors} = useForm();
//   const onSubmit = data => console.log(data)
//   return (
//     <View>
//       <Text style={styles.label}>メールアドレス</Text>
//       <Controller
//         control={control}
//         render={({onChange, value}) => (
//           <TextInput
//             style={styles.input}
//             onChangeText={(value) => onChange(value)}
//             value={value}
//           />
//         )}
//         name="email"
//         rules={{required: true}}
//         defaultValue=""
//       />
//       {errors.email && <Text>必須項目です</Text>}

//       <Text style={styles.label}>パスワード</Text>

//       <Controller
//         control={control}
//         render={({onChange, value}) => (
//           <TextInput
//             style={styles.input}
//             onChangeText={(value) => onChange(value)}
//             value={value}
//           />
//         )}
//         name="password"
//         rules={{required: true}}
//         defaultValue=""
//       />
//       {errors.password && <Text>必須項目です</Text>}
//       <View style={styles.button}>
//         <Button title="送信" onPress={handleSubmit(onSubmit)} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   label: {
//     marginLeft: 10,
//   },
//   input: {
//     marginBottom: 20,
//     marginRight: 10,
//     borderBottomWidth: 2,
//     borderBottomColor: 'green',
//   },
//   form: {
//     marginBottom: 20,
//   },
//   button: {
//     marginTop: 20,
//   },
// });

// export default VallidateForm;

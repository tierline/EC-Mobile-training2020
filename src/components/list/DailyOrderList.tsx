// import React, {useEffect, useState} from 'react';
// import {FlatList, StyleSheet, Text, View, Button} from 'react-native';
// import {Accordion} from 'native-base';
// import OrderApi from '../../api/OrderApi';
// import Storage from '../../Storage';
// import {useNavigation} from '@react-navigation/native';

// const DailyOrderList = () => {
//   const navigation = useNavigation();
//   const renderItems = ({item}: {item: any}) => {
//     console.log('renderItems');
//     const month = item.orderMonth.slice(5, 7);
//     const day = item.orderDay.slice(0, 2);
//     console.log(month, ':', day);
//     console.log(item.orderId);
//     return (
//       <View>
//         <Button
//           title={item.orderDay}
//           onPress={() =>
//             navigation.navigate('OrderItemDetail', {
//               id: item.orderId,
//               orderDate: item.orderDay,
//             })
//           }
//         />
//       </View>
//     );
//   };
//   return (

//     <FlatList
//     style={styles.list}
//     data={items}
//     renderItem={renderItems}
//     keyExtractor={(item, index) => index.toString()}
//     />;
//     )
// };

// export default DailyOrderList;

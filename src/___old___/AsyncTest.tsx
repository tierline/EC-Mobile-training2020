// static async wait() {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       console.log('WAIT FUNC');
//       resolve('waitから返した RESOLVE');
//     }, 5000);
//   });
//   // console.log('setTimeout外 実行されるか？');
// }

// static async asyncGet() {
//   try {
//     const waitResult = await Api.wait();
//     console.log(waitResult);
//   } catch (error) {
//     Alert.alert('get error:' + error);
//   }
//   console.log('asyncGet last done');
// }

// static thenGet() {
//   Api.wait()
//     .then((waitResult) => {
//       console.log(waitResult);
//     })
//     .catch((error) => {
//       Alert.alert('get error:' + error);
//     });
//   console.log('thenGet last done');
// }

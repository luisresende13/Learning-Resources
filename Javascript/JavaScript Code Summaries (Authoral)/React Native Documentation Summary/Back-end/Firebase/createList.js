// import database from '@react-native-firebase/database';
// const reference = database().ref('/users/123');


import { firebase } from '@react-native-firebase/database';
// const reference = firebase
//   .app()
//   .database('https://<databaseName>.<region>.firebasedatabase.app/')
//   .ref('/users/123');

// Writing data

const reference = firebase
  .app()
    .database('https://mood-tracker-13-default-rtdb.firebaseio.com/')
    .ref('/entries/0')
    .set({'mood': '0', 'emotions': '[cansado, triste]'})
    .then(() => console.log('Data set.'));

// database()
// .ref('/users/123')
// .set({
// name: 'Ada Lovelace',
// age: 31,
// })
// .then(() => console.log('Data set.'));
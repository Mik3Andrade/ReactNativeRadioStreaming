import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

// import { Container } from './styles';

let firebaseConfig = {
  apiKey: 'AIzaSyDVmJzxnNZ5KVE4mQisuUBLIBQVFeGl8Lg',
  authDomain: 'radio-app-rn.firebaseapp.com',
  databaseURL: 'https://radio-app-rn.firebaseio.com',
  projectId: 'radio-app-rn',
  storageBucket: 'radio-app-rn.appspot.com',
  messagingSenderId: '453286694831',
  appId: '1:453286694831:web:1ed0f6c68d0e29fb0e295a',
  measurementId: 'G-23C5LTTYZD',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

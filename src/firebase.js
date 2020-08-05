import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyBZi4vsL44fkH9aRHemGBAu4iOYlvn6_UI',
  authDomain: 'todoist-3628e.firebaseapp.com',
  databaseURL: 'https://todoist-3628e.firebaseio.com',
  projectId: 'todoist-3628e',
  storageBucket: 'todoist-3628e.appspot.com',
  messagingSenderId: '541041151890',
  appId: '1:541041151890:web:a5b925bc6722cb00497b4b',
  measurementId: 'G-RFYEZXVFEG'
});

export { firebaseConfig as firebase };

import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import auth from '@react-native-firebase/auth';

// Configuration de Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCBrtYCmPWHJXo0kV38GO9k_fKCNKNNpb4',
  authDomain: 'forwardapp-99a0f.firebaseapp.com',
  projectId: 'forwardapp-99a0f',
  storageBucket: 'forwardapp-99a0f.appspot.com',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: '1:608818749333:android:6e3292f093357aa385209c',
};

let app;
let firestore;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  firestore = getFirestore(app);
} else {
  app = getApps()[0];
  firestore = getFirestore(app);
}

export { app, auth, firestore };

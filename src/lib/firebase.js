import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBleFl5Vpop6K8V9CjgNl9jRVHHvurLjzo",
  authDomain:"testing1-63ad3.firebaseapp.com",
  projectId: "testing1-63ad3",
  storageBucket:"testing1-63ad3.appspot.com",
  messagingSenderId: "746232414050",
  appId: "1:746232414050:web:9e53fd4a0c0bb9b5bd363b",
};

 firebase.initializeApp(firebaseConfig);
export const { FieldValue } = firebase.firestore;
export {firebase}

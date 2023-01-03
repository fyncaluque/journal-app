// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDSY3eUcrZL6Lep5wvFapP3dFSHNRlftgM',
  authDomain: 'react-cursos-b2ab7.firebaseapp.com',
  projectId: 'react-cursos-b2ab7',
  storageBucket: 'react-cursos-b2ab7.appspot.com',
  messagingSenderId: '220104761764',
  appId: '1:220104761764:web:b55069ab7a56c0b7b4e131',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

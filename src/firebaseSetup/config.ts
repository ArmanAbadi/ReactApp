// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC2wctSVEFXGSwEy1N5866udMXUQqTHKYc',
  authDomain: 'eaec-79c34.firebaseapp.com',
  projectId: 'eaec-79c34',
  storageBucket: 'eaec-79c34.firebasestorage.app',
  messagingSenderId: '230435794102',
  appId: '1:230435794102:web:65c1197186babd8e63ca17',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// ! remember to change firestore from test mode to production mode
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

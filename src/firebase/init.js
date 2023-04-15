// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCeycwLBKff7K0voCZpc0fP01uqU1Blt4",
  authDomain: "authentication-practice-3a95b.firebaseapp.com",
  projectId: "authentication-practice-3a95b",
  storageBucket: "authentication-practice-3a95b.appspot.com",
  messagingSenderId: "829526236736",
  appId: "1:829526236736:web:5c4df7716d7617ddc589a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
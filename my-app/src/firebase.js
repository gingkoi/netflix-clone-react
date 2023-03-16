// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
  //   appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: "AIzaSyDoM17pl3x2ky0rWtqV9lMKQ4V_U2uj96Y",
  authDomain: "netflix-react-39a9a.firebaseapp.com",
  projectId: "netflix-react-39a9a",
  storageBucket: "netflix-react-39a9a.appspot.com",
  messagingSenderId: "533054077496",
  appId: "1:533054077496:web:e78293a74fc0386db684cd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

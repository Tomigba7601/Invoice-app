  import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCWx6v-ykG7a_34n0_PiXxG4DNNZx04MX8",
  authDomain: "invoice-app-yt-2f05e.firebaseapp.com",
  projectId: "invoice-app-yt-2f05e",
  storageBucket: "invoice-app-yt-2f05e.appspot.com",
  messagingSenderId: "891368323055",
  appId: "1:891368323055:web:f08ebabd29dfbc6f35281a"
};
// const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();

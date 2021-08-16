import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA_ZY5BWS0PguU6Ea_8MMHFGh--_D6lUf8",
  authDomain: "my-weather-app-ff424.firebaseapp.com",
  projectId: "my-weather-app-ff424",
  storageBucket: "my-weather-app-ff424.appspot.com",
  messagingSenderId: "10405740142",
  appId: "1:10405740142:web:5b67707223f02a345df07f"
  
})


export const auth = app.auth();

export default app;
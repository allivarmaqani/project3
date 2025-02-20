import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyCfTZ202FjI4tmawDbizlPsBRcu3eCSqyI",
    authDomain: "chat-da008.firebaseapp.com",
    projectId: "chat-da008",
    storageBucket: "chat-da008.firebasestorage.app",
    messagingSenderId: "405077229883",
    appId: "1:405077229883:web:2fcdef5ae3f4836db8f71e"
  };

const db = firebase.initializeApp(config);
export default db;
import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyAeFE0IfXQyEJICWDV01FTps9oPo6SMUHo",
    authDomain: "firevuechat-59d82.firebaseapp.com",
    projectId: "firevuechat-59d82",
    storageBucket: "firevuechat-59d82.firebasestorage.app",
    messagingSenderId: "1097853031981",
    appId: "1:1097853031981:web:ca965aca9db96a074e4aa4"
}

const db = firebase.initializeApp(config);
export default db;
import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDMOs_5jSH0h4LyjB4TxqAaQbZESUHWU1U",
  authDomain: "hisi-c9acc.firebaseapp.com",
  projectId: "hisi-c9acc",
  storageBucket: "hisi-c9acc.appspot.com",
  messagingSenderId: "364346266630",
  appId: "1:364346266630:web:5cb73230b51ad7384f9f87"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}

export const db = getFirestore ()
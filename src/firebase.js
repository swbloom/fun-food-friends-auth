import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAZZta-_cyQ-WCj-exJOjjYy3SJb41CdAQ",
  authDomain: "fir-react-authentication.firebaseapp.com",
  databaseURL: "https://fir-react-authentication.firebaseio.com",
  projectId: "fir-react-authentication",
  storageBucket: "fir-react-authentication.appspot.com",
  messagingSenderId: "179937455676"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const database = firebase.database();
export default firebase;
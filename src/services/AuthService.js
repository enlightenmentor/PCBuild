import firebase from 'firebase/app'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: "AIzaSyDh9Y32wrjk495HQVUSw15Fh4f5npGIdKo",
  authDomain: "pc-build-b6c8e.firebaseapp.com",
  databaseURL: "https://pc-build-b6c8e.firebaseio.com",
  projectId: "pc-build-b6c8e",
  storageBucket: "pc-build-b6c8e.appspot.com",
  messagingSenderId: "494148302442"
})

export default {
  checkUser() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        user.getIdToken(true).then((idToken) => {
          resolve(user ? {
            email: user.email,
            token: idToken
          } : null);
        });
      })
    });
  },
  signIn(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        user.getIdToken(true).then((idToken) => {
          return {
            email: user.email,
            token: idToken
          };
        });
      });
  },
  signOut() {
    return firebase.auth().signOut();
  }
}
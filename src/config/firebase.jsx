import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from './firebase.config';

firebase.initializeApp(firebaseConfig);

export const Firebase = {
  signIn: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },

  signUp: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },

  signOut: () => {
    return firebase.auth().signOut();
  },

  checkAuthUser: (user) => {
    return firebase.auth().onAuthStateChanged(user);
  },
}
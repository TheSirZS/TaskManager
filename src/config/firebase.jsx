import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./firebase.config";

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

  addTask: (task) => {
    return firebase.firestore().collection("tasks").doc().set(task);
  },

  getTasks: () => {
    return firebase.firestore().collection("tasks");
  },

  updateTask: (id, task) => {
    return firebase.firestore().collection("tasks").doc(id).update(task);
  },

  deleteTask: (id) => {
    return firebase.firestore().collection("tasks").doc(id).delete();
  },
};

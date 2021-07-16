import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDnxtPSN4FdQZkDi6-U92X-fjjlrd08nm8",
    authDomain: "crwn-db-64c91.firebaseapp.com",
    projectId: "crwn-db-64c91",
    storageBucket: "crwn-db-64c91.appspot.com",
    messagingSenderId: "733054608760",
    appId: "1:733054608760:web:f00b6578e60e35d61d148d",
    measurementId: "G-Y2Y1NYZ55K"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
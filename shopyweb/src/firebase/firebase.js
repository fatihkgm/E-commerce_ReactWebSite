import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCL_mxjzSV_aFto1opIAfFWARhKSfd5d1w',
  authDomain: 'shopy-65893.firebaseapp.com',
  projectId: 'shopy-65893',
  storageBucket: 'shopy-65893.appspot.com',
  messagingSenderId: '852722782669',
  appId: '1:852722782669:web:1e06f9987946ad9c5cf484',
  measurementId: 'G-EGDGRQD42H',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authentication utility

const provider = new firebase.auth.GoogleAuthProvider();
//always triger when we use google auth provider and sign in
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

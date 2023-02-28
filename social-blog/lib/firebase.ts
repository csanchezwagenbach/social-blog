import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCaWIOllvzCJxCcj2ZdXxZVGj-K_d3YMxM",
    authDomain: "social-blog-60667.firebaseapp.com",
    projectId: "social-blog-60667",
    storageBucket: "social-blog-60667.appspot.com",
    messagingSenderId: "94267621427",
    appId: "1:94267621427:web:d0f53046ed9ebbfd1fe346",
    measurementId: "G-VZ07WJWSSG"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
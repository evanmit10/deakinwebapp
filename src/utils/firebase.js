import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc , setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyByc6S2CygmSAwCPJQEpzt9_8Bg2mdYgtc",
    authDomain: "deakin-app.firebaseapp.com",
    projectId: "deakin-app",
    storageBucket: "deakin-app.appspot.com",
    messagingSenderId: "678077056050",
    appId: "1:678077056050:web:7b7c96fb8a102356baa82b",
    measurementId: "G-7HS8LDLQ75"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters ({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocFromAuth= async (userAuth, additionalInformation ={}) => {
    if (!userAuth.email) return;

    const userDocRef = doc (db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);


    if (!userSnapshot.exists()) 
    {
        const {displayName, email} = userAuth;
        const createdAt = new Date(); 
    try {
     await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
     })
    }
    catch (error){
        console.log('error in creating ', error.message)
    }
}    

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signinAuthUserWithEmailAndPassword = async (email, password) =>{
    if (!email || !password) return;
   return await signInWithEmailAndPassword(auth, email, password)
  }
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyAdH0Kklcrsj_LZmZ7_nLlNKPuBVIDTiQY",
    authDomain: "crwn-db-1bbc9.firebaseapp.com",
    databaseURL: "https://crwn-db-1bbc9.firebaseio.com",
    projectId: "crwn-db-1bbc9",
    storageBucket: "crwn-db-1bbc9.appspot.com",
    messagingSenderId: "822559295543",
    appId: "1:822559295543:web:f729ee54050dea8a9657b2"
  };

  export const createUserProfileDocument = async (userAuth, additionalData)=>{

    if(!userAuth) return;

    const userRef= firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!userAuth.exists){

      const { displayName,email }= userAuth;
      const createdAt=new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }

    }

    return userRef;
    
  }

firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore= firebase.firestore();


const provider= new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ promt:'select_accout' });

export const signInWithGoogle =()=> auth.signInWithPopup(provider);

export default firebase;
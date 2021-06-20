import firebase from 'firebase'
import 'firebase/auth'


const AuthConfig = firebase.initializeApp({
    apiKey:'AIzaSyDHkWHjoefOnfZzs5mNscaIJxFw1ON0CAU' ,
    authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})

// export const auth = AuthConfig.Auth()
export default AuthConfig

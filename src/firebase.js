import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDTd_MQjXl9w9-hZP_rJPWfRCbArAwZBy8",
    authDomain: "firechat-9348e.firebaseapp.com",
    projectId: "firechat-9348e",
    storageBucket: "firechat-9348e.appspot.com",
    messagingSenderId: "386299847649",
    appId: "1:386299847649:web:be2bd20af7a532445028a0",
    measurementId: "G-MLF2RNF0CB"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
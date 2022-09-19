import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAY-4EFamCk4rxRpQMriiZvQUbbwf44g6k",
	authDomain: "photogallary-c3bc4.firebaseapp.com",
	projectId: "photogallary-c3bc4",
	storageBucket: "photogallary-c3bc4.appspot.com",
	messagingSenderId: "402904384914",
	appId: "1:402904384914:web:9ce5d85e9803d470812d4b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };

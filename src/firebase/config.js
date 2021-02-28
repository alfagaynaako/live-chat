import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyArRcOzPrvZ0C8sU9vgGGpF6O4-5ajX588",
	authDomain: "my-vue3-firebase-sites.firebaseapp.com",
	projectId: "my-vue3-firebase-sites",
	storageBucket: "my-vue3-firebase-sites.appspot.com",
	messagingSenderId: "1023593082687",
	appId: "1:1023593082687:web:779cc876e5301b5434ad8a",
};

// Init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };

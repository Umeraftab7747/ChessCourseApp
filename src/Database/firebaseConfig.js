import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyDXuGDyH1VaMRNgECM2SRT33ct2fnKJZao",
	authDomain: "plotsbuytest.firebaseapp.com",
	projectId: "plotsbuytest",
	storageBucket: "plotsbuytest.appspot.com",
	messagingSenderId: "63500022639",
	appId: "1:63500022639:web:956fe2bcab56fb3487ee9a",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export default firebase;

export { db, auth, storage };

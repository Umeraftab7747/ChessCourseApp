import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyDCzvEhMO2aL4kWA4VSiij3ZN0r9lpiIiI",
	authDomain: "schachkurse-43b17.firebaseapp.com",
	databaseURL:
		"https://schachkurse-43b17-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "schachkurse-43b17",
	storageBucket: "schachkurse-43b17.appspot.com",
	messagingSenderId: "296173156103",
	appId: "1:296173156103:web:084e1213906089928937a2",
	measurementId: "G-4EW7WH4JZ7",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export default firebase;

export { db, auth, storage };

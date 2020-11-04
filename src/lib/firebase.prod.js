import Firebase from 'firebase/app'; // Basic step
import 'firebase/firestore'; // it's not dynamic but excellent for netflix
import 'firebase/auth'; // Basic authentication

// import { seedDatabase } from '../seed';   // the seed is actually a lot of work

const config = {
	// this is copied from firebase
	apiKey: 'AIzaSyAyIBkSUXDI_-0xXULT10G-_I_M-N57Jzg',
	authDomain: 'netflix-database.firebaseapp.com',
	databaseURL: 'https://netflix-database.firebaseio.com',
	projectId: 'netflix-database',
	storageBucket: 'netflix-database.appspot.com',
	messagingSenderId: '46747364438',
	appId: '1:46747364438:web:ca8aa7677815f62a301ff7',
};

const firebase = Firebase.initializeApp(config); // our constant Firebase and initialize with our config

//seedDatabase(firebase);   This has to be used only once otherwise duplicate data

export { firebase }; // export that to use somewhere else

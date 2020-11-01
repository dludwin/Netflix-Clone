import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

// we need to seed the database

// we need config here

const config = {
	apiKey: 'AIzaSyAyIBkSUXDI_-0xXULT10G-_I_M-N57Jzg',
	authDomain: 'netflix-database.firebaseapp.com',
	databaseURL: 'https://netflix-database.firebaseio.com',
	projectId: 'netflix-database',
	storageBucket: 'netflix-database.appspot.com',
	messagingSenderId: '46747364438',
	appId: '1:46747364438:web:ca8aa7677815f62a301ff7',
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);   This has to be used only once otherwise duplicate data

export { firebase }; // initial firebase boilerplate

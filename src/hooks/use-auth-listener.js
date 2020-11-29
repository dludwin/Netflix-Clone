import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
	// listening whether user is loggedIn or loggedOut
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem('authUser')) // we need to store the data that user is logged in
	); // we can check if we have user in local storage. json.parse creates js string or object
	const { firebase } = useContext(FirebaseContext); // listen to firebase on authentication state changed

	//  Run on the first iteration and bind listener that's gonna listen for us
	useEffect(() => {
		const listener = firebase.auth().onAuthStateChanged((authUser) => {
			if (authUser) {
				// if there is authenticated user then
				localStorage.setItem('authUser', JSON.stringify(authUser)); // stringify(converts js object or value to json string) before puting on local storage
				setUser(authUser); // we can get the user name for example to greet
			} else {
				localStorage.removeItem('authUser');
				setUser(null);
			}
		});

		return () => listener(); // just in case it doesn' work
		// eslint-disable-next-line
	}, []);

	return { user };
}

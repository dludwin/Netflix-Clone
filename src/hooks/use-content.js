import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useContent(target) {
	// target is series / films
	const [content, setContent] = useState([]); // Empty array by default
	const { firebase } = useContext(FirebaseContext);

	useEffect(() => {
		firebase
			.firestore()
			.collection(target) // 'series' for example. Different collections from firebase
			.get()
			.then((snapshot) => {
				// take snapshot of that data
				const allContent = snapshot.docs.map((contentObj) => ({
					...contentObj.data(), // spreading that (content object) data there because we want document id
					docId: contentObj.id, // docId that's what we want. react specific
				}));                       // docId for certain keys for each slice item
				setContent(allContent);
			})
			.catch((error) => {
				console.log(error.message);
			});
		// eslint-disable-next-line
	}, []);

	return { [target]: content }; // return new object with the target series of films, and sign up with content
}

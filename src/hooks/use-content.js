import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useContent(target) {
	// target is series / films
	const [content, setContent] = useState([]); // Empty array by default
	const { firebase } = useContext(FirebaseContext);

	useEffect(() => {
		firebase
			.firestore()
			.collection(target)
			.get()
			.then((snapshot) => {
				const allContent = snapshot.docs.map((contentObj) => ({
					...contentObj.data(), // spreading that data there because we want document id
					docId: contentObj.id, // react specific
				}));
				setContent(allContent);
			})
			.catch((error) => {
				console.log(error.message);
			});
		// eslint-disable-next-line
	}, []);

	return { [target]: content }; // return new object with the target series of films, and sign up with content
}

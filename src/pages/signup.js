import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer'; // We can use this again
import { HeaderContainer } from '../containers/header'; // Login is done on the Header
import { Form } from '../components'; // ../ import so it's in index and export { default as ..} from './..'
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';

export default function Signup() {
	const history = useHistory(); // when someone signups redirect to browse page
	const { firebase } = useContext(FirebaseContext);

	const [firstName, setFirstName] = useState('');
	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const isInvalid = firstName === '' || password === '' || emailAddress === '';

	const handleSignup = (event) => {
		event.preventDefault();

		firebase
			.auth()
			.createUserWithEmailAndPassword(emailAddress, password)
			.then((result) =>
				result.user
					.updateProfile({
						displayName: firstName,
						photoURL: Math.floor(Math.random() * 5) + 1, // random number from 1 to 5. Assign random image
					})
					.then(() => {
						history.push(ROUTES.BROWSE); // if everything is okay go to browse
					})
			)
			.catch((error) => {
				// on error clear user data
				setFirstName('');
				setEmailAddress('');
				setPassword('');
				setError(error.message);
			});
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign Up</Form.Title>

					{error && <Form.Error>{error}</Form.Error>}

					<Form.Base onSubmit={handleSignup} method="POST">
						<Form.Input
							placeholder="First Name"
							value={firstName}
							onChange={({ target }) => setFirstName(target.value)}
						/>
						<Form.Input
							placeholder="Email address"
							value={emailAddress}
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							type="password"
							value={password}
							autoComplete="off"
							placeholder="Password"
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit disabled={isInvalid} type="submit">
							Sign up
						</Form.Submit>

						<Form.Text>
							Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
						</Form.Text>
						<Form.TextSmall>
							This page is protected by Google reCAPTCHA to ensure you're not a
							bot. Learn more.
						</Form.TextSmall>
					</Form.Base>
				</Form>
			</HeaderContainer>

			<FooterContainer />
		</>
	);
}

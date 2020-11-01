import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';

export default function Signin() {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);
	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const isInvalid = password === '' || emailAddress === '';

	const handleSignIn = (event) => {
		event.preventDefault(); // don't want to post to this particular page, instead will do some magic

		// firebase work here!
		firebase
			.auth()
			.signInWithEmailAndPassword(emailAddress, password)
			.then(() => {
				// push to the browse page
				history.push(ROUTES.BROWSE);
			})
			.catch((error) => {
				setEmailAddress('');
				setPassword('');
				setError(error.message);
			});
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title> Sign in </Form.Title>
					{error && <Form.Error>{error}</Form.Error>}{' '}
					{/* Jesli jest error to wyswitl basic if statement */}
					<Form.Base onSubmit={handleSignIn} method="POST">
						<Form.Input
							placeholder="Email address"
							value={emailAddress}
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							placeholder="Password"
							autoComplete="off"
							type="password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit disabled={isInvalid} type="submit">
							Sign In
						</Form.Submit>
					</Form.Base>
					<Form.Text>
						New to Netflix? <Form.Link to="/signup"></Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot. Learn more.
					</Form.TextSmall>
				</Form>
			</HeaderContainer>

			<FooterContainer />
		</>
	);
}

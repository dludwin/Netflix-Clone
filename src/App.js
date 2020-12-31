import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'; // DOM will create exact copy of current nodes and objects (h1,divs etc). (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {
	const { user } = useAuthListener();

	return (
		<Router>
			<Switch>
				{/* The Switch component will render only exact matches. If user is logged in then redirect him to the logged in path */}
				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE} // if user is logged in go to the browse
					path={ROUTES.SIGN_IN} // we are expecting to go to the sign in page
				>
					<Signin />
				</IsUserRedirect>

				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.SIGN_UP}
				>
					<Signup />
				</IsUserRedirect>

				<ProtectedRoute user={user} path={ROUTES.BROWSE}>
					<Browse />
				</ProtectedRoute>

				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.HOME}
				>
					<Home />
				</IsUserRedirect>
			</Switch>
		</Router>
	);
}

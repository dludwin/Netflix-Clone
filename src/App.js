import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'; // dom means Document Object Model
import { Home, Browse, Signin, Signup } from './pages'; // Index in pages so I don't have to export them individually and using here Named export
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {
	const { user } = useAuthListener();
	console.log(user);

	return (
		<Router>
			<Switch>
				{/* The Switch component will render exact matches, and only the exact match. */}
				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE} // if user is logged in go to browse
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

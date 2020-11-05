import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'; // dom means Document Object Model
import { Home, Browse, Signin, Signup } from './pages'; // Index in pages so I don't have to export them individually and using here Named export
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

export default function App() {
	const user = null; // { name: 'd' }

	return (
		<Router>
			<Switch>
				{/* The Switch component will render exact matches, and only the exact match. */}
				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.SIGN_IN}
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

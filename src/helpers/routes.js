import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// This is used in the App.js. If user is LoggedIn we redirect them to logedInPath which is BROWSE
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
	return (
		<Route
			{...rest}
			render={() => {
				if (!user) {
					return children; // component page - signin/signup etc
				}

				if (user) {
					return <Redirect to={{ pathname: loggedInPath }} />;
				}

				return null;
			}}
		/>
	);
}

export function ProtectedRoute({ user, children, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) => {
				if (!user) {
					return (
						<Redirect to={{ pathname: 'signin', state: { from: location } }} />
					);
				}
				if (user) {
					return children; // if the user is logged-in return browse page
				}

				return null;
			}}
		/>
	);
}

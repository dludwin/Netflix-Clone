import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // dom means Document Object Model
import { Home, Browse, Signin, Signup } from './pages'; // Index in pages so I don't have to export them individually and using here Named export
import * as ROUTES from './constants/routes';

export default function App() {
	// exact path is the only way, using only path causes a lot of problems and it's random, whatever comes first rule and weird rule for /
	return (
		<Router>
			{' '}
			{/*  Router is the main engine of our App */}
			<Route exact path={ROUTES.HOME}>
				{' '}
				{/* Every Route is a website and address in out application */}
				<Home />
			</Route>
			<Route exact path={ROUTES.SIGN_IN}>
				<Signin />
			</Route>
			<Route exact path={ROUTES.SIGN_UP}>
				<Signup />
			</Route>
			<Route exact path={ROUTES.BROWSE}>
				<Browse />
			</Route>
		</Router>
	);
}

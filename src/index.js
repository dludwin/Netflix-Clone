import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyles } from './global-styles'; /*  global-styles need to have const and here we have to use named import {} */
import 'normalize.css'; /* this is for the horizontal border to take the full width */

render(
	<>
		<GlobalStyles />
		<App />
	</>,
	document.getElementById('root')
);

import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyles } from './global-styles'; /*  global-styles need to have const and here we have to use named import {} */
import 'normalize.css'; /* this is for the horizontal border to take full width. To get better user experience. Reloads CSS */
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

// JSX fragment is necessary. Render = create/make/cause to be
render(
	<>
		<FirebaseContext.Provider value={{ firebase }}>
			<GlobalStyles />
			<App />
		</FirebaseContext.Provider>
	</>,
	document.getElementById('root')
);

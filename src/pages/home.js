import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer'; // ../ means down one level, it's not in App.js and ./ can't be used
import { FaqsContainer } from '../containers/faqs';

export default function Home() {
	return (
		<>
			<JumbotronContainer />
			<FaqsContainer />
			<FooterContainer />
		</>
	);
}

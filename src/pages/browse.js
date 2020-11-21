import React from 'react';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils/selection-filter';

export default function Browse() {
	// we need the series and the films
	const { series } = useContent('series'); // object destructuring
	const { films } = useContent('films');

	// we need slides. Netflix works on rows with slides
	// pass it to the browse container

	return <p> Hello from Browse! </p>;
}

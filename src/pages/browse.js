import React from 'react';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils/selection-filter';

export default function Browse() {
	const { series } = useContent('series'); // object destructuring
	const { films } = useContent('films');

	return <p> Hello from Browse! </p>;
}

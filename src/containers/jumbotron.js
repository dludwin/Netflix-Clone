import React from 'react';
import { Jumbotron } from '../components';
import jumboData from '../fixtures/jumbo.json';

export function JumbotronContainer() {
	return (
		<Jumbotron.Container>
			{' '}
			{/* encapsule all the 3 jumbotrons from jumbo.json */}
			{jumboData.map((
				item // for each item that comes down from the map, we can iterate
			) => (
				<Jumbotron key={item.id} direction={item.direction}>
					{' '}
					{/*  // need to pass key to iteration element */}
					<Jumbotron.Pane>
						<Jumbotron.Title> {item.title}</Jumbotron.Title>
						<Jumbotron.SubTitle> {item.subTitle} </Jumbotron.SubTitle>
					</Jumbotron.Pane>
					<Jumbotron.Pane>
						{' '}
						{/* right side, and we will just flip with flex */}
						<Jumbotron.Image src={item.image} alt={item.alt} />
					</Jumbotron.Pane>
				</Jumbotron>
			))}
		</Jumbotron.Container>
	);
}

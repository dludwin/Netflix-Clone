import React from 'react';
import {
	Container,
	Inner,
	Item,
	Title,
	SubTitle,
	Pane,
	Image,
} from './styles/jumbotron';

export default function Jumbotron({
	children,
	direction = 'row',
	...restProps
}) {
	return (
		// Gray border at the bottom is necessary so we need Item to do that
		<Item {...restProps}>
			<Inner direction={direction}>{children}</Inner>{' '}
			{/*Children is everything that's within */}
		</Item>
	);
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
	return <Container {...restProps}> {children} </Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
	return <Pane {...restProps}> {children} </Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
	return <Title {...restProps}> {children} </Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}> {children} </SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
	return <Image {...restProps} />;
};

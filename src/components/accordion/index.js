import React, { useState, useContext, createContext } from 'react'; // A lot of login going here. Build in light matter, from mapping on json
import {
	Container,
	Inner,
	Title,
	Frame,
	Item,
	Header,
	Body,
} from './styles/accordion'; // we import those created elements from styles. They were created and styled there

// [==========]  Container max-width
//     [===] Item smaller 800px
// [==========]
const ToggleContext = createContext(); // Toggle - switch from one effect, feature, or state to another by using a toggle.
// default for easy export
export default function Accordion({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
	const [toggleShow, setToggleShow] = useState(false);
	return (
		<ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
			<Item {...restProps}>{children}</Item>
		</ToggleContext.Provider>
	);
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
	const { toggleShow, setToggleShow } = useContext(ToggleContext);

	return (
		<Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
			{children}
			{/* <pre> {JSON.stringify(toggleShow, null, 2)}</pre> */}
			{toggleShow ? (
				<img src="./images/icons/close-slim.png" alt="Close" />
			) : (
				<img src="./images/icons/add.png" alt="Open" />
			)}
		</Header>
	);
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
	const { toggleShow } = useContext(ToggleContext);

	return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

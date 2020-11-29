import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

// shorthard property of background in one declaration:  background: #ffffff url("img_tree.png") no-repeat right top / cover;
// background-size: auto/length/cover/contain/initial/inherit --> no-repeat top left / 100% 100%;
// The header is in the Background, it's the main player. Feature is children and logo and button link and other elements, if I change flex-direction: row, then it's more visible
export const Background = styled.div`
	display: flex;
	flex-direction: column;
	background: url(${({ src }) =>
			src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})
		no-repeat top left / cover;
`;

export const Container = styled.div`
	display: flex;
	margin: 0 56px;
	height: 64px;
	padding: 18px 0;
	justify-content: space-between;
	align-items: center;

	a {
		display: flex;
	}

	@media (max-width: 1000px) {
		margin: 0 30px;
	}
`;

export const Feature = styled(Container)`
	padding: 150px 0 500px 0;
	flex-direction: column;
	align-items: normal;
	width: 50%;

	@media (max-width: 1100px) {
		display: none;
	}
`;

export const Logo = styled.img`
	height: 32px;
	width: 108px;
	margin-right: 40px;

	@media (min-width 1249px) {
		height: 45px;
		width: 167px;
	}
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;                /* makes column */
    background-color: #e50914;     
    width: 84px;                   /* otherwise takes whole width */
    height: fit-content;           /* I don't know */
    color: white;
    border: 0;
    font-size: 15;
    border-radius 3px;            /* Ends are rounded */
    padding: 8px 17px;
    cursor: pointed;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background-color: #f40612;
    }
`;

export const Text = styled.p`
	color: white;
	font-size: 22px;
	line-height: normal;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
	margin: 0;
`;

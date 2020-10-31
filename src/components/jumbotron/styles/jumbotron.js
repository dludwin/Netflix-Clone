import styled from 'styled-components/macro'; // macro will give the name of the component in the dev tools. Instead of some random number

export const Item = styled.div`
	display: flex;
	border-bottom: 8px solid #222;
	padding: 50px 5%;
	color: white;
	overflow: hidden;
`;

export const Inner = styled.div`
	/*  h1 div or else */
	display: flex;
	align-items: center;
	flex-direction: ${({ direction }) => direction};
	justify-content: space-between;
	max-width: 1100px;
	margin: auto; /* that makes marhin of Inner automatically 56 0 56 0 */
	width: 100%;

	@media (max-width: 1000px) {
		/* when browser window is 1000px or less direction of content will be column */
		flex-direction: column;
	}
`;

export const Pane = styled.div`
	width: 50%;

	@media (max-width: 1000px) {
		width: 100%;
		padding: 0 45px;
		text-align: center;
	}
`;

export const Title = styled.h1`
	font-size: 50px;
	line-height: 1.1;
	margin-bottom: 8px;

	@media (max-width: 600px) {
		font-size: 35px;
	}
`;

export const SubTitle = styled.h2`
	font-size: 32px;
	font-weight: bold;
	line-height: normal;

	@media (max-width: 600px) {
		font-size: 18px;
	}
`;

export const Image = styled.img`
	max-width: 100%;
	height: auto;
`;

export const Container = styled.div`
	@media (max-width: 1000px) {
		${Item}: last-of-type h2 {
			margin-bottom: 50px;
		}
	}
`;

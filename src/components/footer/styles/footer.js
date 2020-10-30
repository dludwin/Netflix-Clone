import styled from 'styled-components/macro';

export const Container = styled.div`
	display: flex;
	padding: 25px 100px;
	margin: auto;
	max-width: 900px;
	flex-direction: column;

	@media (max-width: 1000px) {
		padding: 25px 50px;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
	grip-gap: 15px;
	margin-bottom: 15px;
`;

export const Link = styled.a`
	color: #757575;
	margin-bottom: 20px;
	font-size: 13px;
	text-decoration: none;
`;

export const Title = styled.p`
	font-size: 16px;
	color: #757575;
	margin-bottom: 40px;
`;

export const Text = styled.p`
	font-size: 13px;
	color: #757575;
	margin-bottom: 10px;
`;

export const Break = styled.p`
	flex-basis: 100%;
	height: 0;
`;

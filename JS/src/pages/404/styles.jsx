import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #274d76;
	height: 100vh;
`;

export const Img = styled.img`
	height: 330px;
`;

export const Title = styled.h1`
	font-size: 30px;
	font-weight: 700;
	margin-bottom: 20px;
	color: #ffffff; ;
`;

export const Subtitle = styled.h2`
	font-size: 18px;
	color: #ffffff;

	.link {
		border-radius: 10px;
		padding: 6px 10px;
		background-color: #ec8c92;
		font-weight: 700;
		text-decoration: none;
	}
`;

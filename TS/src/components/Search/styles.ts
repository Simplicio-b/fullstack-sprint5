import styled from 'styled-components';

export const Container = styled.div`
	position: relative;

	.header__icon {
		width: 24px;
		opacity: 26%;
		top: 8px;
		position: absolute;
		padding-left: 10px;
		color: rgba(0, 0, 0, 0.26);
		line-height: 40px;
	}
`;

export const InputSearch = styled.input`
	height: 40px;
	width: 100%;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.23);
	padding-left: 40px;

	&:hover {
		border-color: #000;
	}

	&::placeholder {
		font-size: 0.9375rem;
		font-weight: 600;
		font-family: 'Open Sans';
		color: #9b9b9b;
	}
`;

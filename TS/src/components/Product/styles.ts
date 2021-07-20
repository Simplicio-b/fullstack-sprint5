import styled from 'styled-components';

export const ProductsCard = styled.li`
	width: 25%;

	@media (max-width: 1200px) {
		width: 50%;
	}

	.card__description {
		font-size: 0.6875rem;
		font-weight: 400;
		color: rgba(0, 0, 0, 0.87);
		text-transform: uppercase;
		text-align: center;
		margin-top: 8px;
		margin-bottom: 10px;
	}

	.card__price {
		font-size: 0.8125rem;
		font-weight: 600;
		text-transform: uppercase;
		text-align: center;
	}
`;

export const Card = styled.div`
	cursor: pointer;
	border: 1px solid white;
	padding: 8px;

	&:hover {
		box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
			0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
	}
`;

export const ProductImg = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

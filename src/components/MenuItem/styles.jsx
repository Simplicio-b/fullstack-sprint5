import styled from 'styled-components';

const MenuLink = styled.a`
	font-size: 0.8125rem;
	font-weight: 600;
	color: #000;
	text-transform: uppercase;
	padding-bottom: 5px;
	vertical-align: baseline;

	&:hover {
		border-bottom: 2px solid #000;
	}
`;

export default MenuLink;
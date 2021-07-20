import { useContext } from 'react';
import CategoriesContext from '../../contexts/CategoriesContext';

import MenuItem from '../MenuItem';

import { Nav, MenuList } from './styles';

function Menu() : JSX.Element {
	const { categories } = useContext(CategoriesContext);

	return (
		<Nav>
			<MenuList data-testid="menu-categorias">
				{categories.all &&
					categories.all.map((m: any) => <MenuItem key={m.id} label={m.label} />)}
			</MenuList>
		</Nav>
	);
}

export default Menu;

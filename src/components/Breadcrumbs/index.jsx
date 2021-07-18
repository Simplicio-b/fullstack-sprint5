import { useContext } from 'react';
import CategoriesContext from '../../contexts/CategoriesContext';

import BreadcrumbItem from '../BreadcrumbsItem';

import { Breadcrumb, BreadcrumbsList } from './styles';

function Breadcrumbs() {
	const { categories } = useContext(CategoriesContext);
	return (
		<Breadcrumb>
			<nav>
				<BreadcrumbsList data-testid="breadcrumbs-test" >
					{categories.current &&
						categories.current.map((c) => (
							<BreadcrumbItem key={c.id} link={c.link} label={c.name} />
						))}
				</BreadcrumbsList>
			</nav>
		</Breadcrumb>
	);
}

export default Breadcrumbs;

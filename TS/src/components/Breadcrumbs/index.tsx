import React, { useContext } from 'react';
import CategoriesContext from '../../contexts/CategoriesContext';

import BreadcrumbItem from '../BreadcrumbsItem/index';

import { Breadcrumb, BreadcrumbsList } from './styles';

function Breadcrumbs() : JSX.Element {

	const { categories } = useContext(CategoriesContext);

	return (
		<Breadcrumb>
			<nav>
				<BreadcrumbsList data-testid="breadcrumbs-test">
					{categories.current &&
						categories.current.map((c: any) => (
							<BreadcrumbItem key={c.id} link={c.link} label={c.name} />
						))}
				</BreadcrumbsList>
			</nav>
		</Breadcrumb>
	);
}

export default Breadcrumbs;

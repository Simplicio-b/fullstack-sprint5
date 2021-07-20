import React, { useContext, useEffect, useState } from 'react';

// contextos
import FilterContext from '../../contexts/FilterContext';
import LoadingContext from '../../contexts/LoadingContext';
import MessageContext from '../../contexts/MessageContext';

// service
import ProductsService from '../../services/ProductsService';

// Components
import Breadcrumbs from '../../components/Breadcrumbs';
import Filters from '../../components/Filters';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Product from '../../components/Product';

import Container from '../../components/GlobalComponents';

import { ContainerProducts, List } from './styles';

function ProductsPage() : JSX.Element {
	const [products, setProducts] = useState([]);
	const [filters, setFilters] = useState([]);

	const { filter } = useContext(FilterContext);
	const { addRequest, removeRequest } = useContext(LoadingContext);
	const { setMessage } = useContext(MessageContext);

	// eslint-disable-next-line
	useEffect(() => loadProducts(), []);

	function loadProducts() : void {
		addRequest();
		ProductsService.get()
			.then((r: any) => {
				setProducts(r.products);
				setFilters(r.filters);
			})
			.catch(() => setMessage('Ocorreu um erro ao carregar os produtos...'))
			.finally(() => removeRequest());
	}

	return (
		<>
			<Header />

			<Container>
				<Breadcrumbs />
				<Filters filters={filters} />

				<ContainerProducts>
					<div className="products__row">
						<List>
							{products
								.filter((p: any) =>
									filter
										? p.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1
										: true
								)
								.map((p: any) => (
									<Product
										key={p.sku}
										image={p.image}
										name={p.name}
										price={p.price}
										sku={p.sku}
									/>
								))}
						</List>
					</div>
				</ContainerProducts>
			</Container>

			<Footer />
		</>
	);
}

export default ProductsPage;

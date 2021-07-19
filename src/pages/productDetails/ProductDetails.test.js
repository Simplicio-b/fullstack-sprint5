import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ProductDetails from './index';

// contexts
import LoadingContext from '../../contexts/LoadingContext';
import MessageContext from '../../contexts/MessageContext';
import FilterContext from '../../contexts/FilterContext';
import CategoriaContext from '../../contexts/CategoriesContext';

// service
import ProductService from '../../services/ProductsService';

jest.mock('../../services/ProductsService');

describe('Testando page ProductDetail', () => {
	it('Teste de rederizacao', async () => {
		const productsMock = {
			products: [
				{
					sku: 1,
					image: 'assets/c1.webp',
					name: 'Jaqueta Puffer Juvenil Com Capuz Super Mario Branco Tam 10 a 18',
					price: '199,90',
				},
			],
		};

		ProductService.get.mockResolvedValue(productsMock);

		const setFilter = jest.fn();
		const addRequest = jest.fn();
		const removeRequest = jest.fn();
		const setMessage = jest.fn();
		const categories = [];

		await act(async () => {
			render(
				<LoadingContext.Provider value={{ addRequest, removeRequest }}>
					<MessageContext.Provider value={{ setMessage }}>
						<FilterContext.Provider value={{ setFilter }}>
							<CategoriaContext.Provider value={{ categories }}>
								<MemoryRouter initialEntries={['/product-detail/1']}>
									<ProductDetails />
								</MemoryRouter>
							</CategoriaContext.Provider>
						</FilterContext.Provider>
					</MessageContext.Provider>
				</LoadingContext.Provider>
			);
		});
	});
});

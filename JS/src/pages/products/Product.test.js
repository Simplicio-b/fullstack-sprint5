import { render, screen, act } from '@testing-library/react';
import Products from './index';

import ProductsService from '../../services/ProductsService';
import { MemoryRouter } from 'react-router-dom';

// contexts
import LoadingContext from '../../contexts/LoadingContext';
import MessageContext from '../../contexts/MessageContext';
import FilterContext from '../../contexts/FilterContext';
import CategoriaContext from '../../contexts/CategoriesContext';

jest.mock('../../services/ProductsService');

describe('ProductsPage', () => {
	it('Rendeziração & Retorno', async () => {
		ProductsService.get.mockResolvedValue({
			products: [
				{
					sku: 1,
					image: 'assets/c1.webp',
					name: 'Jaqueta Puffer Juvenil Com Capuz Super Mario Branco Tam 10 a 18',
					price: '199,90',
				},
			],
			filters: [
				{
					id: 1,
					label: 'Home',
				},
			],
		});

		const filter = 'Camiseta';
		const addRequest = jest.fn(() => {});
		const removeRequest = jest.fn(() => {});
		const setMessage = jest.fn(() => {});
		const categories = [];

		await act(async () => {
			render(
				<LoadingContext.Provider value={{ addRequest, removeRequest }}>
					<MessageContext.Provider value={{ setMessage }}>
						<FilterContext.Provider value={{ filter }}>
							<CategoriaContext.Provider value={{ categories }}>
								<MemoryRouter initialEntries={['/']}>
									<Products />
								</MemoryRouter>
							</CategoriaContext.Provider>
						</FilterContext.Provider>
					</MessageContext.Provider>
				</LoadingContext.Provider>
			);
		});
	});
});

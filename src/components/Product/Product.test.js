import { render, screen } from '@testing-library/react';
import Product from './index';
import { BrowserRouter, Route } from 'react-router-dom';

describe('Testando component Product', () => {
	it('Teste de snapshot', () => {
		render(
			<BrowserRouter>
				<Route>
					<Product
						image="assets/404.svg"
						name="Cuzcus"
						price="199,50"
						sku={1}
					/>
				</Route>
			</BrowserRouter>
		);

		expect(screen.getByText('Cuzcus')).toMatchSnapshot();
	});

	it('Teste de renderizacao', () => {
		render(
			<BrowserRouter>
				<Route>
					<Product
						image="assets/c12.webp"
						name="Camiseta Infantil"
						price="39,90"
						sku={12}
					/>
				</Route>
			</BrowserRouter>
		);

		expect(screen.getByText('Camiseta Infantil')).toBeInTheDocument();
		expect(screen.getByTestId('product-price-testid').textContent).toBe(
			'R$ 39,90'
		);
	});
});

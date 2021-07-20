import { render, screen } from '@testing-library/react';
import PageError from './index';

import { BrowserRouter, Route } from 'react-router-dom';

describe('Testando a pagina de error', () => {
	it('Teste de renderizacao', () => {
		render(
			<BrowserRouter>
				<Route>
					<PageError />
				</Route>
			</BrowserRouter>
		);

		expect(screen.getByText('Pagina não encontrada!')).toBeInTheDocument();
		expect(screen.getByText('pagina principal')).toBeInTheDocument();
	});
});

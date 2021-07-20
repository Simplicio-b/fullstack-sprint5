import { render, screen } from '@testing-library/react';
import MenuItem from './index';

describe('Testando component MenuItem', () => {
	it('Teste de renderizacao', () => {
		render(<MenuItem label="Novidades" />);

		expect(screen.getByText('Novidades')).toBeInTheDocument();
	});

	it('Teste de snapshot', () => {
		const { container } = render(<MenuItem label="Novidades" />);

		expect(container.firstChild).toMatchSnapshot();
	});
});

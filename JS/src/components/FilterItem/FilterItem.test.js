import { render, screen } from '@testing-library/react';
import FilterItem from './index';

describe('Testes no component FilterItem', () => {
	it('Teste de renderizacao', () => {
		render(<FilterItem label="cuzcus com leite e ovos" />);

		expect(screen.getByText('cuzcus com leite e ovos')).toBeInTheDocument();
	});

	it('Testes de snapshot', () => {
		const { container } = render(
			<FilterItem label="cuzcus com leite e ovos" />
		);

		expect(container.firstChild).toMatchSnapshot();
	});
});

import { render, screen, fireEvent } from '@testing-library/react';
import Search from './index';
import FilterContext from '../../contexts/FilterContext';

describe('Testando component search', () => {
	it('Teste de Snapshot', () => {
		let filter = '';
		const setFilter = (f) => (filter = f);

		render(
			<FilterContext.Provider value={{ setFilter }}>
				<Search />
			</FilterContext.Provider>
		);

		const input = screen.getByTestId('search-test');

		expect(input.value).toBe('');

		fireEvent.change(input, { target: { value: 'Cuzcus' } });

		expect(filter).toBe('Cuzcus');
		expect(input.value).toBe('Cuzcus');
	});
});

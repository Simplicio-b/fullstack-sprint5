import { render, screen } from '@testing-library/react';
import Filter from './index';

describe('Testando component Filters', () => {
    it('Teste de renderizacao', () => {
        const filters = [
            {
			    "id": "size",
			    "label": "Tamanho"
            },
            {
                "id": "color",
                "label": "Cuzcus"
            }
        ];

        render(<Filter filters={filters} />);

        expect(screen.getByText('Cuzcus')).toBeInTheDocument();
        expect(screen.getByTestId('filters-test').children.length).toBe(2);
    })
})

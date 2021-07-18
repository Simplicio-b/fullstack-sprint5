import { render, screen } from '@testing-library/react';
import Breadcrumbs from './index';

import CategoriesContext from '../../contexts/CategoriesContext';


describe('Testando component Breadcrumbs', () => {
    it('Teste de renderizacao', () => {

        const categories = { 
            current: [{
                "id": 1,
                "link": "#home",
                "name": "Home"
            },
            {
                "id": 2,
                "link": "#home",
                "name": "Cuzcus"
            }]
        };

        render(
            <CategoriesContext.Provider value={{ categories }}>
                <Breadcrumbs />
            </CategoriesContext.Provider>
        );

        expect(screen.getByText('Cuzcus')).toBeInTheDocument();
        expect(screen.getByTestId('breadcrumbs-test').children.length).toBe(2);
    });

});
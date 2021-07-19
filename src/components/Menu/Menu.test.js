import { render, screen } from '@testing-library/react';
import Menu from './index';
import CategoriesContext from '../../contexts/CategoriesContext';


describe('Testando component Menu', () => {
    it('Teste de renderizacao', () => {
        const categories = {
            all: [
                {
                    "id": 1,
                    "label": "Novidades",
                    "link": "#home"
                },
                {
                    "id": 2,
                    "label": "Cuzcus",
                    "link": "#home"
                }
            ]
        }

        render(
            <CategoriesContext.Provider value={{ categories }}>
                <Menu />
            </CategoriesContext.Provider>
        )

        expect(screen.getByText("Cuzcus")).toBeInTheDocument();
    });
});

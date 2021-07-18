import { render, screen } from '@testing-library/react';
import Header from './index';

import Menu from '../Menu';
import Search from '../Search';

jest.mock('../Search');
jest.mock('../Menu');

import {  BrowserRouter, Route } from 'react-router-dom'

describe('Testando component Header', () => {

    it('Teste de renderizacao', () => {
        Menu.mockImplementation(() => <div>Menu Mock</div>)
        Search.mockImplementation(() => <div>Search Mock</div>)


        render(
            <BrowserRouter>
                <Route>
                    <Header />
                </Route>
            </BrowserRouter>
        )
        
        expect(screen.getByText('menu')).toBeInTheDocument();
        expect(screen.getByText('fechar')).toBeInTheDocument();
    })

});

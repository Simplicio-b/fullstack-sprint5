import { render, screen, fireEvent } from '@testing-library/react';
import Message from './index';
import MessageContext from '../../contexts/MessageContext'

describe('Testando component Message', () => {
    it('Teste de renderizacao', () => {
        let message = 'Error ao carregar dados!'; 
        const setMessage = () => '';

        render(
            <MessageContext.Provider value={{ message, setMessage }}>
                <Message />
            </MessageContext.Provider>
        );

        expect(screen.getByText('Error ao carregar dados!')).toBeInTheDocument();
    });

    it('Teste de click no butao close', () => {
        let message = 'Error ao carregar dados!'; 
        const setMessage = () => message = '';

        render(
            <MessageContext.Provider value={{ message, setMessage }}>
                <Message />
            </MessageContext.Provider>
        );

        expect(screen.getByText('Error ao carregar dados!')).toBeInTheDocument();

        const button = screen.getByTestId('message-button-test');
        fireEvent.click(button);

        expect(message).toBe('');
    });
});

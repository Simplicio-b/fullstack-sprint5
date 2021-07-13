import { render, screen } from '@testing-library/react';
import Footer from './Footer'

describe("Testes de renderizacão Footer", () => {
  it('Section Baixe o app e newsllter', () => {
    render(<Footer />);
        
    expect(screen.getByText('Receba ofertas e novidades por e-mail')).toBeInTheDocument();
    expect(screen.getByText('Baixe nosso App')).toBeInTheDocument();
  });

  it('Section facilidades e atendimento', () => {
    render(<Footer />);

    expect(screen.getByText('Cartão Riachuelo')).toBeInTheDocument();
    expect(screen.getByText('Sobre a Riachuelo')).toBeInTheDocument();
    expect(screen.getByText('Moda que Transforma')).toBeInTheDocument();
    expect(screen.getByText('Ajuda')).toBeInTheDocument();
  })

  it("Section redes sociais e formas de pagamento", () => {
    render(<Footer />);

    expect(screen.getByText('Formas de Pagamento')).toBeInTheDocument();
    expect(screen.getByText('Siga a Riachuelo')).toBeInTheDocument();
    expect(screen.getByText('Acessibilidade')).toBeInTheDocument();
  })

});

import { render, screen } from '@testing-library/react';
import App from './App';

import CategoriesService from "./services/CategoriesService"

jest.mock("./services/CategoriesService")

describe("tests de mock", () => {

  it("CategoriasService e testes de renderizacao menu", async () => {
    CategoriesService.get.mockResolvedValue(
      {
        "all": [
            {
                "id": 6,
                "label": "Calçados",
                "link": "#home"
            },
            {
                "id": 7,
                "label": "Acessórios e Relógios",
                "link": "#home"
            },
            {
              "id": 10,
              "label": "Cuzcus",
              "link": "#home"
            }
        ],
        "current": [
        ]
      }
    )
    
    render(<App />);

    expect(await screen.findByText("Cuzcus")).toBeInTheDocument();
    expect(await screen.findByText("Calçados")).toBeInTheDocument();
    expect(await screen.findByText("Acessórios e Relógios")).toBeInTheDocument();

    expect(screen.getByTestId('menu-categorias').children.length).toBe(3);

  });



});

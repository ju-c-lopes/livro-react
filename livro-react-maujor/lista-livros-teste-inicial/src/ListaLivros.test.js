import { render, screen } from '@testing-library/react';
import ListaLivros from './ListaLivros';

describe("Testes de renderização do componente ListaLivros", () => {
  test('link para Learn React', () => {
    render(<ListaLivros />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('string save to reload', () => {
    render(<ListaLivros />);
    const stringText = screen.getByText(/save to reload/);
    expect(stringText).toBeInTheDocument();
  });
});
// test("Renderizaçção da string save to reload", () => {
//   render(<ListaLivros />);
//   const stringText = screen.getByText(/save to reload/);
//   expect(stringText).toBeInTheDocument();
// });

// describe("Teste de soma", () => {
//   function soma(a, b) {
//     return a + b;
//   }
//   test("O resultado deve ser 5", () => {
//     expect(soma(2, 3)).toBe(5);
//   })
// })

// describe("Teste de presença de item em array", () => {
//   const NOMES = ["Mauricio", "Maujor", "Samy", "Silva"];
//   test("Testa a presença do item 'Maujor' no array NOMES", () => {
//     expect(NOMES).toContain("Maujor");
//   });
// });

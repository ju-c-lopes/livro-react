import { render, screen } from "@testing-library/react";
import ListaLivros from "./ListaLivros";

// Inserção dos testes propostos

describe("Testes de renderização", () => {
  test("texto Lista de Livros", () => {
    render(<ListaLivros />);
    const linkElement = screen.getByText(/lista de livros/i);
    expect(linkElement).toBeInTheDocument();
  });
  // aqui entram mais testes
  test("input para o título do livro", () => {
    render(<ListaLivros />);
    const elInput = screen.getByLabelText("Insira um livro:", {
      selector: "input",
    })
    expect(elInput).toBeInTheDocument();
  });
  test("botão salvar", () => {
    render(<ListaLivros />);
    const elBotao = screen.getByTestId("salvar");
    expect(elBotao).toBeInTheDocument();
  })
  test("Render option", () => {
    const { container } = render(<ListaLivros />);
    console.log(container.innerHTML);
  })
})
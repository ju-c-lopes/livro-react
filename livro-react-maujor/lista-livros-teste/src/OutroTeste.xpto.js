import { render, screen } from "@testing-library/react";
import ListaLivros from "./ListaLivros";

describe("Outro arquivo de teste", () => {
  test("renderização textp xpto", () => {
    render(<ListaLivros />);
    const linkElement = screen.getByText(/xpto/i);
    expect(linkElement).toBeInTheDocument();
  });
});
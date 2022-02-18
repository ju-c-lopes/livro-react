import React, { Component } from "react";
import TabelaHead from "./components/TabelaHead";
import TabelaBody from "./components/TabelaBody";
import TabelaFoot from "./components/TabelaFoot"

class App extends Component {

  state = {
    livros: []
  };

  componentDidMount() {
    fetch("/api/livros.json")
      .then(response => response.json())
      .then(livros => this.setState({ livros }))
      .catch(function(error) {
        console.log("Erro na requisição");
      })
      .finally(function() {
        console.log("Sempre retorna");
      });
  }

  handleRemoverLinha = (id) => {
    const livros = this.state.livros.filter(l => l.id !== id);
    this.setState({ livros });
  };

  handleOrdenarCrescenteTitulo = (titulo) => {
    const livros = this.state.livros.sort((a, b) => 
      a.titulo < b.titulo ? -1 : 0 // Lê-se "A" é menor que "B" ? se true, mantém, senão faz a troca de "B" no lugar de "A"
    );
    this.setState({ livros });
  };

  handleOrdenarDecrescenteTitulo = (titulo) => {
    const livros = this.state.livros.sort((a, b) => 
      a.titulo > b.titulo ? -1 : 0 // Lê-se "A" é maior que "B" ? se true, mantém, senão faz a troca de "B" no lugar de "A"
      
    );
    this.setState({ livros });
  };

  handleOrdenarCrescenteAutor = (autor) => {
    const livros = this.state.livros.sort((a, b) => 
      a.autor < b.autor ? -1: 0 // Lê-se "A" é menor que "B" ? se true, mantém, senão faz a troca de "B" no lugar de "A"
    );
    this.setState({ livros });
  };

  handleOrdenarDecrescenteAutor = (autor) => {
    const livros = this.state.livros.sort((a, b) => 
      a.autor > b.autor ? -1 : 0 // Lê-se "A" é maior que "B" ? se true, mantém, senão faz a troca de "B" no lugar de "A"
    );
    this.setState({ livros });
  };

  render() {
    return (
      <table className="tabela">
        <TabelaHead 
          livros={ this.state.livros }
          ordenarCrescenteTit={ this.handleOrdenarCrescenteTitulo }
          ordenarDecrescenteTit={ this.handleOrdenarDecrescenteTitulo }
          ordenarCrescenteAut={ this.handleOrdenarCrescenteAutor }
          ordenarDecrescenteAut={ this.handleOrdenarDecrescenteAutor }
        />
        <TabelaBody 
          livros={ this.state.livros } 
          removerLinha={ this.handleRemoverLinha }
        />
        <TabelaFoot qdeLivros = { this.state.livros.length } />
      </table>
    );
  }
}

export default App;

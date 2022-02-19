import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Switch was changed to Routes since react-router-dom v6

import Topo from "./components/Topo";
import Home from "./components/Home";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
// import Principal from "./components/Principal";
import Rodape from "./components/Rodape";
import "./index.css";
import Livro from "./components/Livro";
// import axios from "axios";

/*
    A partir da versão 6 alterou a implementação de rotas
    Switch foi alterado para Routes (que armazena cada uma das "Route")
    render element (constado no livro) foi alterado para element, e tirado a arrow function
    Para páginas 404 também foi alterado, qualquer caminho diferente (path="*") e a declaração do elemento
*/

class App extends Component {

  state = {
    livros: []
  };

  /*
    =================================================================

    exercicio feito com api nativa fetch ao invés da biblioteca axios
    
    =================================================================
  */

  componentDidMount() {
    fetch("/api/todosOsLivros.json")
      .then(response => response.json())
      .then(livros => this.setState({ livros }))
      .catch(function(error) {
        document
          .querySelectorAll("main")[0]
          .insertAdjacentHTML("beforeend", "<p class='alerta'>Mensagem de erro</p>")
      })
      .finally(function() {
        console.log("sempre retorna");
      })
  }

  render() {
    return (
      <Router>
        <Topo />
        <Routes>
          <Route exact path="/" element={<Home livros={this.state.livros} />} />
          <Route exact path="/frontend" element={<Frontend livros={this.state.livros} />} />
          <Route exact path="/programacao" element={<Programacao livros={this.state.livros} />} />
          <Route exact path="/design" element={<Design livros={this.state.livros} />} />
          <Route exact path="/catalogo" element={<Catalogo livros={this.state.livros} />} />
          <Route path="/livro/:livroSlug" element={props => {
            const livro = this.state.livros.find(
              livro => livro.slug === props.match.params.livroSlug);
                if (livro) return <Livro livro={livro} />;
                else return <NotFound />;
            }}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </Router>
    );
  }
}

export default App;

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

/*
    A partir da versão 6 alterou a implementação de rotas
    Switch foi alterado para Routes (que armazena cada uma das "Route")
    render element (constado no livro) foi alterado para element, e tirado a arrow function
    Para páginas 404 também foi alterado, qualquer caminho diferente (path="*") e a declaração do elemento
*/

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Topo />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/frontend" element={<Frontend />} />
            <Route exact path="/programacao" element={<Programacao />} />
            <Route exact path="/design" element={<Design />} />
            <Route exact path="/catalogo" element={<Catalogo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      </Router>
    );
  }
}

export default App;

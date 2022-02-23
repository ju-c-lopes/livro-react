import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return ( // Havia faltado este return para a página ser renderizada
  <>
    <h1>404!</h1>
    <p>
      Lamento. Essa página não existe ou foi removida <br />
      <Link to="/">Voltar para a Tabela de livros</Link>
    </p>
  </>
  )
};

export default NotFound;

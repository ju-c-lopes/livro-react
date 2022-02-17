import React, { Component } from 'react';
import Card from './components/Card';

import './App.css';

class Principal extends Component {

  state = {
    tituloPagina: "Últimos Lançamentos",
    dados: {
      isbn:"978-85-7522-xxx-x",
      titulo: "React",
      autor: "Maujor",
    },
  };

  handleAlterarTitulo = () => {
    let titulo = "";
    this.state.tituloPagina === "Últimos Lançamentos"
      ? (titulo = "Categoria Programação")
      : (titulo = "Últimos Lançamentos");
    this.setState({ tituloPagina: titulo });
  }

  render() {
    return (
      <>
        <Card 
          tituloPagina={this.state.tituloPagina}
          dados={this.state.dados}
          onAlterarTitulo={this.handleAlterarTitulo}
        />
      </>
    );
  }
}

export default Principal;

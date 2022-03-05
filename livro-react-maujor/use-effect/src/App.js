import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  useEffect(() => {
    document.title = `Título: ${nome}`;
    console.log("Página renderizada"); // Monitorar renderização da página
  }, [ nome ]);

  return (
    <div className='App'>
      <h1>UseEffect</h1>
      <input 
        type="text"
        placeholder="Nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <input 
        type="password"
        placeholder="Senha"
        onChange={(e) => setSenha(e.target.value)}
      />
      <p>Nome: <span>{nome}</span></p>
      <p>Senha: <span>{senha}</span></p>
    </div>
  );
}

export default App;

/*
  Este projeto foi para entendermos o hook useEffect

  - Ele controla a renderização da página, recebendo uma função como primeiro parâmetro
  e um array(opcional) como segundo parâmetro.
  - no array, colocamos os dados que permitirão a renderização assim que esse dado for alterado

  Neste projeto, podemos observar o console.log dentro do useEffect
  Cada vez que ele é acionado no console, é uma renderização que acontece, ou seja, uma mudança de dado
*/ 
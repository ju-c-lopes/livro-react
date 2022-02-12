function Header() {
    // o return sem parênteses, precisa estar na mesma linha
    return React.createElement("header", { className: "topo" }, React.createElement("h1", { className: "logo" }, "Editora MaujorTec"));
};

function Navegacao() {
    return React.createElement("nav", {className: "navegacao"}, "Coluna de navegação");
};

function Principal() {
    return React.createElement("main", {className: "principal"}, "Coluna principal");
};

function Footer() {
    return React.createElement("footer", {className: "rodape"}, React.createElement("p", {}, "Rodapé"));
};

// Topo está envelopando o Header e o Navegação para um único componente
function Topo() {
    return React.createElement("div", {className: "c-topo"}, Header(), Navegacao());
};

//========================================================================================================

// Fragment envelopa todos os componentes que serão renderizados
function App() {
    return React.createElement(React.Fragment, { },
        Topo(),
        Principal(),
        Footer()
    );
}

//========================================================================================================

// ReactDOM renderiza uma única vez, caso coloquemos dois, o último sobrescreverá o primeiro
ReactDOM.render(App(), document.getElementById("tudo"));
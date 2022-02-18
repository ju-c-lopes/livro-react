import React from "react";
import BotaoOrdena from "./BotaoOrdena";

const TabelaHead = (props) => (
    <thead>
        <tr>
            <th colSpan="4">Tabela de Livros</th>
        </tr>
        <tr>
            <th>ISBN</th>
            <th>Título
            <BotaoOrdena
                    btCrescente={ props.ordenarCrescenteTit }
                    btDecrescente={ props.ordenarDecrescenteTit }
                />
            </th>
            <th>Autor
                <BotaoOrdena
                    btCrescente={ props.ordenarCrescenteAut }
                    btDecrescente={ props.ordenarDecrescenteAut }
                />
            </th>
            <th></th>
        </tr>
    </thead>
);

export default TabelaHead;
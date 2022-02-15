import React from "react";

const BotaoOrdena = (props) => (
    
    <div className="container-setinhas">
        <div onClick={() => props.btCrescente()}>&#9650;</div>
        <div onClick={() => props.btDecrescente()}>&#9660;</div>
    </div>
)

export default BotaoOrdena;
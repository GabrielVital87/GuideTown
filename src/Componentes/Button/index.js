import React from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

function Botao({ nome, cor, onClick, icon, link }) {
    const navegacao  =  useNavigate();
    return (
        <button className={`${cor} d-flex align-items-center`} onClick={()=> navegacao(link)}>
            {icon && <span className="me-2">{icon}</span>}
            {nome}
        </button>
    );
}

export default Botao;
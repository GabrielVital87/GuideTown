import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Fotos/Gtl.png';
import Botao from "../Button";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

function Cabecalho() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top p-0">
            <div className="container-fluid py-1">
                {/* Logo */}
                <a className="navbar-brand" href="/">
                    <img 
                        src={logo} 
                        alt="Logo Gt" 
                        width="120" 
                        height="90" 
                        className="d-inline-block align-text-top" 
                    />
                </a>

                {/* Botão toggle para mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Conteúdo colapsável */}
                <div className="collapse navbar-collapse" id="navbarContent">
                    {/* Busca rápida */}
                    <form
                        className="d-flex mx-auto my-2"
                          role="search"
                         onSubmit={(e) => e.preventDefault()}
                         style={{ maxWidth: "500px", width: "100%" }}
                     >
                        <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Pesquise Serviços..."
                      aria-label="Buscar"
                     />
                     <button className="btn btn-outline-success" type="submit">Buscar </button>
                    </form>


                    {/* Botões */}
                    <div className="d-flex flex-wrap align-items-center">
                        <Botao nome="SOBRE NÓS" cor="btn btn-outline-secondary me-2 mb-2" link='/Sobrenos' />
                        <Botao nome="Acessar" cor="btn btn-outline-secondary me-2 mb-2" link='/Login' icon={<FaSignInAlt />} />
                        <Botao nome="Criar conta" cor="btn btn-outline-secondary me-2 mb-2"link='/Register' icon={<FaUserPlus />} />
                        <button className="btn btn-primary mb-2">
                            <span className="spinner-border spinner-border-sm"></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Cabecalho;

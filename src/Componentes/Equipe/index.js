import React from "react";
import "./Equipe.css"; // Importa o CSS
import gtl from '../../Fotos/Gtl.png'
import gv from '../../Fotos/gv.png'
import al from '../../Fotos/al.png'
import jl from '../../Fotos/jl.png'
import ca from '../../Fotos/ca.png'
import lt from '../../Fotos/Lt.png'
import aq from '../../Fotos/aq.png'


const membros = [
  { nome: "Alline Heveline", foto: al , comentario: "Designer UX/UI", },
  { nome: "Áquiles Lunar", foto: aq, comentario: "Desenvolvedor Back-end", },
  { nome: "Camila Rayane", foto: ca, comentario: "Gerente de Projeto",  },
  { nome: "Gabriel Vital", foto: gv, comentario: "Desenvolvedor Front-end" },
  { nome: "Julio César", foto: jl, comentario: "Designer UX/UI", },
  { nome: "Leticia Lacerda", foto: lt, comentario: "Designer UX/UI", },
];

const Equipe = () => {
  return (
    <div className="equipe-container">
      {membros.map((membro, index) => (
        <div key={index} className="perfil">
          <img src={membro.foto} alt={membro.nome} className="foto" />
          <p className="nome">{membro.nome}</p>
          <p className="comentario">{membro.comentario}</p> 
        </div>
      ))}
    </div>
  );
};

export default Equipe;

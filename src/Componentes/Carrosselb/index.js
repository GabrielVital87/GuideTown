import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Botao from '../Button';

function Carroselb (){
    return(
        <>
         
        {/* Espaçamento abaixo do cabeçalho */}
      <div className="container text-center" style={{ paddingTop: '100px' }}></div>

      {/* Seção de botões com carrossel */}
      <section className="container-fluid p-5 text-center">
        <div id="botaoCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-center gap-3">
                <Botao nome="Serviços Turísticos" cor="btn btn-laranja" />
                <Botao nome="Conheça Igarassu" cor="btn btn-laranja" />
                <Botao nome="Parceiros" cor="btn btn-laranja" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center gap-3">
                <Botao nome="Hospedagem" cor="btn btn-laranja" />
                <Botao nome="Gastronomia" cor="btn btn-laranja" />
                <Botao nome="Contato" cor="btn btn-laranja" />
              </div>
            </div>
          </div>

          {/* Controles do carrossel */}
          <button className="carousel-control-prev" type="button" data-bs-target="#botaoCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#botaoCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>
      </section>
      
        </>
    )
}

export default Carroselb
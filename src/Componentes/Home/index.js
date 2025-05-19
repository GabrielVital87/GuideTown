import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Cabecalho from "../Cabecalho";
import Rodape from "../Rodape";
import Botao from "../Button";
import img1 from "../../Fotos/ig1.jpeg"
import img2 from "../../Fotos/ig2.jpeg"

function Home() {
    return (
        <div style={{ backgroundColor: '#4A90E2', minHeight: '100vh', color: 'white' }}>
            <Cabecalho />

            {/* Adiciona espaçamento para que o botão fique visível abaixo do cabeçalho */}
            <div className="container text-center" style={{ paddingTop: '100px' }}>
               
            </div>

            <section className="container-fluid p-5 text-center">
              
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
                
            </section>

            <section className="container-fluid p-5 text-body text-center text-dark">
                
  <section className="container py-5 bg-dark text-white rounded-4 shadow">
  <div className="row align-items-center g-4">
    
    {/* Texto */}
    <div className="col-md-6 ps-md-4">
      <h3 className="text-warning display-5 mb-3">Descobrindo os Tesouros de Igarassu</h3>
      <p className="fw-light fs-5 lh-lg mb-0">
        Igarassu mantém um charme peculiar, uma cadência mais lenta que convida à contemplação. 
        É um lugar onde o passado e o presente se entrelaçam de forma harmoniosa, onde a história 
        não é apenas um registro em livros, mas uma presença viva nas ruas, nos rostos de seus 
        moradores e na brisa que sopra do mar. Visitar Igarassu é embarcar em uma jornada no tempo, 
        descobrindo a alma ancestral de Pernambuco incrustada no coração pulsante da metrópole. 
        É sentir a história acalentando o presente, construindo um futuro com a força de suas raízes.
      </p>
    </div>

    {/* Imagem */}
    <div className="col-md-6 text-center">
      <img 
        src={img1} 
        alt="Imagem ilustrativa" 
        className="img-fluid rounded-4 shadow" 
        style={{ maxHeight: '580px', objectFit: 'cover' }}
      />
    </div>

  </div>
   <section className="container-fluid p-5 text-body text-center text-dark">
                
  <section className="container py-5 bg-dark text-white rounded-4 shadow">
  <div className="row align-items-center g-4">
    
   
    {/* Imagem */}
    <div className="col-md-6 text-center">
      <img 
        src={img2} 
        alt="Imagem ilustrativa" 
        className="img-fluid rounded-4 shadow" 
        style={{ maxHeight: '580px', objectFit: 'cover' }}
      />
    </div>

 {/* Texto */}
    <div className="col-md-6 ps-md-4">
      <h3 className="text-warning display-5 mb-3"></h3>
      <p className="fw-light fs-5 lh-lg mb-0">
        A natureza também abençoa
Igarassu. Manguezais
verdejantes serpenteiam a beira-
mar, abrigando uma rica
biodiversidade e oferecendo um
refúgio de tranquilidade. As
praias, com sua areia clara e
águas mornas, convidam ao
descanso e ao lazer,
proporcionando um contraste
revigorante com a atmosfera
histórica do centro.
      </p>
    </div>

  </div>
  
</section>



            </section>
</section>



            </section>
            

           

            <Rodape />
        </div>
    );
}

export default Home;

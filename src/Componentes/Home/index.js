import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from "../Cabecalho";
import Rodape from "../Rodape";
import Botao from "../Button";
import img1 from "../../Fotos/ig1.jpeg";
import img2 from "../../Fotos/ig2.jpeg";
import Sonibus from "../Sonibus";
import Carroselb from "../Carrosselb";

function Home() {
  return (
    <div style={{ backgroundColor: '#4A90E2', minHeight: '100vh', color: 'white' }}>
      <Cabecalho />
      <Carroselb/>
    
      {/* Seção: Texto e imagem 1 */}
      <section className="container py-5 bg-dark text-white rounded-4 shadow my-5">
        <div className="row align-items-center g-4">
          <div className="col-md-6 ps-md-4">
            <h3 className="text-warning text-center display-5 mb-3">Descobrindo os Tesouros de Igarassu</h3>
            <p className="fw-light fs-5 text-center lh-lg mb-0">
              Igarassu mantém um charme peculiar, uma cadência mais lenta que convida à contemplação.
              É um lugar onde o passado e o presente se entrelaçam de forma harmoniosa, onde a história
              não é apenas um registro em livros, mas uma presença viva nas ruas, nos rostos de seus
              moradores e na brisa que sopra do mar. Visitar Igarassu é embarcar em uma jornada no tempo,
              descobrindo a alma ancestral de Pernambuco incrustada no coração pulsante da metrópole.
              É sentir a história acalentando o presente, construindo um futuro com a força de suas raízes.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={img1}
              alt="Imagem ilustrativa"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: '580px', objectFit: 'cover' }}
            />
          </div>
        </div>
         {/* Seção: Imagem e texto 2 */}
      <section className="container py-5 bg-dark text-white rounded-4 shadow mb-5">
        <div className="row align-items-center g-4">
          <div className="col-md-6 text-center">
            <img
              src={img2}
              alt="Imagem ilustrativa"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: '580px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-6 ps-md-4">
            <h3 className="text-warning  display-5 mb-3">Belezas Naturais de Igarassu</h3>
            <p className="fw-light fs-5 lh-lg mb-0">
              A natureza também abençoa Igarassu. Manguezais verdejantes serpenteiam à beira-mar,
              abrigando uma rica biodiversidade e oferecendo um refúgio de tranquilidade. As praias,
              com sua areia clara e águas mornas, convidam ao descanso e ao lazer, proporcionando um
              contraste revigorante com a atmosfera histórica do centro.
            </p>
          </div>
        </div>
      </section>
    







      </section>

     

      <Rodape />
    </div>
  );
}

export default Home;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Rodape from '../Rodape';
import Botao from "../Button";
import Home from '../Home';
import Cabecalho from '../Cabecalho';
import ig3 from '../../Fotos/ig3.jpeg'
import Carrosselb from '../Carrosselb'
import Equipe from '../Equipe';

function Sobrenos(){
    return(
        <>
         <div style={{ background: 'linear-gradient(to bottom, #003f7d, #4A90E2)', minHeight: '100vh', color: 'white' }}>

      <Cabecalho/>
       
      <Carrosselb/>
     <section style={{ position: 'relative' }}>
  <div style={{
    backgroundImage: `url(${ig3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    borderRadius: '1rem'
  }}>
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      height: '100%',
      borderRadius: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h2 className="text-white display-5">SOBRE NÓS</h2>
    </div>
  </div>
</section>

     <h2 className="text-white font-extrabold text-center display-5 mb-3">Bem vindo(a) ao GuideTown!</h2>
     <section className="container py-5 bg-light text-dark rounded-4 shadow my-5">
        <div className="row align-items-center g-4">
            <p className="fw-light text-center fs-5 lh-lg mb-0">
              Nossa história começou com uma percepção clara e um desejo profundo: Igarassu,
uma cidade com uma riqueza histórica, cultural e natural inegável, precisava de um
palco digital à sua altura. Percebemos que, apesar de todo o seu encanto, não havia
um espaço online que concentrasse, de forma vibrante e acessível, tudo o que ela e
suas regiões adjacentes têm a oferecer. Pequenos textos dispersos em sites
institucionais não faziam justiça ao potencial turístico e comercial local.
Foi a partir dessa lacuna que nasceu o GuideTown: uma plataforma digital dedicada a
ser o elo entre a riqueza de Igarassu e você. Mais do que um guia, somos um convite
à descoberta, um impulsionador do comércio local e um parceiro para
empreendedores turísticos.
            </p>
          </div>
          </section>
    <section className="container py-5 text-white rounded-4 shadow my-5">
  <div className="row align-items-center g-4">
    <div className="col-md-6 ps-md-4 border-end border-light pe-md-5">
      <h3 className="text-warning text-center fs-2 mb-3 fw-bold">Nossa Missão</h3>
      <p className="fw-light text-center fs-5 lh-lg mb-0">
        Conectar pessoas às experiências autênticas de Igarassu e regiões adjacentes,
        promovendo o turismo local e aquecendo a economia por meio da divulgação
        abrangente de seus atrativos e parceiros comerciais.

      </p>
    </div>
    <div className="col-md-6 text-center ps-md-5">
      <h3 className="text-warning text-center fs-2 mb-3 fw-bold">Nossa Visão</h3>
      <p className="fw-light Texte-center fs-5 lh-lg mb-0">
        Ser a principal referência online para quem busca explorar, viver e investir em
       Igarassu, reconhecida pela completude das informações, facilidade de uso e pelo
       impacto positivo no desenvolvimento local.

      </p>
    </div>
  </div>
</section>

     <section className="container py-5 bg-light text-dark rounded-4 shadow my-5">
        <div className="row align-items-center g-4">
           <h3 className="text-center display-5 mb-3" style={{ color: '#FFA500' }}>O QUE NOS MOVE</h3>

            <p className="fw-light text-center fs-5 lh-lg mb-0">
              Somos apaixonados por Igarassu e acreditamos no poder da tecnologia para
              transformar realidades. Vemos no GuideTown a oportunidade de:
              Dar visibilidade a pequenos e grandes negócios locais, que são o coração da nossa
              comunidade.
              Facilitar a vida de turistas e moradores, oferecendo em um só lugar tudo o que
              precisam para aproveitar a cidade ao máximo.
              Contribuir para o desenvolvimento sustentável do turismo e do comércio de Igarassu.
              Cada clique no GuideTown é um passo para descobrir uma Igarassu mais viva, mais
              conectada e pronta para encantar. Seja você um viajante em busca de novas
              aventuras ou um comerciante local querendo expandir seus horizontes, o GuideTown
              está aqui para você.
              Junte-se a nós nesta jornada de descoberta e crescimento. Explore. Viva. Conecte-se.
              Esse é o GuideTown.
            </p>
          </div>
          </section>
          <h2 className="text-white font-extrabold text-center display-5 mb-3">Conheça a Nossa Equipe</h2>
          <Equipe/>



      
     

      <Rodape />





         </div>
        
        
        
        
        
        </>
    );
};

export default Sobrenos;
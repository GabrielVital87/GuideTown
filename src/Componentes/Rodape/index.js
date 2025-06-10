import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Rodape.css'; // Importando o CSS separado
import logo from '../../Fotos/Gtl.png';
import { FaPhoneAlt, FaFileContract, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Rodape() {
  return (
    <footer className="text-white py-5" style={{ backgroundColor: '#4b4d4f' }}>
      <div className="container">
        <div className="row justify-content-center text-center">
          {/* Logo */}
          <div className="col-12 mb-4">
            <a href="/">
              <img
                src={logo}
                alt="Logo Gt"
                width="300"
                height="200"
                className="img-fluid mb-3"
              />
            </a>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-4">
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                  <FaPhoneAlt className="me-2" />
                  Fale Conosco
                </a>
              </li>
              <li>
                <a href="/termos" className="text-white text-decoration-none">
                  <FaFileContract className="me-2" />
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais com classe CSS */}
          <div className="col-12 mb-4">
            <div className="d-flex justify-content-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Nome e Direitos Autorais */}
          <div className="col-12">
            <h5 className="mb-2">GT Sua Cidade Guiada</h5>
            <p className="mb-0">© 2025 GT Soluções. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;

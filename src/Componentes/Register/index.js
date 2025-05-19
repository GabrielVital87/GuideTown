import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Rodape from '../Rodape';
import Cabecalho from '../Cabecalho';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <Cabecalho />

      {/* Espaço extra entre cabeçalho e conteúdo + padding inferior para afastar do rodapé */}
      <div className="pt-5 pb-5 bg-light" style={{ minHeight: '100vh' }}>
        <div className="d-flex align-items-center justify-content-center">
          <div className="card shadow-lg p-4 mt-5" style={{ maxWidth: "500px", width: "100%" }}>
            <div className="text-center mb-4">
              <h1 className="text-primary">REGISTER</h1>
              <p className="text-muted">
                Já é cadastrado?{' '}
                <Link to="/login" className="text-decoration-none">
                  <strong>LOGIN</strong>
                </Link>
              </p>
            </div>

            <form action="/action_page.php">
              <div className="mb-3">
                <label htmlFor="nomeEmpresa" className="form-label">Nome da Empresa</label>
                <input
                  type="text"
                  className="form-control"
                  id="nomeEmpresa"
                  placeholder="Digite o nome da empresa"
                  name="nome"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Digite seu e-mail"
                  name="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="cpfCnpj" className="form-label">CPF / CNPJ</label>
                <input
                  type="text"
                  className="form-control"
                  id="cpfCnpj"
                  placeholder="Digite CPF ou CNPJ"
                  name="cpfCnpj"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="senha" className="form-label">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="senha"
                  placeholder="Digite sua senha"
                  name="senha"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmSenha" className="form-label">Confirmar Senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmSenha"
                  placeholder="Repita a senha"
                  name="confirmSenha"
                  required
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Criar conta</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Rodape />
    </>
  );
}

export default Register;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Rodape from '../Rodape';
import Cabecalho from '../Cabecalho';
import { Link } from 'react-router-dom';

function Register() {
  const [tipoCadastro, setTipoCadastro] = useState('cliente');

  return (
    <>
      <Cabecalho />

      <div className="pt-5 pb-5 bg-light" style={{ minHeight: '100vh' }}>
        <div className="d-flex align-items-center justify-content-center">
          <div className="card shadow-lg p-4 mt-5" style={{ maxWidth: "500px", width: "100%" }}>
            <div className="text-center mb-4">
              <h1 className="text-primary">CADASTRAR</h1>
              <p className="text-muted">
                Já é cadastrado?{' '}
                <Link to="/login" className="text-decoration-none">
                  <strong>LOGIN</strong>
                </Link>
              </p>
            </div>

            <form action="/action_page.php">
              {/* Tipo de cadastro */}
              <div className="mb-3">
                <label htmlFor="tipoCadastro" className="form-label">Tipo de Cadastro</label>
                <select
                  id="tipoCadastro"
                  className="form-select"
                  value={tipoCadastro}
                  onChange={(e) => setTipoCadastro(e.target.value)}
                >
                  <option value="cliente">Cliente</option>
                  <option value="empresa">Empresa</option>
                </select>
              </div>

              {/* Nome ou Razão Social */}
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">
                  {tipoCadastro === 'empresa' ? 'Razão Social' : 'Nome'}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  placeholder={tipoCadastro === 'empresa' ? 'Digite a razão social' : 'Digite seu nome'}
                  name="nome"
                  required
                />
              </div>

              {/* Campo adicional: Nome Fantasia (somente empresa) */}
              {tipoCadastro === 'empresa' && (
                <div className="mb-3">
                  <label htmlFor="nomeFantasia" className="form-label">Nome Fantasia</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nomeFantasia"
                    placeholder="Digite o nome fantasia"
                    name="nomeFantasia"
                  />
                </div>
              )}

              {/* Email */}
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

              {/* CPF ou CNPJ */}
              <div className="mb-3">
                <label htmlFor="cpfCnpj" className="form-label">
                  {tipoCadastro === 'empresa' ? 'CNPJ' : 'CPF'}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cpfCnpj"
                  placeholder={tipoCadastro === 'empresa' ? 'Digite o CNPJ' : 'Digite o CPF'}
                  name="cpfCnpj"
                  required
                />
              </div>

              {/* Senha */}
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

              {/* Confirmar Senha */}
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

              {/* Botão */}
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

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Rodape from '../Rodape';
import Botao from "../Button";
import Home from '../Home';
import Cabecalho from '../Cabecalho';

function Login() {
    return(
        
<>
  <Cabecalho />

  <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
    <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
      <div className="text-center mb-4">
        <h1 className="text-primary">LOGIN</h1>
        <p className="text-muted">
          Ainda não é cadastrado? <br />
          <a href="/register" className="text-decoration-none">
            <strong>Crie sua conta</strong>
          </a>
        </p>
      </div>

      <form action="/action_page.php">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
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
          <label htmlFor="pwd" className="form-label">
            Senha
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Digite sua senha"
            name="pswd"
            required
          />
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="rememberMe"
            name="remember"
          />
          <label className="form-check-label" htmlFor="rememberMe">
            Lembrar de mim
          </label>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Entrar
          </button>
        </div>
      </form>
    </div>
  </div>

  <Rodape />
</>







    )


}

export default Login